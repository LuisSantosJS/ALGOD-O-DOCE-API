const express = require('express');
const connectDB = require('./src/db/connection');
const routes = require('./src/routes');
const celebrate = require('celebrate');
const path = require('path');
const cors = require('cors');
const port = process.env.PORT || 3333;

const app = express();
app.use(express.json())
app.use(cors());

connectDB();

app.use(routes)


app.use('/uploads', express.static(path.resolve(__dirname, 'src', 'uploads')));
app.use('/assets', express.static(path.resolve(__dirname, 'src', 'assets')));

app.use(celebrate.errors());

app.listen(port, () => console.log('server running', port))