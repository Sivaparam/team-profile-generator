const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email);
        this.officeNum = officeNum;
    }
}

const getManagerInfo = [
    {
        type: 'input',
        name: 'manName',
        message: 'Enter Managers Name:',
    },

    {
        type: 'input',
        name: 'manId',
        message: 'Enter Managers ID',
    },
    {
        type: 'input',
        name: 'manEmail',
        message: 'Enter Managers Email:',
    },
    {
        type: 'input',
        name: 'manContact',
        message: 'Enter Managers Office Number:',
    },
];


module.exports = { Manager, getManagerInfo };