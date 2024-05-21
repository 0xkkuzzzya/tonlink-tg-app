import styled from "styled-components";
import React from "react";
import Active_Link from '../../../assets/Oracle-logo/ActiveLink.webp'
import NonActive_Link from '../../../assets/Oracle-logo/NonActiveLink.webp'
import { Link } from "react-router-dom";
import Ton from '../../../assets/Oracle-logo/ton.webp'
import USDT from '../../../assets/Oracle-logo/usdt.webp'
import BTC from '../../../assets/Oracle-logo/BTC.webp'


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

const Logo = styled.img`
    width: 30px;
    height: 30px;
`


export const ListOracles = () => {
    return (
        <MainContainer>
            <HeaderContainer>
                <HeaderName>Explore oracles </HeaderName>
            </HeaderContainer>
            <OraclesContainer>
                <Link to="/validators" style={{ textDecoration: "none" }}>
                    <Oracles style={{ marginTop: "0px" }}>
                        <div style={{ marginLeft: "40px" }}>
                            <Logo src={USDT} />
                            <Logo src={Ton} style={{ marginLeft: "-50px" }} />
                        </div>
                        <ActiveOraclesName style={{ marginLeft: "30px" }}>TON / USDT</ActiveOraclesName>
                        <ActiveLink src={Active_Link} />
                    </Oracles>
                </Link>
                <Oracles>
                    <div style={{ marginLeft: "40px" }}>
                        <Logo src={USDT} />
                        <Logo src={BTC} style={{ marginLeft: "-50px" }} />
                    </div>
                    <ActiveOraclesName style={{ marginLeft: "30px" }}>BTC / USDT</ActiveOraclesName>
                    <ActiveLink src={NonActive_Link} />
                </Oracles>
            </OraclesContainer>
        </MainContainer>
    )
}