import styled from "styled-components";
import TonLinkLogo from '../../assets/TonLink.svg'
import { TonConnectButton } from "@tonconnect/ui-react";

const Container = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
`

const Logo = styled.img`
    width: 45px;
    margin-left: 20px;
`

const Name = styled.a`
    font-size: 23px;
    font-weight: 500;
    color: #fff;
`


export const Header = () => {
    return (
        <Container>
            <LogoContainer>
                <Logo src={TonLinkLogo} />
                <Name>Tonlink</Name>
            </LogoContainer>
            <TonConnectButton style={{marginRight: "20px", height: "35px"}} />
        </Container>
    )
}