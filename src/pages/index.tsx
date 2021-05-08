import * as React from 'react';
import Layout from '../components/Layout';
import SynchronizedClocks from '../components/SynchronizedClocks';

const Home: React.FC = () => {

	return (
		<React.Fragment>
			<Layout pageTitle="" contentTitle="">
				<SynchronizedClocks ticking={false} />
			</Layout>
		</React.Fragment>
	)
};

export default Home;