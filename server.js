const express = require('express');
const connectDB = require('./src/db/connection');
const routes = require('./src/routes');
const celebrate = require('celebrate');
const path = require('path');
const cors = require('cors');
const port = process.env.PORT || 3333;



const app = express();
app.use(express.json({limit: '20mb', extended: true}));

app.use(cors());

connectDB();

app.use(routes)

app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    next();
});


app.use('/uploads', express.static(path.resolve(__dirname, 'src', 'uploads')));
app.use('/assets', express.static(path.resolve(__dirname, 'src', 'assets')));



app.use(celebrate.errors());

app.listen(port, () => console.log('server running', port))