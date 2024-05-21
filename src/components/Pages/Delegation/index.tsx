import styled from "styled-components";
import React from "react";
import Non_Active_Link from '../../../assets/Oracle-logo/Non-active-link.svg'
import { ListOracles } from "./ListOracles";


const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
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

const MyDeligationContainer = styled.div`
    width: 90%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #1C1C1E;
    border-radius: 10px;
    margin-top: 20px;
`

const LinkName = styled.a`
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    white-space: nowrap;
`

const LinkDescription = styled.a`
    font-size: 11px;
    font-weight: 600;
    color: #707579;
    margin-top: 10px;
    white-space: nowrap;
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
`

const Row = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const ActiveLink = styled.img`
    width: 25px;
    height: 25px;
    margin-right: 20px;
`


export const DelegationPage = () => {
    return (
        <Container>
            <HeaderText>Manage delegation</HeaderText>
            <HeaderDescription>Delegate the $TL token or manage your delegations. </HeaderDescription>
            <MyDeligationContainer>
                <Row>
                    <Column>
                        <LinkName>My delegation</LinkName>
                        <LinkDescription>Explore your delegations</LinkDescription>
                    </Column>
                    <ActiveLink src={Non_Active_Link} />
                </Row>
            </MyDeligationContainer>
            <ListOracles />
        </Container>
    )
}