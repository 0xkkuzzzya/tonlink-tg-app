import React from 'react';
import { MainIndex } from './components';
import styled from 'styled-components';

const Container = styled.div`
	background: #000;
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
