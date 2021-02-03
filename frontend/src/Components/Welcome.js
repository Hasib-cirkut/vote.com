import React from 'react';

import '../global.css';

import { Row, Col } from 'antd';
import { Card } from 'antd';

const Welcome = () => {
	return (
		<Row className="welcome-main">
			<Col span={6} className="left" />
			<Col span={12}>
				<Row style={{ marginBottom: 20, marginTop: 20 }}>
					<Col span={12}>
						<h3>Welcome, Anon</h3>
					</Col>
					<Col span={12}>
						<h3>Signup/Login</h3>
					</Col>
				</Row>

				<Row className="welcomePosts">
					<Row>
						<Card style={{ width: 400, marginBottom: 10 }}>
							<h3>Nazia Hasan is fake news</h3>
							<h5>120 entries | 5431 votes</h5>
						</Card>
					</Row>
				</Row>
			</Col>
			<Col span={6} className="right" />
		</Row>
	);
};

export default Welcome;
