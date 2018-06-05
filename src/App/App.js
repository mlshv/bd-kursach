import React from 'react'
import { injectGlobal } from 'styled-components'
import { Button } from 'Button'
import { Logo } from 'Logo'
import { Main } from 'Main'
import { Quiz } from 'Quiz'
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

export default class App extends React.Component {
  state = { quiz: false }

  toggleQuiz = () => this.setState(prevState => ({ quiz: !prevState.quiz }))

  render() {
    return (
      <Grid>
        {this.state.quiz ? (
          <div>
            <Header>
              <Logo />
              <Title>Подбор лака</Title>
              <Button onClick={this.toggleQuiz}>На главную</Button>
            </Header>
            <Quiz />
          </div>
        ) : (
          <div>
            <Header>
              <Logo />
              <Title>Найди идеальное решение</Title>
              <Button onClick={this.toggleQuiz}>Подобрать ➔</Button>
            </Header>
            <Main />
          </div>
        )}
      </Grid>
    )
  }
}
