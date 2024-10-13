const fs = require('fs');
const path = require('path');

const contactsFilePath = path.join(__dirname, '../contacts.json');

const awesomeFunction = (req, res, next) => {
    res.json('Lindsey Boelter');
};

const returnAnotherPerson = (req, res, next) => {
    res.json('Super awesome person');
};

const getAllContacts = (req, res, next) => {
    fs.readFile(contactsFilePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Unable to read contacts file' });
        }
        // Parse the JSON data from the file
        const contacts = JSON.parse(data);

        // Extract names of all contacts
        const allNames = Object.values(contacts[0]).map(contact => `${contact.firstName} ${contact.lastName}`);

        // Send the list of names as a JSON response
        res.json(allNames);
    });
};

const getContactByFirstName = (req, res, next) => {
    const { firstName } = req.params;

    fs.readFile(contactsFilePath, 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: 'Error reading contacts file' });
        }
        const contacts = JSON.parse(data);

        // Loop through the contacts and find the one that matches the firstName
        const contact = Object.values(contacts[0]).find(c => c.firstName === firstName);

        if (contact) {
            res.json(contact);
        } else {
            res.status(404).json({ message: 'Contact not found' });
        }
    });
};

module.exports = { awesomeFunction, returnAnotherPerson, getAllContacts, getContactByFirstName };
