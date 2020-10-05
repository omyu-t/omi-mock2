import React from 'react';
import styled from 'styled-components';

import logo from '../../images/iseto-logo.png';

const Result = () => {
  return(
    <Wrapper>
      <Logo src={logo} alt="Logo" />
      <KekkaWrapper>
        <KekkaLine></KekkaLine>
        <Kekka>結果</Kekka>
      </KekkaWrapper>
      <NisaMae>●●様に最適な商品は</NisaMae>
      <Nisa>つみたて<NisaSpan>NISA</NisaSpan></Nisa>
      <NisaAto>です。</NisaAto>
      <SubText>ぜひ、資料請求<br/>してみてください。</SubText>
      <ButtonWrapper>
        <Button>資料請求する</Button>
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

const KekkaWrapper = styled.div`
  text-align: center;
`

const Kekka = styled.p`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin: 0 auto;
  text-align:center;
  line-height: 120px;
  color: #3CB2B2;
  font-size: 35px;
  background-color: white;
  border: solid 10px #3CB2B2;
`

const KekkaLine = styled.p`
  width: 362px;
  border: solid 7px #8FDBD9;
  position: absolute;
  z-index: -2;
  top: 110px;
`

const NisaMae = styled.p`
color: #0070C0;
font-size: 22px;
text-align: center;
margin-bottom: 0;
`

const Nisa = styled.p`
color: #0070C0;
font-size: 40px;
font-weight: 700;
text-align: center;
margin: 0;
`

const NisaSpan = styled.span`
color: #0070C0;
font-size: 40px;
font-weight: 700;
font-family: Meiryo;
text-align: center;
margin: 0;
`

const NisaAto = styled.p`
color: #0070C0;
font-size: 28px;
margin: 0 0 0 72%;
`

const SubText = styled.p`
color: #0070C0;
font-size: 25px;
font-weight: 500;
text-align: center;
margin: 0;
`

const ButtonWrapper = styled.div`
text-align: center;
`

const Button = styled.button`
height: 52px;
width: 80%;
font-size: 23px;
font-weight: 1000;
margin-top: 10px;
border-radius: 26px 26px;
color: #3CB2B2;
background-color: white;
border: 1px solid #3CB2B2;
box-shadow: 0px 3px 4px #A4A4A4;
`

export default Result;