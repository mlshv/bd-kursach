import React from 'react'
import styled from 'styled-components'
import { AnswerSelect } from 'AnswerSelect'
import { Base, CardWrap, Button, Center } from './styles'

const Card = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 12px 16px;
  box-sizing: border-box;
  border-radius: 16px;
  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.14);

  background: #32c59e;

  @media (min-width: 575px) {
    padding: 24px 24px 48px 24px;
  }
`

const PageIndicator = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #fff;

  @media (min-width: 575px) {
    font-size: 28px;
    font-weight: 600;
  }
`

const QuestionText = styled.h1`
  font-size: 18px;
  margin: 32px 0;
  font-weight: 600;
  color: rgba(255, 255, 255, 1);
  text-align: center;

  @media (min-width: 575px) {
    font-size: 26px;
    font-weight: 600;
  }
`

export class Quiz extends React.Component {
  state = {
    page: 0,
    answers: [],
    isSelected: false,
  }

  handleAnswer = (score) => {
    const { answers, page } = this.state

    this.setState({
      answers: [...answers.slice(0, page), score, ...answers.slice(page + 1)],
      isSelected: true,
    })
  }

  handleNext = () => {
    const { page, answers } = this.state
    const { onResult, questions } = this.props

    if (answers[page]) {
      if (questions.length === page + 1) {
        const counts = answers.reduce(
          (accumulator, answer) => ({
            ...accumulator,
            [answer]: (accumulator[answer] || 0) + 1,
          }),
          {},
        )

        const result = Object.keys(counts).reduce(
          (currentMax, answer) => {
            if (counts[answer] > currentMax.count) {
              return { count: counts[answer], answer }
            }

            return currentMax
          },
          { count: null },
        )

        onResult(result.answer)
      } else {
        this.setState({
          page: page + 1,
          isSelected: false,
        })
      }
    }
  }

  render() {
    const { page, isSelected } = this.state
    const { questions } = this.props

    return (
      <Base>
        <CardWrap>
          <Card>
            <PageIndicator>
              {page + 1}/{questions.length}
            </PageIndicator>
            <QuestionText>{questions[page].text}</QuestionText>
            <Center>
              <Button onClick={this.handleNext}>Дальше</Button>
            </Center>
          </Card>
        </CardWrap>
        <AnswerSelect
          answers={questions[page].answers}
          onAnswer={this.handleAnswer}
          isSelected={isSelected}
        />
      </Base>
    )
  }
}
