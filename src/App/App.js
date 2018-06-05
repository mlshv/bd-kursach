import React from 'react'
import { injectGlobal } from 'styled-components'
import { Button } from 'Button'
import { Logo } from 'Logo'
import { Main } from 'Main'
import { Grid } from 'react-flexbox-grid'
import { Header, Title } from './styles'

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background: #efefef;
  }
`

export default () => (
  <Grid>
    <Header>
      <Logo />
      <Title>Найди идеальное решение</Title>
      <Button>Подобрать ➔</Button>
    </Header>
    <Main />
  </Grid>
)
