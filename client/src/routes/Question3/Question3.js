import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../../images/iseto-logo.png';

const Question3 = () => {
  return(
    <Wrapper>
      <Logo src={logo} alt="Logo" />
      <QuestionNum>第２問</QuestionNum>
      <QuestionWrapper>
        <Question>リスク許容度を<br/>教えてください。</Question>
      </QuestionWrapper>
      <ButtonWrapper>
        <Link to="/result"><Button>毎月コツコツ積立</Button></Link>
        <Link to="/result"><Button>保険の見直し</Button></Link>
        <Link to="/result"><Button>外貨預金</Button></Link>
        <Link to="/result"><Button>お勧め商品を聞く</Button></Link>
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
text-align: center;
`

const Button = styled.button`
height: 52px;
width: 80%;
font-size: 23px;
font-weight: 1000;
margin-top: 25px;
margin-left: 10px;
border-radius: 26px 26px;
color: #3CB2B2;
background-color: white;
border: 1px solid #3CB2B2;
box-shadow: 0px 3px 4px #A4A4A4;
`


export default Question3;