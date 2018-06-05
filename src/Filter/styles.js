import styled from 'styled-components'

export const Root = styled.div`
  position: relative;
  padding: 16px;
  border-right: 1px solid #000;
  &:last-child {
    border-right: none;
  }
`

export const Values = styled.div`
  position: absolute;
  left: 0;
  top: 50px;
  display: none;
  ${Root}:hover & {
    display: block;
  }
`

export const Name = styled.span`
  cursor: default;
`

export const Value = styled.button`
  display: block;
  padding: 16px;
  border: none;
  outline: none;
  background: transparent;
  ${({ isSelected }) => isSelected && 'font-weight: bold'};
  cursor: pointer;
`
