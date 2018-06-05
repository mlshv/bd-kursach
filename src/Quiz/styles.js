import styled from 'styled-components'

export const Base = styled.div`
  display: flex;
  margin-top: 16px;
  flex-direction: column;
  flex-grow: 1;

  @media (min-width: 575px) {
    margin-bottom: 48px;
  }
`

export const CardWrap = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
`


export const SubCardWrap = styled.div`
  flex-grow: 1;
  width: 100%;
  max-width: 550px;
  margin: 0 auto;
  padding-bottom: 24px;
  background: #fff;

  @media (min-width: 575px) {
    flex-grow: unset;
    padding-bottom: 0;
  }
`

export const SubCard = styled.div`
  position: relative;
  top: -16px;
  z-index: 0;
  padding-top: 24px;
  background: #fff;
`

export const Card = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 12px 16px;
  box-sizing: border-box;
  border-radius: 16px;
  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.14);
  background-color: #333;
  background-image: url(${({ background }) => background});
  background-size: cover;
  background-position: center;
  @media (min-width: 575px) {
    padding: 64px 24px;
  }
`

export const Title = styled.h1`
  margin: 64px 0;
  font-size: 21px;
  font-weight: 800;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  text-align: center;
  color: rgba(255, 255, 255, 1);

  @media (min-width: 575px) {
    margin: 128px 0;
    font-size: 26px;
    font-weight: 600;
  }
`

export const ActionWrap = styled.div`
  position: absolute;
  left: 0;
  bottom: -11px;
  width: 100%;
  text-align: center;
`

export const Text = styled.p`
  padding: 16px 12px;
  font-size: 18px;
  font-weight: 500;
  color: rgba(71, 76, 83, 1);
  text-align: center;
`

export const Center = styled.div`
  display: block;
  margin: 0 auto;
  text-align: center;
`

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 10px 24px;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  color: #32c59e; 
  outline: none;
  text-decoration: none;
  border: none;
  border-radius: 32px;
  background-color: rgba(245, 245, 245, 1);
  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.13);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: none;
  }

  @media (min-width: 575px) {
    padding: 12px 32px;
    font-size: 18px;
  }

  ${({ primary }) =>
    primary &&
    `
  color: #fff;
  background-color: rgba(225, 18, 136, 1);
  box-shadow: 0px 8px 20px 0px rgba(225, 18, 136, 0.32);
  `};

  ${({ hasIcon }) =>
    hasIcon &&
    `
  padding-left: 18px;
  @media (min-width: 575px) {
    padding-left: 18px;
  }
  `};

  ${({ inversed }) =>
    inversed &&
    `
  background-image: linear-gradient(-57deg, rgba(105, 143, 153, 1) 0%, rgba(112, 175, 206, 1) 100%);
  color: #fff;
  `};
`
