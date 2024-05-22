import React from "react";
import styled from "styled-components";
import Tonlink_labs_Logo from '../../../assets/Validators-logo/TonlinkLabsLogo.webp'
import Tonstakers_Logo from '../../../assets/Validators-logo/TonstakersLogo.webp'
import Active_Link from '../../../assets/Oracle-logo/ActiveLink.webp'
import { Link } from "react-router-dom";

const Container = styled.div`
    width: 90%;
    height: 82.5%;
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
    margin-left: 20px;
`

const ValidatorsContainer = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
`

const Validators = styled.div`
    width: 100%;
    height: 60px;
    background: #26252B;
    border-radius: 10px;
    display: flex;
    align-items: center;
    margin-top: 15px;
`

const ValidatorsLogo = styled.img`
    width: 40px;
    height: 40px;
    margin-left: 20px;
`

const ValidatorNameBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const ValidatorName = styled.a`
    font-size: 17px;
    color: #fff;
    margin-left: 10px;
`

const FeesDescription = styled.a`
    font-size: 11px;
    color: #707579;
    margin-left: 10px;
`

const ActiveLink = styled.img`
    width: 25px;
    height: 25px;
    margin-left: auto;
    margin-right: 20px;
`


export const ListValidators = () => {
    return (
        <Container>
            <HeaderContainer>
                <HeaderName>Explore validators</HeaderName>
            </HeaderContainer>
            <ValidatorsContainer>
                <Link to="/confirmDelegation" style={{ textDecoration: "none" }}>
                    <Validators style={{marginTop: "0px"}}>
                        <ValidatorsLogo src={Tonlink_labs_Logo} />
                        <ValidatorNameBlock>
                            <ValidatorName>Tonlink Labs</ValidatorName>
                            <FeesDescription>18% reward fees</FeesDescription>
                        </ValidatorNameBlock>
                        <Link to="/validators" style={{ marginLeft: "auto" }}>
                            <ActiveLink src={Active_Link} />
                        </Link>
                    </Validators>
                </Link>
                <Validators>
                    <ValidatorsLogo src={Tonstakers_Logo} />
                    <ValidatorNameBlock>
                        <ValidatorName>Tonstakers</ValidatorName>
                        <FeesDescription>12% reward fees</FeesDescription>
                    </ValidatorNameBlock>
                    <ActiveLink src={Active_Link} />
                </Validators>
            </ValidatorsContainer>
        </Container>
    )
}