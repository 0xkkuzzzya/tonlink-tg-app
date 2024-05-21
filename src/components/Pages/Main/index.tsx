import styled from "styled-components";
import React from "react";
import { Balance } from "./Balance";
import { Links } from "./Links";
import { Header } from "../../Header/Header";


const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`


export const MainPage = () => {
    return(
        <Container>
            <Header />
            <Balance/>
            <Links/>
        </Container>
    )
}