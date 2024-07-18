import styled from "styled-components";
import React from "react";
import { useTonAddress } from "@tonconnect/ui-react";
import { useEffect, useState } from "react";
import { GetBalance } from "../../../web3/balance";


const Container = styled.div`
    width: 90%;
    height: 135px;
    display: flex;
    align-items: center;
    background: #1C1C1E;
    border-radius: 15px;
    margin-top: 20px;
`

const Text = styled.a`
    font-size: 14px;
    font-weight: 600;
    color: #707579;
    white-space: nowrap;
`

const BlanaceContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-left: 20px;
`

const BalanceText = styled.a`
    font-size: 24px;
    font-weight: 600;
    color: #fff;
    white-space: nowrap;
`

const LinkContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 20px;
    margin-right: 20px;
`


export const Balance = () => {
    const userFriendlyAddress = useTonAddress();
    const [balance, setBalance] = useState("")

    useEffect(() => {
        async function main() {
            let tb = await GetBalance(userFriendlyAddress === undefined ? "" : userFriendlyAddress)
            setBalance(tb)
        }
        main()
    }, [userFriendlyAddress])

    return (
        <Container>
            <BlanaceContainer>
                <Text>Your balance</Text>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <BalanceText>{(Number(balance) / 10 ** 9).toFixed(0)} stTON</BalanceText>
                    
                </div>
                <Text>0 stTON in delegations</Text>
                <Text>0 $TL in reward</Text>
            </BlanaceContainer>
        </Container>
    )
}