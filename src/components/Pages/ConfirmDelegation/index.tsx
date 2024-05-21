import styled from "styled-components";
import React from "react";
import TonlinkLabsLogo from '../../../assets/Validators-logo/TonlinkLabsLlogo.svg'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ValidatorsLogo = styled.img`
    width: 60px;
    height: 60px;
`

const HeaderName = styled.a`
    font-size: 18px;
    color: #fff;
    margin: 20px 0px 10px 0px;
`

const HeaderDescription = styled.a`
    font-size: 12px;
    color: #707579;
`

const AmountField = styled.input`
    width: 90%;
    height: 30px;
    background: #1C1C1E;
    border-radius: 10px;
    font-weight: 500;
    margin: 10px 0px;
`


export const ConfirmDelegation = () => {
    return(
        <Container>
            <ValidatorsLogo src={TonlinkLabsLogo}/>
            <HeaderName>Delegation to Tonlink Labs</HeaderName>
            <HeaderDescription>Enter the amount to delegate $TL to the validator below</HeaderDescription>
        </Container>
    )
}