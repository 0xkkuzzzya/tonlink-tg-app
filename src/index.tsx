import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

const manifestUrl =
	"https://raw.githubusercontent.com/0xkkuzzzya/tonlink-tg-app/main/public/manifest.json";

root.render(
	<BrowserRouter>
		<TonConnectUIProvider manifestUrl={manifestUrl}>
			<App />
		</TonConnectUIProvider>
	</BrowserRouter>

);

