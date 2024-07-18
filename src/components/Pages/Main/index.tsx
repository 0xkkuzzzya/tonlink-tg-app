import styled from "styled-components";
import React, { useEffect } from 'react';
import { Balance } from "./Balance";
import { Links } from "./Links";
import { Header } from "../../Header/Header";


const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
    @media (max-height: 590px) {
		height: 100%;
		margin-bottom: 20px;
	}
`


export const MainPage = () => {

    useEffect(() => {
		window.Telegram.WebApp.BackButton.hide()
	}, [])

    return(
        <Container>
            <Header />
            <Balance/>
            <Links/>
        </Container>
    )
}