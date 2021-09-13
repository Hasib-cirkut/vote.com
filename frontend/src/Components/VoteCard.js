import React from 'react';
import { Card, CardContents, Button, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
	root: {
		minWidth: 275
	},
	title: {
		fontSize: 14
	}
});

const VoteCard = () => {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<h1 className={classes.title}>This is a card</h1>
		</Card>
	);
};

export default VoteCard;
