import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { useNavigate, useParams } from "react-router";
import Tonlink from '../../../assets/TonLink.webp'
import Active_Link from '../../../assets/Oracle-logo/ActiveLink.webp'
import { Link } from 'react-router-dom';
import { Skeleton } from '@mui/material';
import { useTonAddress, useTonWallet } from '@tonconnect/ui-react';
import { GetValidatorInfo, ValidatorInfo } from '../../../web3/validators';
import { useVBalance } from '../../../web3/useVBalance';
import { GetDelegationByValidator } from '../../../web3/delegation';
import { toFixed } from '../../../web3/utils';

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
    margin-left: 5px;
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
    height: 43px;
    background: #027BFE;
    border-radius: 10px;
    text-align: left;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    cursor: pointer;
`

const GetRewardButtonInactive = styled.button`
    width: 100%;
    height: 43px;
    background: #757575;
    border-radius: 10px;
    margin-top: 20px;
    text-align: left;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    cursor: pointer;
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
    height: 43px;
    border-radius: 10px;
    background: #26252B;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
`

export const ValidatorsPage = () => {

    const navigate = useNavigate();
    const userFriendlyAddress = useTonAddress();
	const wallet = useTonWallet();
    let { address } = useParams() 

    const [vBalance, setVBalance] = useVBalance()

    const [valInfo, setValInfo] = useState({
        validator_manager_address_raw: "",
        validator_stake_amount: -1,
        validator_delegation_amount: -1,
        validator_link_info: {
            name: "",
            logo: "",
            description: "",
            fee: "",
            website: ""
        },
        delegation_pool_list: [""],
        srv_securing: -1,
    })


    useEffect(() => {
        window.Telegram.WebApp.BackButton.show()
        window.Telegram.WebApp.BackButton.onClick(() => navigate(-1))

        async function main() {
            let val_info_new = await GetValidatorInfo(address!)
            setValInfo({
                validator_manager_address_raw: val_info_new.validator_manager_address_raw,
                validator_stake_amount: val_info_new.validator_stake_amount,
                validator_delegation_amount: val_info_new.validator_delegation_amount,
                validator_link_info: {
                    name: val_info_new.validator_link_info.name,
                    logo: val_info_new.validator_link_info.logo,
                    description: val_info_new.validator_link_info.description,
                    fee: val_info_new.validator_link_info.fee,
                    website: val_info_new.validator_link_info.website,
                },
                delegation_pool_list: val_info_new.delegation_pool_list,
                srv_securing: val_info_new.srv_securing,
            })

            let balances = await GetDelegationByValidator(userFriendlyAddress, address!)
            setVBalance({
                delegation_balance: balances[0],
                reward_balance: balances[1],
                delegation_manager_address: balances[2]
            })
        }
        main()
    }, [])

    return (
        <MainContainer>
            <HeaderContainer>
                {valInfo.validator_link_info.logo != "" ? <Logo src={Tonlink} /> : <Skeleton sx={{ bgcolor: '#616161' }} variant="circular" width={40} height={40} animation="wave"  /> }
                <HeaderText>{ valInfo.validator_link_info.name != "" ? valInfo.validator_link_info.name : <Skeleton sx={{ bgcolor: '#616161', fontSize: '25px' }} variant="text" width={150} height={25} animation="wave"  /> }</HeaderText>
            </HeaderContainer>
            <DescriptionContainer>
                <Description>
                    { valInfo.validator_link_info.description != "" ? valInfo.validator_link_info.description :
                    <Skeleton sx={{ bgcolor: '#616161' }}  variant="rounded" width={"100%"} height={60} animation="wave" /> 
                    } 
                </Description>
            </DescriptionContainer>
            <ContainerInfo>
                <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <InfoBlock>
                        <InfoBlockTextName>TOTAL STAKED</InfoBlockTextName>
                        <InfoBlockText>{valInfo.validator_stake_amount != -1 ? valInfo.validator_stake_amount + " stTON" : <Skeleton sx={{ bgcolor: '#616161' }}  variant="rounded" width={100} height={20} animation="wave" /> }</InfoBlockText>
                    </InfoBlock>
                    <InfoBlock>
                        <InfoBlockTextName>TOTAL DELEGATED</InfoBlockTextName>
                        <InfoBlockText>{valInfo.validator_delegation_amount != -1 ? valInfo.validator_delegation_amount + " stTON" : <Skeleton sx={{ bgcolor: '#616161' }}  variant="rounded" width={100} height={20} animation="wave" /> } </InfoBlockText>
                    </InfoBlock>
                </div>
                <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "20px" }}>
                    <InfoBlock>
                        <InfoBlockTextName>VALIDATOR FEE</InfoBlockTextName>
                        <InfoBlockText>{valInfo.validator_link_info.fee != "" ? valInfo.validator_link_info.fee + "%" : <Skeleton sx={{ bgcolor: '#616161' }}  variant="rounded" width={100} height={20} animation="wave" /> }</InfoBlockText>
                    </InfoBlock>
                    <InfoBlock>
                        <InfoBlockTextName>SRVs SECURING</InfoBlockTextName>
                        <InfoBlockText>{valInfo.srv_securing != -1 ? valInfo.srv_securing : <Skeleton sx={{ bgcolor: '#616161' }}  variant="rounded" width={100} height={20} animation="wave" /> }</InfoBlockText>
                    </InfoBlock>
                </div>
            </ContainerInfo>
            <GreyBlock>
                <Text>My delegation</Text>
                <Amount>{toFixed(vBalance.delegation_balance / 10**9, 2)} stTON</Amount>
            </GreyBlock>
            <GreyBlock>
                <Text>My rewards</Text>
                <Amount>{toFixed(vBalance.reward_balance / 10**9, 2)} TL</Amount>
            </GreyBlock>
            <Link to={`/inputdelegation/${address}`} style={{ textDecoration: "none", width: "100%" }}>
                <GetRewardButton>
                    <Text>Delegation</Text>
                    <ActiveLink src={Active_Link} />
                </GetRewardButton>
            </Link>
            { vBalance.reward_balance == 0 ? 
                <GetRewardButtonInactive>
                    <Text>Get Rewards</Text>
                    <ActiveLink src={Active_Link} />
                </GetRewardButtonInactive>
                :
                <Link to={`/getreward/${address}`} style={{ textDecoration: "none", width: "100%" }}>
                    <GetRewardButton>
                        <Text>Get Rewards</Text>
                        <ActiveLink src={Active_Link} />
                    </GetRewardButton>
                </Link>
            }
        </MainContainer>
    )
}