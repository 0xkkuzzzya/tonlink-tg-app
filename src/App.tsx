import React, { useEffect } from 'react';
import { MainIndex } from './components';
import styled from 'styled-components';
import "./App.css";

const Container = styled.div`
	background-color: #000;
	width: 100%;
	height: var(--tg-viewport-stable-height);
`


function App() {

	useEffect(() => {
		let tg = window.Telegram.WebApp;
		tg.expand();
		window.Telegram.WebApp.setHeaderColor("#000")
	}, [])

	return (
		<Container>
			<MainIndex />
		</Container>
	);
}

export default App;
