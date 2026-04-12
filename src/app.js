const express = require('express');
const userController = require('./controllers/UserController');

const app = express();
app.use(express.json());


app.get('/', (req, res) => res.send('API Rodando!'));


app.post('/users', userController.create);
app.get('/users', userController.findAll);


app.put('/users/:id', userController.update);
app.patch('/users/:id', userController.update);
app.delete('/users/:id', userController.delete);

module.exports = app;