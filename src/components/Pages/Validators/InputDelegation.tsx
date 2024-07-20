import React, { FormEvent, useEffect, useState } from "react";
import styled from "styled-components";
import LogoValidator from '../../../assets/Validators-logo/TonlinkLabsLogo.webp'
import { useUserAllBalance } from "../../../web3/useUserAllBalance";
import { useAmountIn, useValue, useVBalance } from "../../../web3/useVBalance";

const Header = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 20px;
    transition: all .3s ease-in-out;
`

const Contrainer = styled.div`
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
    font-size: 12px;
    font-weight: 500;
    margin-top: 10px;
`

const HeaderName = styled.a`
    color: #fff;
    font-size: 15px;
    font-weight: 600;
    transition: all .3s ease-in-out;
`

const VerticalLine = styled.div`
    width: 2px;
    height: 20px;
    border-radius: 10px;
    background: #1C1C1E;
`

const HorizontalLine = styled.div`
    width: 100%;
    height: 2px;
    border-radius: 10px;
    background: #1C1C1E;
    margin-top: 5px;
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
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

const MAXButtonText = styled.a`
    color: #fff;
    font-size: 11px;
    font-weight: 500;
`

const AmountContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-left: auto;
    margin-right: 10px;
`

const AmountText = styled.a`
    color: #707579;
    font-size: 14px;
    font-weight: 600;
`

const AmountName = styled.a`
    color: #707579;
    font-size: 11px;
    font-weight: 600;
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
`

const InactiveConfirmButton = styled.button`
    width: 100%;
    height: 45px;
    background: #757575;
    border-radius: 10px;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 60px;
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

export const InputDelegation = () => {

    const [block, setBlock] = useState('delegate')

    return(
        <Contrainer>
            <Logo src={LogoValidator}/>
            <HeaderText>Delegation to Tonlink Labs</HeaderText>
            {block == 'delegate' && <HeaderDescription>Enter the number of stTONs you want to delegate</HeaderDescription>}
            {block == 'undelegate' && <HeaderDescription>Enter the number of stTONs you want to undelegate</HeaderDescription>}
            <Header>
                <HeaderName onClick={() => {setBlock('delegate')}}
                style={{color: block == "delegate" ? "#fff" : "#707579"}}
                >Delegate</HeaderName>
                <VerticalLine />
                <HeaderName onClick={() => {setBlock('undelegate')}}
                style={{color: block == "undelegate" ? "#fff" : "#707579"}}
                >Undelegate</HeaderName>
            </Header>
            <HorizontalLine />
            {block == 'delegate' && <DelegateBlock/>}
            {block == 'undelegate' && <UnDelegateBlock/>}
        </Contrainer>
    )
}

const DelegateBlock = () => {
    const [ userAllBalance, setUserAllBalance] = useUserAllBalance();
    const [value, setValue] = useValue();
    const [amtIn, setAmtIn] = useAmountIn()

    const HandleInputAmpunt = (e: FormEvent<HTMLInputElement>) => {
        setValue({value: e.currentTarget.value})
    };

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setAmtIn(
                {
                    amt: value.value,
                }
            );
        }, 350);
        return () => clearTimeout(timeoutId);
    }, [value]);

    let button;

    if (Number(value.value) == 0 || isNaN(Number(value.value))) {
        button = <>
            <InactiveConfirmButton>
                <ButtonText>Enter amount</ButtonText>
            </InactiveConfirmButton>
        </> 
    } else if (Number(value.value) > Number(userAllBalance.balance) / 10**9) {
        button = <>
            <InactiveConfirmButton>
                <ButtonText>Insufficient funds</ButtonText>
            </InactiveConfirmButton>
        </>
    } else {
        button = <>
            <ConfirmButton>
                <ButtonText>Confirm</ButtonText>
            </ConfirmButton>
        </>
    }

    return(
        <>
            <InputContainer>
                <Input inputMode='decimal' type="text" placeholder="0" onChange={HandleInputAmpunt} value={value.value}></Input>
                <AmountContainer>
                    <AmountText>{(Number(userAllBalance.balance) / 10**9).toFixed(3)}</AmountText>
                    <AmountName>stTON</AmountName>
                </AmountContainer>
                <MAXButton onClick={() => {
                    setValue({value: (Number(userAllBalance.balance) / 10**9).toFixed(3)})
                }}>
                    <MAXButtonText>MAX</MAXButtonText>
                </MAXButton>
            </InputContainer>
            <>{button}</> 
        </>
    )
}

const UnDelegateBlock = () => {
    const [vBalance, setVBalance] = useVBalance()
    const [value, setValue] = useValue();
    const [amtIn, setAmtIn] = useAmountIn()

    const HandleInputAmpunt = (e: FormEvent<HTMLInputElement>) => {
        setValue({value: e.currentTarget.value})
    };

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setAmtIn(
                {
                    amt: value.value,
                }
            );
        }, 350);
        return () => clearTimeout(timeoutId);
    }, [value]);

    let button;

    if (Number(value.value) == 0 || isNaN(Number(value.value))) {
        button = <>
            <InactiveConfirmButton>
                <ButtonText>Enter amount</ButtonText>
            </InactiveConfirmButton>
        </> 
    } else if (Number(value.value) > vBalance.delegation_balance / 10**9) {
        button = <>
            <InactiveConfirmButton>
                <ButtonText>Insufficient funds</ButtonText>
            </InactiveConfirmButton>
        </>
    } else {
        button = <>
            <ConfirmButton>
                <ButtonText>Confirm</ButtonText>
            </ConfirmButton>
        </>
    }

    return(
        <>
            <InputContainer>
                <Input inputMode='decimal' type="text" placeholder="0" onChange={HandleInputAmpunt} value={value.value}></Input>
                <AmountContainer>
                    <AmountText>{(vBalance.delegation_balance / 10**9).toFixed(3)}</AmountText>
                    <AmountName>stTON</AmountName>
                </AmountContainer>
                <MAXButton onClick={() => {
                    setValue({value: (vBalance.delegation_balance / 10**9).toFixed(3)})
                }}>
                    <MAXButtonText>MAX</MAXButtonText>
                </MAXButton>
            </InputContainer>
            <>{button}</>
        </>
    )
}