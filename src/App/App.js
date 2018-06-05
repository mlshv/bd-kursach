import React from 'react'
import { injectGlobal } from 'styled-components'
import { Button } from 'Button'
import { Logo } from 'Logo'
import { Main } from 'Main'
import { App, Header, Title } from './styles'

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`

export default () => (
  <App>
    <Header>
      <Logo />
      <Title>Найди своё идеальное решение</Title>
      <Button>Подобрать</Button>
    </Header>
    <Main />
  </App>
)
