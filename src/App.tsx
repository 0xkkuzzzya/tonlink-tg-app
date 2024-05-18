import React from 'react';
import { MainIndex } from './components';
import styled from 'styled-components';
import mainbg from './assets/main-bg.jpg'

const Container = styled.div`
	background: #000;
	padding-bottom: 23px;
	height: 100%;
`


function App() {
	return (
		<Container>
			<MainIndex/>
		</Container>
	);
}

export default App;
