import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../../images/iseto-logo.png';

const Question2 = () => {
  return(
    <Wrapper>
      <Logo src={logo} alt="Logo" />
      <QuestionNum>第２問</QuestionNum>
      <QuestionWrapper>
        <Question>リスク許容度を<br/>教えてください。</Question>
      </QuestionWrapper>
      <ButtonWrapper>
        <ButtonLabel><Link to="/question3"><Button>リスク３</Button></Link><LabelName>ハイリスク</LabelName></ButtonLabel>
        <ButtonLabel><Link to="/question3"><Button>リスク２</Button></Link></ButtonLabel>
        <ButtonLabel><Link to="/question3"><Button>リスク１</Button></Link><LabelName>ローリスク</LabelName></ButtonLabel>
        <ButtonLabel><Link to="/question3"><Button>リスク０</Button></Link><LabelName>元本保証</LabelName></ButtonLabel>
      </ButtonWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 375px;
  padding-bottom: 50px;
`

const Logo = styled.img`
  width: 65%;
`

const QuestionNum = styled.p`
color: #3CB2B2;
font-size: 30px;
line-height: 1;
display: flex;
align-items: center;
&::before {
  content: "";
  display: inline-block;
  flex-grow: 1;
  height: 5px;
  background-color: #3CB2B2;
  margin-right: .5em;
}
&::after {
  content: "";
  display: inline-block;
  flex-grow: 1;
  height: 5px;
  background-color: #3CB2B2;
  margin-left: .5em;
}
`

const QuestionWrapper = styled.div`
text-align: center;
`

const Question = styled.p`
color: #3CB2B2;
font-size: 25px;
margin-bottom: 0;
`

const ButtonWrapper = styled.div`

`

const ButtonLabel = styled.div`
width: 60%;
margin: 0 auto;
`

const Button = styled.button`
height: 45px;
width: 50%;
font-size: 20px;
font-weight: 1000;
margin-top: 25px;
margin-left: 10px;
border-radius: 25px 25px;
color: #3CB2B2;
background-color: white;
border: 1px solid #3CB2B2;
box-shadow: 0px 3px 4px #A4A4A4;
`

const LabelName = styled.span`
margin-left: 10px;
color: #3CB2B2;
font-size: 17px;
font-weight: 500;
`

export default Question2;