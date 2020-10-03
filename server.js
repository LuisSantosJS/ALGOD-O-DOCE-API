const express = require('express');
const connectDB = require('./src/db/connection');
const routes = require('./src/routes');
// const bodyParser = require('body-parser')
const cors = require('cors');
const port = process.env.PORT || 3000;

const app = express();
app.use(express.json())
app.use(cors());

connectDB();

app.use(routes)


app.listen(port, () => console.log('server running', port))