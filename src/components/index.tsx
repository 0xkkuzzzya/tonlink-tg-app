import styled from "styled-components";
import { Routes, Route } from 'react-router-dom';
import { Header } from "./Header/Header";
import { MainPage } from "./Pages/Main";
import mainbg from '../assets/main-bg.jpg'

const Container = styled.div`
    width: 390px;
    height: 100vh;
    margin: 0 auto;
    background-image: url(${mainbg});
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: fixed;
    @media (max-width: 390px) {
        width: 100%;
    }
`

const PageContainer = styled.div`
    width: 100%;
    margin-top: 20px;
    display: flex;
`


export const MainIndex = () => {
    return (
        <Container>
            <Header />
            <PageContainer>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                </Routes>
            </PageContainer>
        </Container>
    )
}