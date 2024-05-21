import React from 'react';
import { MainIndex } from './components';
import styled from 'styled-components';
import "./App.css";

const Container = styled.div`
	background-color: var(--tg-theme-bg-color);
	width: 100%;
	height: 100vh;
`


function App() {
	return (
		<Container>
			<MainIndex/>
		</Container>
	);
}

export default App;
