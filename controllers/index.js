const awesomeFunction = (req, res, next) => {
    res.json('Lindsey Boelter');
};

const returnAnotherPerson = (req, res, next) => {
    res.json('Super awesome person');
};

module.exports = { awesomeFunction, returnAnotherPerson };
