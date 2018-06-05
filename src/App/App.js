import React from 'react'
import { injectGlobal } from 'styled-components'
import { Grid } from 'react-flexbox-grid'
import { questions, results } from 'database'
import { Button } from 'Button'
import { Logo } from 'Logo'
import { Main } from 'Main'
import { Quiz } from 'Quiz'
import { CTAScreen } from 'CTAScreen'
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
  state = { quiz: false, quizResult: null }

  toggleQuiz = () => this.setState(prevState => ({ quiz: !prevState.quiz }))

  handleQuizResult = (result) => {
    this.setState({
      quizResult: result,
    })
  }

  render() {
    const { quizResult } = this.state
    return (
      <Grid>
        {this.state.quiz ? (
          <div>
            <Header>
              <Logo />
              <Title>Подбор лака</Title>
              <Button onClick={this.toggleQuiz}>На главную</Button>
            </Header>
            {quizResult ? (
              <CTAScreen
                cover={results[quizResult].cover}
                title=""
                text={results[quizResult].text}
              />
            ) : (
              <Quiz questions={questions} onResult={this.handleQuizResult} />
            )}
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
