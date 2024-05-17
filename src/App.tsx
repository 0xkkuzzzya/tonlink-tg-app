import React from 'react';
import { MainIndex } from './components';
import styled from 'styled-components';
import mainbg from './assets/main-bg.jpg'

const Container = styled.div`
	background-image: url(${mainbg});
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: fixed;
`


function App() {
	return (
		<Container>
			<MainIndex/>
		</Container>
	);
}

export default App;
