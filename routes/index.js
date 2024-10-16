const routes = require('express').Router();
const myController = require('../controllers');
const path = require('path');

routes.get('/', myController.awesomeFunction);
routes.get('/awesome', myController.returnAnotherPerson);
routes.get('/contacts', myController.getAllContacts);
routes.get('/contacts/:firstName', myController.getContactByFirstName);

routes.post('/contacts', myController.createContact);
routes.put('/contacts/:id', myController.updateContact);
routes.delete('/contacts/:id', myController.deleteContact);

module.exports = routes;