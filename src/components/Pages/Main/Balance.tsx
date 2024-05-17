import styled from "styled-components";
import TonLinkLogo from '../../../assets/TonLink.svg'
import LinkToDeposit from '../../../assets/Link-to-deposit.svg'
import LinkToSend from '../../../assets/Link-to-send-token.svg'

const Container = styled.div`
    width: 85%;
    display: flex;
    background: #1C1C1E;
    padding: 15px;
    border-radius: 15px;
`

const Text = styled.a`
    font-size: 14px;
    font-weight: 600;
    color: #707579;
`

const BalanceText = styled.a`
    font-size: 24px;
    font-weight: 600;
    color: #fff;
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
    return (
        <Container>
            <div style={{ display: "flex", flexDirection: "column", width: "50%", gap: "10px" }}>
                <Text>Your balance</Text>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <BalanceText>1221</BalanceText>
                    <BalanceLogo src={TonLinkLogo} />
                </div>
                <Text>0 $TL in delegations</Text>
                <Text>0 $TL in subscriptions</Text>
            </div>
            <LinkContainer>
                <LinkButton style={{marginLeft: "20px"}}>
                    <LinkImg src={LinkToSend} />
                </LinkButton>
                <LinkButton>
                    <LinkImg src={LinkToDeposit} />
                </LinkButton>
            </LinkContainer>
        </Container>
    )
}