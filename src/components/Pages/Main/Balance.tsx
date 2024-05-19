import styled from "styled-components";
import TonLinkLogo from '../../../assets/TonLink.webp'
import LinkToDeposit from '../../../assets/Link-to-deposit.webp'
import LinkToSend from '../../../assets/Link-to-send-token.webp'
import { useTonAddress } from "@tonconnect/ui-react";
import { useEffect, useState } from "react";
import { GetBalance } from "../../../web3/balance";


const Container = styled.div`
    width: 85%;
    display: flex;
    background: #1C1C1E;
    padding: 12px 15px;
    border-radius: 15px;
`

const Text = styled.a`
    font-size: 14px;
    font-weight: 600;
    color: #707579;
    margin-left: 10px;
    white-space: nowrap;
`

const BalanceText = styled.a`
    font-size: 24px;
    font-weight: 600;
    color: #fff;
    margin-left: 10px;
    white-space: nowrap;
`

const BalanceLogo = styled.img`
    width: 20px;
    height: 20px;
    margin-left: 10px;
`

const LinkButton = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #26252B;
    margin-bottom: 30px;
    border-radius: 10px;
`

const LinkImg = styled.img`
    width: 25px;
    height: 25px;
`

const LinkContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
`


export const Balance = () => {
    const userFriendlyAddress = useTonAddress();
    const [ balance, setBalance ] = useState("")

    useEffect(() => {
        async function main() {
            let tb = await GetBalance(userFriendlyAddress === undefined ? "" : userFriendlyAddress)
            setBalance(tb)
        }
        main()
    }, [userFriendlyAddress])

    return (
        <Container>
            <div style={{ display: "flex", flexDirection: "column", width: "50%", gap: "10px" }}>
                <Text>Your balance</Text>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <BalanceText>{(Number(balance) / 10**9).toFixed(0)}</BalanceText>
                    <BalanceLogo src={TonLinkLogo} />
                </div>
                <Text>0 $TL in delegations</Text>
                <Text>0 $TL in subscriptions</Text>
            </div>
            <LinkContainer>
                <LinkButton style={{marginLeft: "25px"}}>
                    <LinkImg src={LinkToSend} />
                </LinkButton>
                <LinkButton>
                    <LinkImg src={LinkToDeposit} />
                </LinkButton>
            </LinkContainer>
        </Container>
    )
}