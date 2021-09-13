import React from 'react';
import { Row, Col, Card } from 'antd';

import { useState } from 'react';

export default function Post({ name }) {
	const [ votes, setvotes ] = useState(0);

	return (
		<Row>
			<Card style={{ width: 400, marginBottom: 10 }}>
				<h3>{name}</h3>
				<h3>votes: {votes}</h3>
				<button>up vote</button>
				<button>down vote</button>
			</Card>
		</Row>
	);
}
