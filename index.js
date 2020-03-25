const express = require('express');
var mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');

const app = express();

//Midleware
app.use(express.json());

//Route middlewares
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);

//Connect to the database
mongoose.connect("mongodb://localhost/authenticationWithJwtDB", {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.listen(3000, () => {
    console.log('Listenning to port 3000...');
});