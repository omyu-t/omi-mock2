import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../../images/iseto-logo.png';

const Info2 = () => {
  return(
    <Wrapper>
      <Logo src={logo} alt="Logo" />
      <TextWrapper>
        <Text>住宅ローン返済予定額に<br/>関するお知らせ</Text>
      </TextWrapper>
      <MainWrapper>
        <MinaosiText>変動金利の返済額は5年<br/>ごとに見直しを行います。</MinaosiText>
        <MinaosizikiInfo>●●様の<br/>ご返済額次回見直し時期は<br/>こちらです。</MinaosizikiInfo>
        <Minaosiziki>2022年5月</Minaosiziki>
        <ButtonWrapper>
          <SikumiButton>変動金利の仕組みを知る</SikumiButton>
        </ButtonWrapper>
      </MainWrapper>
      <ButtonWrapper>
        <Link to="/info1"><Back><Ya>＜ </Ya>戻る</Back></Link>
        <Link to="/info3"><Next>次へ<Ya> ＞</Ya></Next></Link>
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

const MinaosiText = styled.p`
margin: 10px 0 10px 7%;
font-size: 28px;
color: #003399;
`

const MinaosizikiInfo = styled.p`
margin-top: 10px;
margin-left: 7%;
margin-bottom: 0;
font-size: 26px;
font-weight: 400;
color: black;
`

const Minaosiziki = styled.p`
font-size: 25px;
display: flex;
align-items: center;
justify-content: center;
margin: 0 0 10px 0;
&::before {
  content: "";
  display: inline-block;
  width: 25%;
  height: 1px;
  background-color: black;
  margin-right: 15px;
}
&::after {
  content: "";
  display: inline-block;
  width: 25%;
  height: 1px;
  background-color: black;
  margin-left: 15px;
}
`

const SikumiButton = styled.button`
height: 50px;
width: 75%;
font-size: 20px;
font-weight: 800;
border-radius: 25px 25px;
color: #DB8513;
background-color: white;
border: 2px solid #DB8513;
box-shadow: 0px 2px 4px #A4A4A4;
`

const ButtonWrapper = styled.div`
text-align: center;
`

const Next = styled.button`
height: 50px;
width: 40%;
font-size: 30px;
margin-top: 30px;
margin-left: 10px;
border-radius: 25px 25px;
color: white;
background-color: #DB8513;
border: transparent 1px solid;
box-shadow: 0px 2px 4px #A4A4A4;
`

const Back = styled.button`
height: 50px;
width: 40%;
font-size: 30px;
margin-top: 30px;
margin-right: 10px;
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

export default Info2;