import React, { FormEvent, useEffect } from "react";
import styled from "styled-components";
import LogoValidator from '../../../assets/Validators-logo/TonlinkLabsLogo.webp'
import { useAmountIn, useValue, useVBalance } from "../../../web3/useVBalance";
import { useAllValidators } from "../../../web3/useUserAllBalance";
import { useParams } from "react-router";
import { SendTransactionRequest, TonConnectUI, useTonConnectUI } from "@tonconnect/ui-react";
import { GetValidatorInfo } from "../../../web3/validators";

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
    cursor: pointer;
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
    border-radius: 50px;
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
    cursor: pointer;
`

const sendWithdrawalTx = async (amount: string, val_address: string, dm_address: string, tonConnectUI: TonConnectUI) => {
    let val_info = await GetValidatorInfo(val_address)

    let body = await (await fetch(`https://api.tonlink.network/api/api/v1/msg/withdrawal?address=${val_info.validator_manager_address_raw}&amount=${amount}`)).json()
    if (body.ok == "true") {
        let parsed_amount = (0.05 * 10**9)
        let myTransaction: SendTransactionRequest = {
            validUntil: Math.floor(Date.now() / 1000) + 600,
            messages: []
        }

        let payload_from_api = body.result.payload

        myTransaction.messages.push({
            address: dm_address,
            amount: parsed_amount.toString(),
            payload: payload_from_api
        })

        tonConnectUI.sendTransaction(myTransaction);
    }
}

export const GetReward = () => {
    const [vBalance, setVBalance] = useVBalance();
    const [value, setValue] = useValue();
    const [amtIn, setAmtIn] = useAmountIn()
    const [ allValidators, setAllValidators] = useAllValidators()
    let { address } = useParams()
    const [ tonConnectUI, setOptions] = useTonConnectUI()

    let val = allValidators.find((val) => val.address == address)

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
    } else if (Number(value.value) > Number(vBalance.reward_balance) / 10**9) {
        button = <>
            <InactiveConfirmButton>
                <ButtonText>Insufficient funds</ButtonText>
            </InactiveConfirmButton>
        </>
    } else {
        button = <>
            <ConfirmButton onClick={() => { sendWithdrawalTx(value.value, val?.address!, vBalance.delegation_manager_address, tonConnectUI); }}>
                <ButtonText>Confirm</ButtonText>
            </ConfirmButton>
        </>
    }

    return (
        <Container>
            <Logo src={val?.logo}/>
            <HeaderText>Collect reward from {val?.name}</HeaderText>
            <HeaderDescription>Enter the number of TLs you wish to receive from the validator</HeaderDescription>
            <InputContainer>
                <Input inputMode='decimal' type="text" placeholder="0" onChange={HandleInputAmpunt} value={value.value}></Input>
                <MAXButton onClick={() => {
                    setValue({value: (Number(vBalance.reward_balance) / 10**9).toFixed(3)})
                }}>
                    <MAXButtonText>MAX</MAXButtonText>
                </MAXButton>
            </InputContainer>
            {button}
        </Container>
    )
}