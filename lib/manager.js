const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email);
        this.officeNum = officeNum;
    }

    ////function helps to build team profile with manager data
    addManagerInfo() {
        return (`<div class="card">
        <h3>${this.name} </h3>
        <h4>Manager</h4>
        <div class="card-body">
        <ul>
            <li>ID:${this.id}</li>
            <li>Email: <a href="mailto: ${this.email}">${this.email}</a></li>
            <li>Contact: ${this.officeNum}</li>
        </ul>
        </div>
    </div>`)
    }
}

//questions to collect intern details
const managerPromts = [
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




module.exports = { Manager, managerPromts };