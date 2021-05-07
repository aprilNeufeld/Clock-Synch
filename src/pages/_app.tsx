import * as React from 'react';
import '../custom.css';
import type { AppProps } from 'next/app';
import { theme } from '../styles';
import { ThemeProvider } from '@material-ui/core';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';


const ClockApp: React.FC<AppProps> = ({ Component, pageProps }) => {

	/**
	 * Necessary to be able to use Material-UI with NextJS.
	 */
	React.useEffect(() => {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector('#jss-server-side');
		if (jssStyles && jssStyles.parentElement) {
			jssStyles.parentElement.removeChild(jssStyles);
		}
	}, [])

	return (
		<LocalizationProvider dateAdapter={AdapterDateFns}>
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</LocalizationProvider>
	)
};

export default ClockApp;
