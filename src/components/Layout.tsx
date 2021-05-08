import * as React from 'react';
import Head from 'next/head';
import {
	Container,
	Paper,
	makeStyles,
	Theme,
	createStyles,
	useTheme
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => {
	return createStyles({
		root: {
			display: 'flex',
			alignItems: 'center',
			flexDirection: 'column',
			marginTop: theme.spacing(10),
			marginBottom: theme.spacing(10)
		},
		paper: {
			padding: theme.spacing(6),
			margin: theme.spacing(2),
			[theme.breakpoints.down('sm')]: {
				flexDirection: 'column',
				width: '100vw',
				paddingLeft: theme.spacing(1),
				paddingRight: theme.spacing(1),
			},
		},
	});
});

interface Props {
	children?: React.ReactNode;
	pageTitle: string;
}

const Layout: React.FC<Props> = (props) => {

	const { children, pageTitle } = props;
	const classes = useStyles(useTheme());

	return (
		<React.Fragment>
			<Head>
				<title>{pageTitle}</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<React.Fragment>
				<Container maxWidth="lg" className={classes.root}>
					<Paper elevation={2} className={classes.paper} >
						<div>
							{children}
						</div>
					</Paper>
				</Container>
			</React.Fragment>
		</React.Fragment>
	)
};

export default Layout;
