import React from 'react'
import { Filter } from 'Filter'
import { Root } from './styles'

export class Filters extends React.Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    if (!prevState.filters) {
      const filters = {}

      Object.values(nextProps.preset).forEach(({ name, values }) => {
        Object.values(values).forEach((value) => {
          if (filters[name]) {
            filters[name][value] = false
          } else {
            filters[name] = { [value]: false }
          }
        })
      })

      return {
        filters,
      }
    }

    return null
  }

  state = {
    filters: null,
  }

  handleToggleFilter = (filterName, filterValue) => {
    this.setState(
      prevState => ({
        filters: {
          ...prevState.filters,
          [filterName]: {
            ...prevState.filters[filterName],
            [filterValue]: !prevState.filters[filterName][filterValue],
          },
        },
      }),
      () => this.props.onFiltersUpdate(this.state.filters),
    )
  }

  render() {
    const { preset } = this.props

    return (
      <Root>
        {this.state.filters &&
          Object.values(preset).map(({ name }) => (
            <Filter
              key={name}
              name={name}
              values={this.state.filters[name]}
              onToggleValue={this.handleToggleFilter}
            />
          ))}
      </Root>
    )
  }
}
