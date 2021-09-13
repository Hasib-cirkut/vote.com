const express = require('express');

const app = express();

const cors = require('cors');
app.use(cors());
require('dotenv').config();

const mongoose = require('mongoose');

const userRoute = require('./Routes/userRoute');
const voteRoute = require('./Routes/voteRoute');
const requestRoute = require('./Routes/requestRoute');

//Middleware

app.use(express.json());
app.use(
	express.urlencoded({
		extended: false
	})
);

app.use('/user', userRoute);
app.use('/vote', voteRoute);
app.use('/request', requestRoute);

app.get('/', (req, res) => {
	res.send('Hello world');
});

let uri = `mongodb://localhost:27017/voteDB`;

try {
	mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
	console.log('Connected to MongoDB Local');
} catch (error) {
	console.log('could not connect');
}

app.listen(5000, () => {
	console.log(`Listening to port 5000`);
	console.log(`https://localhost:5000`);
});
