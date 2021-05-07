import * as React from 'react';
import '../custom.css';
import type { AppProps } from 'next/app';
import { theme } from '../styles';
import { ThemeProvider } from '@material-ui/core';

const ClockApp: React.FC<AppProps> = ({ Component, pageProps }) => {
	//Necessary to be able to use Material-UI with SSG.
	React.useEffect(() => {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector('#jss-server-side');
		if (jssStyles && jssStyles.parentElement) {
			jssStyles.parentElement.removeChild(jssStyles);
		}
	}, [])

	return (
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
			</ThemeProvider>
	)
};

export default ClockApp;
