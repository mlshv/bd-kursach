import React from 'react'
import { Root, Name, Values, Value } from './styles'

/* eslint-disable */
export class Filter extends React.Component {
  render() {
    const { name, values, onToggleValue } = this.props

    return (
      <Root>
        <Name>{name}</Name>
        <Values>
          {Object.keys(values).map(value => (
            <Value
              key={value}
              onClick={() => onToggleValue(name, value)}
              isSelected={values[value]}
            >
              {value}
            </Value>
          ))}
        </Values>
      </Root>
    )
  }
}
