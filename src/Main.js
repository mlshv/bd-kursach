import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import { Filters } from 'Filters'
import { ProductCard } from 'ProductCard'
import { props, items, selectItemsByPropsNames } from 'knowledgebase'

export class Main extends React.Component {
  state = {
    propNames: {},
  }

  handleFiltersUpdate = (newFilters) => {
    const newPropNames = {}

    Object.entries(newFilters).forEach(([propName, valuesToSelected]) => {
      const selectedValues = []

      Object.entries(valuesToSelected).forEach(([value, isSelected]) => {
        if (isSelected) {
          selectedValues.push(value)
        }
      })

      newPropNames[propName] = selectedValues
    })

    this.setState({ propNames: newPropNames })
  }

  render() {
    return (
      <React.Fragment>
        <Filters preset={props} onFiltersUpdate={this.handleFiltersUpdate} />
        <br />
        <Row>
          {selectItemsByPropsNames(items, this.state.propNames).map(({ name, image }) => (
            <Col key={name} xs={4}>
              <ProductCard image={image} name={name} />
            </Col>
          ))}
        </Row>
      </React.Fragment>
    )
  }
}
