import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../../images/iseto-logo.png';

const Question1 = () => {
  return(
    <Wrapper>
      <Logo src={logo} alt="Logo" />
      <QuestionNum>第１問</QuestionNum>
      <QuestionWrapper>
        <Question>今の資産形成は<br/>どのようにされていますか？</Question>
      </QuestionWrapper>
      <ButtonWrapper>
        <Link to="/question2"><Button>口座を分けて管理</Button></Link>
        <Link to="/question2"><Button>毎月余ったら貯金</Button></Link>
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
`

const ButtonWrapper = styled.div`
text-align: center;
`

const Button = styled.button`
height: 60px;
width: 80%;
font-size: 25px;
font-weight: 600;
margin-top: 30px;
margin-left: 10px;
border-radius: 30px 30px;
color: #3CB2B2;
background-color: white;
border: 1px solid #3CB2B2;
box-shadow: 0px 2px 4px #A4A4A4;
`

export default Question1;