const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
}

const getInternInfo = [
    {
        type: 'input',
        name: 'intName',
        message: 'Enter Intern Name:',
    },
    {
        type: 'input',
        name: 'intID',
        message: 'Enter Intern ID:',
    },
    {
        type: 'input',
        name: 'intEmail',
        message: 'Enter Intern Email:',
    },
    {
        type: 'input',
        name: 'engSchName',
        message: 'Enter Intern School Name:',
    },
];

module.exports = { Intern, getInternInfo };