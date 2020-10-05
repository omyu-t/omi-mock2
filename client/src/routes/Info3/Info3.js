import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../../images/iseto-logo.png';
import gazou from '../../images/Hoken-Tosin-Gaika.png';

const Info3 = () => {
  return(
    <Wrapper>
      <Logo src={logo} alt="Logo" />
      <TextWrapper>
        <Text>住宅ローン返済予定額に<br/>関するお知らせ</Text>
      </TextWrapper>
      <MainWrapper>
        <MainText>ご返済額の見直しに備え、資産<br/>の見直しをされてみてはいかが<br/>でしょうか？<br/>当行では、お客様に合わせた<br/>商品のご提案が可能です。</MainText>
        <QuestionBox>
          <QuestionText>●●様の状況について<br/>いくつか教えてください。</QuestionText>
        </QuestionBox>
        <ImageWrapper>
          <Gazou src={gazou} alt="保険投信外貨"></Gazou>
        </ImageWrapper>
      </MainWrapper>
      <ButtonWrapper>
        <Link to="/question1"><Next>次へ<Ya> ＞</Ya></Next></Link>
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

const TextWrapper = styled.div`
width: 100%;
text-align: center;
border-top: 5px solid #003399;
border-bottom: 5px solid #003399;
`

const Text = styled.p`
width: 90%;
margin: 0 auto;
font-size: 30px;
color: #003399;
`

const MainWrapper = styled.div`

`

const MainText = styled.p`
width: 85%;
margin: 0 auto;
margin-top: 5px;
margin-bottom: 5px;
font-size: 22px;
color: #003399;
line-height: 1.2;
display: flex;
justify-content: center;
`

const QuestionBox = styled.div`
display:flex;
justify-content: center;
border: 1px solid #5CA4C0;
width: 75%;
margin: 0 auto;
margin-top: 15px;
`

const QuestionText = styled.p`
font-size: 22px;
margin: 5px 0 5px 0;
`

const ImageWrapper = styled.div`
text-align: center;
`

const Gazou = styled.img`

`

const ButtonWrapper = styled.div`
text-align: center;
`

const Next = styled.button`
height: 50px;
width: 40%;
font-size: 30px;
margin-top: 0;
margin-left: 10px;
border-radius: 25px 25px;
color: white;
background-color: #DB8513;
border: transparent 1px solid;
box-shadow: 0px 2px 4px #A4A4A4;
`

const Ya = styled.span`
color: #F7D3A3;
font-weight: 800;
`

export default Info3;