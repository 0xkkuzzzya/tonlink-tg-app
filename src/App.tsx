import React, { useEffect } from 'react';
import { MainIndex } from './components';
import styled from 'styled-components';
import "./App.css";
import { THEME, useTonAddress, useTonConnectUI, useTonWallet } from '@tonconnect/ui-react';
import { useAllValidators, useUserAllBalance } from './web3/useUserAllBalance';
import { GetBalance } from './web3/balance';
import { GetAllDelegationAndReward } from './web3/delegation';
import { GetAllValidators } from './web3/validators';

const Container = styled.div`
	background-color: #000;
	width: 100%;
	height: var(--tg-viewport-stable-height);
`


function App() {
	const userFriendlyAddress = useTonAddress();
	const wallet = useTonWallet();
	const [ tonConnectUI, setOptions ] = useTonConnectUI();
	const [ userAllBalance, setUserAllBalance] = useUserAllBalance();
	const [ allValidators, setAllValidators] = useAllValidators()
	setOptions({
		actionsConfiguration: {
			notifications: [],
			
		},
		uiPreferences: {
			theme: THEME.LIGHT
		}

	})

	useEffect(() => {
		async function main() {
			//let tb = await GetBalance(userFriendlyAddress === undefined ? "" : userFriendlyAddress)
			let alr = await GetAllDelegationAndReward(userFriendlyAddress === undefined ? "" : userFriendlyAddress)
			setUserAllBalance({
				all_delegation: alr[0],
				all_rewards: alr[1],
				balance: alr[2]
			})

			let av = await GetAllValidators()
			//console.log(av)
			setAllValidators(av)
		}

		let tg = window.Telegram.WebApp;
		tg.expand();
		window.Telegram.WebApp.setHeaderColor("#000")

		main()

	}, [wallet])

	return (
		<Container>
			<MainIndex />
		</Container>
	);
}

export default App;
