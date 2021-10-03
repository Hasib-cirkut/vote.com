const express = require('express');

const app = express();

const cors = require('cors');
app.use(cors());
require('dotenv').config();

const cloudinary = require('cloudinary').v2;

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

app.use(express.static('public'));

//Cloudinary

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET
});

app.get('/', (req, res) => {
	res.send('Hello world');
});

let uri = process.env.MONGO_URI;

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
