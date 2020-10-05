import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../../images/iseto-logo.png';
import house from '../../images/house.png';

const Top = () => {
  return(
    <Wrapper>
      <Logo src={logo} alt="Logo" />
      <TextWrapper>
        <Text>●●様、いつもイセトー銀行を<br/>ご利用いただき、誠にありが<br/>とうございます。<br/>現在お借入れいただいている<br/>住宅ローンの返済に関する<br/>情報をお届けいたします。</Text>
      </TextWrapper>
      <House src={house} alt="House" />
      <ButtonWrapper>
        <Link to="/info1" ><Next>次へ<Ya> ＞</Ya></Next></Link>
      </ButtonWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 375px;
  padding-bottom: 50px;
`

const Logo = styled.img`
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  box-shadow: 0 8px 5px 0 #CBCBDC;
`

const TextWrapper = styled.div`
width: 90%;
margin: 0 auto;
text-align: center;
`

const Text = styled.p`
font-size: 24px;
display: inline-block;
text-align: left;
`

const House = styled.img`
width: 100%;
`

const ButtonWrapper = styled.div`
text-align: center;
`


const Next = styled.button`
height: 50px;
width: 40%;
font-size: 30px;
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


export default Top;