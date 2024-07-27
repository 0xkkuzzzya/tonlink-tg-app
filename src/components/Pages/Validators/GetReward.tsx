import React from "react";
import styled from "styled-components";
import LogoValidator from '../../../assets/Validators-logo/TonlinkLabsLogo.webp'

const Container = styled.div`
    width: 90%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const HeaderText = styled.a`
    color: white;
    font-size: 20px;
    font-weight: 500;
    margin-top: 20px;
`

const HeaderDescription = styled.a`
    color: #707579;
    font-size: 11px;
    font-weight: 500;
    margin-top: 10px;
`

const InputContainer = styled.div`
    width: 100%;
    height: 60px;
    background: #1C1C1E;
    display: flex;
    align-items: center;
    margin-top: 20px;
    border-radius: 15px;
`

const Input = styled.input`
    width: 50%;
    height: 100%;
    background: transparent;
    border-radius: 15px;
    font-size: 22px;
    font-weight: 600;
    margin-left: 15px;
    color: #fff;
    padding: 0px;
`

const MAXButton = styled.div`
    width: 40px;
    height: 20px;
    border: 3px solid #fff;
    margin-right: 15px;
    margin-left: auto;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const MAXButtonText = styled.a`
    color: #fff;
    font-size: 11px;
    font-weight: 500;
`

const ConfirmButton = styled.button`
    width: 100%;
    height: 45px;
    background: #027BFE;
    border-radius: 10px;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 60px;
    transition: all .3s ease-in-out;
    &:active {
         transform: scale(0.95);
    }
`

const ButtonText = styled.a`
    font-weight: 500;
    font-size: 15px;
    color: #fff;
`

const Logo = styled.img`
    width: 80px;
    height: 80px;
    margin-bottom: 20px;
`


export const GetReward = () => {
    return (
        <Container>
            <Logo src={LogoValidator}/>
            <HeaderText>Collect reward from Tonlink Labs</HeaderText>
            <HeaderDescription>Enter the number of TLs you wish to receive from the validator</HeaderDescription>
            <InputContainer>
                <Input inputMode='decimal' type="text" placeholder="0"></Input>
                <MAXButton>
                    <MAXButtonText>MAX</MAXButtonText>
                </MAXButton>
            </InputContainer>
            <ConfirmButton>
                <ButtonText>Confirm</ButtonText>
            </ConfirmButton>
        </Container>
    )
}