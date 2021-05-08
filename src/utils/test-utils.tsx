import React, { FC, ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { theme } from '../styles';
import { ThemeProvider } from '@material-ui/core';
import '@testing-library/jest-dom';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const AllTheProviders: FC = ({ children }) => {
	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<ThemeProvider theme={theme}>
				{children}
			</ThemeProvider>
		</MuiPickersUtilsProvider>
	)
}

const customRender = (
	ui: ReactElement,
	options?: Omit<RenderOptions, 'queries'>
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'

export { customRender as render }