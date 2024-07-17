import styled from "styled-components";
import React from "react";
import LinkToDelegate from '../../../assets/Link-logo/Link-to-delegate.webp'
import LinkToSubscription from '../../../assets/Link-logo/Link-to-subscription.webp'
import LinkToOficialSite from '../../../assets/Link-logo/Link-to-officalsite.webp'
import LinkToTelegram from '../../../assets/Link-logo/Link-to-telegram.webp'
import { Link } from "react-router-dom";


const Container = styled.div`
    width: 100%;
    height: 75px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #1C1C1E;
    border-radius: 15px;
    margin-top: 30px;
`

const Container1 = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #1C1C1E;
    border-radius: 15px;
    margin-top: 30px;
`

const MainContainer = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
`

const Column1 = styled.div`
    display: flex;
    flex-direction: column;
`

const LinkName = styled.a`
    font-size: 20px;
    font-weight: 600;
    color: #fff;
    white-space: nowrap;
`

const LinkName1 = styled.a`
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    white-space: nowrap;
    margin-left: 10px;
`

const Description = styled.a`
    font-size: 13px;
    font-weight: 600;
    color: #707579;
    margin-top: 10px;
    white-space: nowrap;
`

const Description1 = styled.a`
    font-size: 11px;
    font-weight: 600;
    color: #707579;
    margin-top: 5px;
    margin-left: 10px;
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
    margin-right: 20px;
`

const LinkImg = styled.img`
    width: 25px;
    height: 25px;
`

const LinkButtonLong = styled.div`
    width: 88%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #26252B;
    border-radius: 13px;
    margin: 0 auto;
    margin-top: 10px;
`

const LinkContainer = styled(Link)`
    width: 100%;
    text-decoration: none;
`



export const Links = () => {
    return (
        <MainContainer>
            <LinkContainer to="/delegation">
                <Container>
                    <Column>
                        <LinkName>Delegation</LinkName>
                        <Description>Delegate stTON and earn rewards</Description>
                    </Column>
                    <LinkButton>
                        <LinkImg src={LinkToDelegate} />
                    </LinkButton>
                </Container>
            </LinkContainer>
            <Container1>
                <LinkName style={{marginLeft: "20px"}}>Explore ecosystem </LinkName>
                <a href="https://tonlink.network" target="_blank" style={{ textDecoration: "none" }}>
                    <LinkButtonLong>
                        <Column1>
                            <LinkName1>Official site</LinkName1>
                            <Description1>Explore official website and documentation</Description1>
                        </Column1>
                        <LinkImg style={{ marginRight: "12px" }} src={LinkToOficialSite} />
                    </LinkButtonLong>
                </a>
                <a href="https://t.me/tonlink_en" target="_blank" style={{ textDecoration: "none", marginTop: "15px" }}>
                    <LinkButtonLong style={{ marginTop: "0px" }}>
                        <Column1>
                            <LinkName1>Telegram Сhannel</LinkName1>
                            <Description1>Explore official telegram channel</Description1>
                        </Column1>
                        <LinkImg style={{ marginRight: "12px" }} src={LinkToTelegram} />
                    </LinkButtonLong>
                </a>
            </Container1>
        </MainContainer>
    )
}