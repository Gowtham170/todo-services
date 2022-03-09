const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const connection = require('./config/dp_config');
const taskRouter = require('./route/task');

const app = express();

//env variable
dotenv.config();
const port = process.env.PORT;

// middleware
app.use(cors());
app.use(express.json());

// db config
connection();

app.use('/task', taskRouter);

app.listen(port, () => {
    console.log(`Server is running on the http://localhost:${port}`);
});