const routes = require('express').Router();
const myController = require('../controllers');
const path = require('path');

routes.get('/', myController.awesomeFunction);
routes.get('/awesome', myController.returnAnotherPerson);
routes.get('/contacts', myController.getAllContacts);
routes.get('/contacts/:firstName', myController.getContactByFirstName);

module.exports = routes;