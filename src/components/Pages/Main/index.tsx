import styled from "styled-components";
import { Balance } from "./Balance";
import { Links } from "./Links";

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`


export const MainPage = () => {
    return(
        <Container>
            <Balance/>
            <Links/>
        </Container>
    )
}