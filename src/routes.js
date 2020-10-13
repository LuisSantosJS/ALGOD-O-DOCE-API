const express = require('express');




const UserController = require('./controllers/UserController');
const TurmaController = require('./controllers/TurmaController');
const CardapioController = require('./controllers/CardapioController');
const AtividadeController = require('./controllers/AtividadeController');
const GaleriaController = require('./controllers/GaleriaController');
const PortifolioController = require('./controllers/PortifolioControler');


const routes = express.Router();

routes.get('/users/index', UserController.index);
routes.post('/users/create', UserController.create);
routes.post('/users/login', UserController.login);
routes.post('/users/update', UserController.update);
routes.post('/users/delete', UserController.delete);

routes.get('/turmas/index', TurmaController.index);
routes.post('/turmas/create', TurmaController.create);
routes.post('/turmas/delete', TurmaController.delete);
routes.post('/turmas/update', TurmaController.update);

routes.get('/cardapio/index', CardapioController.index);
routes.post('/cardapio/create', CardapioController.create);
routes.post('/cardapio/update', CardapioController.update);
routes.post('/cardapio/delete', CardapioController.delete);

routes.get('/atividade/index', AtividadeController.index);
routes.post('/atividade/create', AtividadeController.create);
routes.post('/atividade/update', AtividadeController.update);
routes.post('/atividade/delete', AtividadeController.delete);

routes.get('/galeria/index', GaleriaController.index);
routes.post('/galeria/create', GaleriaController.create);
routes.post('/galeria/update', GaleriaController.update);
routes.post('/galeria/delete', GaleriaController.delete);

routes.get('/portifolio/index', PortifolioController.index);
routes.post('/portifolio/create', PortifolioController.create);






module.exports = routes;