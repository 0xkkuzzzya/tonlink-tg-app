import styled from "styled-components";
import LinkToDelegate from '../../../assets/Link-to-delegate.svg'
import LinkToSubscription from '../../../assets/Link-to-subscription.svg'
import LinkToOficialSite from '../../../assets/Link-to-officalsite.svg'
import LinkToTelegram from '../../../assets/Link-to-telegram.svg'

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    background: #1C1C1E;
    padding: 15px;
    border-radius: 15px;
    margin-top: 20px;
`

const Container1 = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background: #1C1C1E;
    padding: 15px;
    border-radius: 15px;
    margin-top: 20px;
`

const LinkName = styled.a`
    font-size: 20px;
    font-weight: 600;
    color: #fff;
    white-space: nowrap;
`

const Description = styled.a`
    font-size: 13px;
    font-weight: 600;
    color: #707579;
    margin-top: 10px;
    white-space: nowrap;
`

const LinkButton = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #26252B;
    border-radius: 10px;
    margin-right: 10px;
`

const LinkImg = styled.img`
    width: 25px;
    height: 25px;
`

const LinkButtonLong = styled.div`
    width: 87.5%;
    height: 50px;
    padding: 5px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #26252B;
    border-radius: 13px;
    margin: 0 auto;
    margin-top: 10px;
`


export const Links = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", width: "85%", alignItems: "center" }}>
            <Container>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <LinkName>Delegation</LinkName>
                    <Description>Delegate $TL and earn rewards</Description>
                </div>
                <LinkButton>
                    <LinkImg src={LinkToDelegate} />
                </LinkButton>
            </Container>
            <Container>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <LinkName>Subscription</LinkName>
                    <Description>Manage your subscriptions</Description>
                </div>
                <LinkButton>
                    <LinkImg src={LinkToSubscription} />
                </LinkButton>
            </Container>
            <Container1>
                <LinkName>Explore ecosystem </LinkName>
                <LinkButtonLong>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <LinkName style={{ fontSize: "16px" }}>Official site</LinkName>
                        <Description style={{ fontSize: "11px", marginTop: "5px" }}>Explore official website and documentation</Description>
                    </div>
                    <LinkImg style={{marginRight: "4px"}} src={LinkToOficialSite} />
                </LinkButtonLong>
                <LinkButtonLong style={{marginTop: "25px"}}>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <LinkName style={{ fontSize: "16px" }}>Telegram Сhannel</LinkName>
                        <Description style={{ fontSize: "11px", marginTop: "5px" }}>Explore official telegram channel</Description>
                    </div>
                    <LinkImg style={{marginRight: "4px"}} src={LinkToTelegram} />
                </LinkButtonLong>
            </Container1>
        </div>
    )
}