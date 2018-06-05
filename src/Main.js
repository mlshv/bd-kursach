import React from 'react'
import { Filters } from 'Filters'
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

    console.log(newPropNames)
    this.setState({ propNames: newPropNames }, () => console.log(this.state))
  }

  render() {
    return (
      <div>
        <Filters preset={props} onFiltersUpdate={this.handleFiltersUpdate} />
        {selectItemsByPropsNames(items, this.state.propNames).map(item => (
          <div key={item.name}>{item.name}</div>
        ))}
      </div>
    )
  }
}
