import styled from "styled-components";
import React from "react";
import TON_USDT_Logo from '../../../assets/Oracle-logo/TON_USDT_oracle.svg'
import BTC_UST_Logo from '../../../assets/Oracle-logo/BTC_USDT_oracle.svg'
import Active_Link from '../../../assets/Oracle-logo/ActiveLink.svg'
import NonActive_Link from '../../../assets/Oracle-logo/NonActiveLink.svg'
import { Link } from "react-router-dom";


const MainContainer = styled.div`
    width: 90%;
    height: 68%;
    display: flex;
    align-items: center;
    flex-direction: column;
    background: #1C1C1E;
    border-radius: 10px;
    margin-top: 20px;
`

const HeaderContainer = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
`

const HeaderName = styled.a`
    font-size: 18px;
    font-weight: 500;
    color: #fff;
    margin-left: 30px;
`

const OraclesContainer = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
`

const Oracles = styled.div`
    width: 100%;
    height: 60px;
    background: #26252B;
    border-radius: 10px;
    display: flex;
    align-items: center;
    margin-top: 15px;
`

const OraclesLogo = styled.img`
    width: 55px;
    height: 55px;
    margin-left: 20px;
`

const ActiveOraclesName = styled.a`
    font-size: 18px;
    color: #fff;
    margin-left: 10px;
`

const ActiveLink = styled.img`
    width: 25px;
    height: 25px;
    margin-left: auto;
    margin-right: 20px;
`

const NonActiveOraclesName = styled.a`
    font-size: 18px;
    font-weight: 500;
    color: #606061;
    margin-left: 10px;
`


export const ListOracles = () => {
    return (
        <MainContainer>
            <HeaderContainer>
                <HeaderName>Explore oracles </HeaderName>
            </HeaderContainer>
            <OraclesContainer>
                <Oracles style={{ marginTop: "0px" }}>
                    <OraclesLogo src={TON_USDT_Logo} />
                    <ActiveOraclesName>TON / USDT</ActiveOraclesName>
                    <Link to="/validators" style={{marginLeft: "auto"}}>
                        <ActiveLink src={Active_Link} />
                    </Link>
                </Oracles>
                <Oracles>
                    <OraclesLogo src={BTC_UST_Logo} />
                    <NonActiveOraclesName>BTC / USDT</NonActiveOraclesName>
                    <ActiveLink src={NonActive_Link} />
                </Oracles>
            </OraclesContainer>
        </MainContainer>
    )
}