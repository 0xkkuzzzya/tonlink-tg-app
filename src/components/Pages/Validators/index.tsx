import React, { useEffect } from 'react';
import styled from "styled-components";
import { ListValidators } from "./ListValidators";
import { useNavigate } from "react-router";

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


export const ValidatorsPage = () => {

    const navigate = useNavigate();

    useEffect(() => {
		window.Telegram.WebApp.BackButton.show()
        window.Telegram.WebApp.BackButton.onClick(() => navigate(-2))
	}, [])

    return(
        <Container>
            <HeaderText>Validators for oracle</HeaderText>
            <HeaderDescription>Explore validators and choose to whom you delegate $TL</HeaderDescription>
            <ListValidators/>
        </Container>
    )
}