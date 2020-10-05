import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../../images/iseto-logo.png';

const Table = () => {
  return(
    <Wrapper>
      <Logo src={logo} alt="Logo" />
      <TextWrapper>
        <Text>住宅ローン返済予定額に<br/>関するお知らせ</Text>
      </TextWrapper>
      <TableText>月ごとの元金と<br/>利息の明細一覧</TableText>
      <TableWrapper>
        <HeaderRow>
          <TH></TH>
          <TH>元金</TH>
          <TH>利息</TH>
        </HeaderRow>
        <TR>
          <TD>18年10月</TD>
          <TD>79,500円</TD>
          <TD>20,500円</TD>
        </TR>
        <TR>
          <TD>18年11月</TD>
          <TD>79,000円</TD>
          <TD>21,000円</TD>
        </TR>
        <TR>
          <TD>18年12月</TD>
          <TD>78,500円</TD>
          <TD>21,500円</TD>
        </TR>
        <TR>
          <TD>19年1月</TD>
          <TD>78,000円</TD>
          <TD>22,000円</TD>
        </TR>
        <TR>
          <TD>19年2月</TD>
          <TD>77,500円</TD>
          <TD>22,500円</TD>
        </TR>
        <TR>
          <TD>19年3月</TD>
          <TD>77,000円</TD>
          <TD>23,000円</TD>
        </TR>
      </TableWrapper>
      <ButtonWrapper>
        <Link to="/info1" ><Back><Ya>＜ </Ya>戻る</Back></Link>
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

const TableText = styled.h2`
color: #002E8A;
font-size: 30px;
font-weight: 500;
margin: 10px;
text-align: center;
`

const TableWrapper = styled.table`
width: 95%;
margin: 0 auto;
border-collapse: collapse;
border-spacing: 0;
text-align: center;
`

const HeaderRow = styled.tr`
border-top: 1px solid #03308B;
border-bottom: 1px solid #03308B;
`

const TR = styled.tr`
&:nth-child(even) {
  background-color: #DEE9F0;
}
&:last-child {
  border-bottom: 1px solid #03308B;
}
`

const TH = styled.th`

`

const TD = styled.td`

`

const ButtonWrapper = styled.div`
text-align: center;
`

const Back = styled.button`
height: 50px;
width: 40%;
font-size: 30px;
margin-top: 10px;
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



export default Table;