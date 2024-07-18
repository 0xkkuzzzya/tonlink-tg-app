import styled from "styled-components";
import React from "react";
import { Routes, Route } from 'react-router-dom';
import { MainPage } from "./Pages/Main";
import { DelegationPage } from "./Pages/Delegation";
import { ValidatorsPage } from "./Pages/Validators";
import { ConfirmDelegation } from "./Pages/ConfirmDelegation";
import { MyDelegation } from "./Pages/MyDelegation";
import { InputDelegation } from "./Pages/Validators/InputDelegation";
import { GetReward } from "./Pages/Validators/GetReward";


const Container = styled.div`
    width: 390px;
    height: 100vh;
    margin: 0 auto;
    @media (max-width: 390px) {
        width: 100%;
    }
`

const PageContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`


export const MainIndex = () => {
    return (
        <Container>
            <PageContainer>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/delegation" element={<DelegationPage />} />
                    <Route path="/validators" element={<ValidatorsPage />} />
                    <Route path="/mydelegation" element={<MyDelegation />} />
                    <Route path="/confirmDelegation" element={<ConfirmDelegation />} />
                    <Route path="/inputdelegation" element={<InputDelegation />} />
                    <Route path="/getreward" element={<GetReward />} />
                </Routes>
            </PageContainer>
        </Container>
    )
}