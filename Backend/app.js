const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const connectDB = require('./db/db.connection');
const app = express();
const routes = require('./routes/user.routes');
connectDB();
const cors = require('cors');
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(cors());
app.use(express.json());


app.use('/api/users', routes);



module.exports = app;