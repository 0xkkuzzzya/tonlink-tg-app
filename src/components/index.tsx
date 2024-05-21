import styled from "styled-components";
import React from "react";
import { Routes, Route } from 'react-router-dom';
import { MainPage } from "./Pages/Main";
import { DelegationPage } from "./Pages/Delegation";
import { ValidatorsPage } from "./Pages/Validators";
import { ConfirmDelegation } from "./Pages/ConfirmDelegation";


const Container = styled.div`
    width: 390px;
    margin: 0 auto;
    @media (max-width: 390px) {
        width: 100%;
    }
`

const PageContainer = styled.div`
    width: 100%;
    display: flex;
`


export const MainIndex = () => {
    return (
        <Container>
            <PageContainer>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/delegation" element={<DelegationPage />} />
                    <Route path="/validators" element={<ValidatorsPage />} />
                    <Route path="/confirmDelegation" element={<ConfirmDelegation />} />
                </Routes>
            </PageContainer>
        </Container>
    )
}