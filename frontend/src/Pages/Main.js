import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import VoteCard from '../Components/VoteCard';

const Main = () => {
	return (
		<React.Fragment>
			<Container maxWidth="md">
				<VoteCard />
			</Container>
		</React.Fragment>
	);
};

export default Main;
