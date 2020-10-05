import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../../images/iseto-logo.png';

const Info1 = () => {
  return(
    <Wrapper>
      <Logo src={logo} alt="Logo" />
      <TextWrapper>
        <Text>住宅ローン返済予定額に<br/>関するお知らせ</Text>
      </TextWrapper>
      <MainWrapper>
        <Kinri>適用金利：１.２０％</Kinri>
        <Kikan>＜適用期間18年10月-19年3月＞</Kikan>
        <Yotei>返済予定額：100,000円</Yotei>
        <Link to="/table"><UtiwakeButton>元金と利息の内訳</UtiwakeButton></Link>
      </MainWrapper>
      <ButtonWrapper>
        <Link to="/info2"><Next>次へ<Ya> ＞</Ya></Next></Link>
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
text-align: center;
`

const Kinri = styled.h1`
color: #003399;
font-weight: 300;
margin-bottom: 0;
`

const Kikan = styled.p`
font-size: 20px;
margin-top: 0;
`

const Yotei = styled.p`
font-size: 25px;
`

const UtiwakeButton = styled.button`
height: 50px;
width: 65%;
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
margin-top: 70px;
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

export default Info1;