import React from 'react'
import styled from 'styled-components'
import { Base, CardWrap, SubCardWrap, SubCard } from 'Quiz/styles'

const Card = styled.div`
  max-width: 575px;
  margin: 0 auto;
  padding: 12px 16px;
  box-sizing: border-box;
  border-radius: 3px;
  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.14);
  background: #fff;
  background-size: cover;
  background-position: center;
  @media (min-width: 575px) {
    padding: 24px 24px 48px 24px;
  }
`

const Text = styled.p`
  padding: 16px 12px;
  font-size: 18px;
  font-weight: 500;
  color: rgba(71, 76, 83, 1);
  text-align: center;

  @media (min-width: 575px) {
    padding: 24px 18px;
  }
`

export const CTAScreen = ({ cover, text }) => (
  <Base>
    <CardWrap>
      <Card>
        <img src={cover} alt="" style={{ width: '100%' }} />
      </Card>
    </CardWrap>
    <SubCardWrap>
      <SubCard>
        <Text>{text}</Text>
      </SubCard>
    </SubCardWrap>
  </Base>
)
