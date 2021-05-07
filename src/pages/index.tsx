import * as React from 'react';
import {
	Box,
	makeStyles,
	Theme,
	createStyles,
	useTheme,
} from '@material-ui/core';
import Layout from '../components/Layout';

const useStyles = makeStyles((theme: Theme) => {
	return createStyles({
		
	});
});

const Home: React.FC = () => {

	const classes = useStyles(useTheme());

	return (
		<React.Fragment>
			<Layout pageTitle="" contentTitle="">
				<Box>
					
				</Box>
			</Layout>
		</React.Fragment>
	)
};

export default Home;