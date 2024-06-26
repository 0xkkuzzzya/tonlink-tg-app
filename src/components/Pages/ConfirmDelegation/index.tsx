import styled from "styled-components";
import React, { useEffect } from 'react';
import TonlinkLabsLogo from '../../../assets/Validators-logo/TonlinkLabsLogo.webp'
import { useNavigate } from "react-router";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ValidatorsLogo = styled.img`
    width: 70px;
    height: 70px;
`

const HeaderName = styled.a`
    font-size: 22px;
    font-weight: 500;
    color: #fff;
    margin: 20px 0px 10px 0px;
`

const HeaderDescription = styled.a`
    font-size: 13px;
    font-weight: 500;
    color: #707579;
`

const AmountField = styled.input`
    width: 90%;
    height: 38px;
    background: #1C1C1E;
    border-radius: 7px;
    font-weight: 600;
    margin: 10px 0px;
    color: #fff;
    padding-left: 10px;
`

const ConfirmButton = styled.button`
    width: 200px;
    height: 40px;
    color: #fff;
    font-weight: 500;
    font-size: 15px;
    margin-top: 10px;
    border-radius: 10px;
    background: #027BFE;
`


export const ConfirmDelegation = () => {

    const navigate = useNavigate();

    useEffect(() => {
		window.Telegram.WebApp.BackButton.show()
        window.Telegram.WebApp.BackButton.onClick(() => navigate(-1))
	}, [])

    return(
        <Container>
            <ValidatorsLogo src={TonlinkLabsLogo}/>
            <HeaderName>Delegation to Tonlink Labs</HeaderName>
            <HeaderDescription>Enter the amount to delegate $TL to the validator</HeaderDescription>
            <AmountField placeholder="Amount"></AmountField>
            <ConfirmButton>Confirm</ConfirmButton>
        </Container>
    )
}