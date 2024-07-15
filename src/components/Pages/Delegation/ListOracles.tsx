import styled from "styled-components";
import React from "react";
import Active_Link from '../../../assets/Oracle-logo/ActiveLink.webp'
import NonActive_Link from '../../../assets/Oracle-logo/NonActiveLink.webp'
import { Link } from "react-router-dom";
import Tonlink from '../../../assets/TonLink.webp'
import Tonkeeper from '../../../assets/Validators-logo/TonstakersLogo.webp'


const MainContainer = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    background: #1C1C1E;
    border-radius: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
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
    margin-left: 20px;
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
    font-weight: 500;
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
    width: 40px;
    height: 40px;
`

const ValidatorDescription = styled.a`
    color: #707579;
    font-size: 12px;
    font-weight: 500;
    margin-left: 10px;
`


export const ListOracles = () => {
    return (
        <MainContainer>
            <HeaderContainer>
                <HeaderName>Explore validators</HeaderName>
            </HeaderContainer>
            <OraclesContainer>
                <Link to="/validators" style={{ textDecoration: "none" }}>
                    <Oracles style={{ marginTop: "0px" }}>
                        <div style={{ marginLeft: "15px" }}>
                            <Logo src={Tonlink} />
                        </div>
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <ActiveOraclesName>Tonlink Labs</ActiveOraclesName>
                            <ValidatorDescription>18% reward fees</ValidatorDescription>
                        </div>
                        <ActiveLink src={Active_Link} />
                    </Oracles>
                </Link>
                <Oracles>
                    <div style={{ marginLeft: "15px" }}>
                        <Logo src={Tonkeeper} />
                    </div>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <ActiveOraclesName>Tonkeeper</ActiveOraclesName>
                        <ValidatorDescription>12% reward fees</ValidatorDescription>
                    </div>
                    <ActiveLink src={NonActive_Link} />
                </Oracles>
            </OraclesContainer>
        </MainContainer>
    )
}