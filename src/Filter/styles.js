import styled from 'styled-components'

export const Root = styled.div`
  position: relative;
  padding: 16px;
  border-right: 1px solid #efefef;
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
  background: #fff;
`

export const Name = styled.span`
  cursor: default;
  ${Root}:hover & {
    color: #32c59e;
  }
`

export const Value = styled.button`
  display: block;
  padding: 16px 32px 16px 16px;
  border: none;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  outline: none;
  background: transparent;
  ${({ isSelected }) => isSelected && 'font-weight: bold'};
  cursor: pointer;

  &:hover {
    color: #32c59e;
  }
`
