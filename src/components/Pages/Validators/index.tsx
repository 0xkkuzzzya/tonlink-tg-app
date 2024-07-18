import React, { useEffect } from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router";
import Tonlink from '../../../assets/TonLink.webp'
import Active_Link from '../../../assets/Oracle-logo/ActiveLink.webp'
import { Link } from 'react-router-dom';

const MainContainer = styled.div`
    width: 85%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    overflow: hidden;
    @media (max-height: 600px) {
        overflow: auto;
    }
`

const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 40px;
`

const Logo = styled.img`
    width: 40px;
    height: 40px;
`

const HeaderText = styled.a`
    color: #fff;
    font-size: 25px;
    font-weight: 500;
`

const DescriptionContainer = styled.div`
    width: 100%;
    margin-top: 10px;
    line-height: 0.9rem;
`

const Description = styled.a`
    color: #fff;
    font-size: 12px;
    font-weight: 500;
`

const ContainerInfo = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
`

const InfoBlock = styled.div`
    width: 143px;
    height: 70px;
    background: #1C1C1E;
    border-radius: 15px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 5px;
`

const InfoBlockTextName = styled.a`
    font-size: 12px;
    color: #fff;
    font-weight: 500;
    margin-top: 15px;
    white-space: nowrap;
`

const InfoBlockText = styled.a`
    font-size: 16px;
    color: #fff;
    font-weight: 500;
`

const GetRewardButton = styled.button`
    width: 100%;
    height: 40px;
    background: #027BFE;
    border-radius: 10px;
    margin-top: 20px;
    text-align: left;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
`

const Text = styled.a`
    font-weight: 500;
    font-size: 15px;
    color: #fff;
    margin-left: 20px;
`

const Amount = styled.a`
    font-weight: 500;
    font-size: 15px;
    color: #fff;
    margin-right: 20px;
`

const ActiveLink = styled.img`
    width: 25px;
    height: 25px;
    margin-left: auto;
    margin-right: 20px;
`

const GreyBlock = styled.div`
    width: 100%;
    height: 40px;
    border-radius: 10px;
    background: #26252B;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
`


export const ValidatorsPage = () => {

    const navigate = useNavigate();

    useEffect(() => {
        window.Telegram.WebApp.BackButton.show()
        window.Telegram.WebApp.BackButton.onClick(() => navigate(-1))
    }, [])

    return (
        <MainContainer>
            <HeaderContainer>
                <Logo src={Tonlink} />
                <HeaderText>Tonlink Labs</HeaderText>
            </HeaderContainer>
            <DescriptionContainer>
                <Description>
                    There are many blockchains in existence today,
                    each with different advantages and disadvantages.
                    What differentiates Solana is its design which enables
                    the dissemination of frequent, inexpensive information.
                </Description>
            </DescriptionContainer>
            <ContainerInfo>
                <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <InfoBlock>
                        <InfoBlockTextName>TOTAL STAKERS</InfoBlockTextName>
                        <InfoBlockText>25 634</InfoBlockText>
                    </InfoBlock>
                    <InfoBlock>
                        <InfoBlockTextName>TOTAL RESTAKED</InfoBlockTextName>
                        <InfoBlockText>100K stTON</InfoBlockText>
                    </InfoBlock>
                </div>
                <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "20px" }}>
                    <InfoBlock>
                        <InfoBlockTextName>VALIDATOR FEE</InfoBlockTextName>
                        <InfoBlockText>60%</InfoBlockText>
                    </InfoBlock>
                    <InfoBlock>
                        <InfoBlockTextName>TOTAL DELEGATED</InfoBlockTextName>
                        <InfoBlockText>4.3M $TL</InfoBlockText>
                    </InfoBlock>
                </div>
            </ContainerInfo>
            <GreyBlock>
                <Text>My delegation</Text>
                <Amount>10 stTON</Amount>
            </GreyBlock>
            <GreyBlock>
                <Text>My rewards</Text>
                <Amount>10 TL</Amount>
            </GreyBlock>
            <Link to="/inputdelegation" style={{ textDecoration: "none", width: "100%" }}>
                <GetRewardButton>
                    <Text>Delegation</Text>
                    <ActiveLink src={Active_Link} />
                </GetRewardButton>
            </Link>
            <Link to="/getreward" style={{ textDecoration: "none", width: "100%" }}>
                <GetRewardButton>
                    <Text>Get Rewards</Text>
                    <ActiveLink src={Active_Link} />
                </GetRewardButton>
            </Link>
        </MainContainer>
    )
}