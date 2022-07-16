const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    //function helps to build team profile with intern data
    addInternInfo() {
        return (`<div class="card">
        <h4>${this.name} </h4>
        <h5>Intern</h5>
        <div class="card-body">
        <ul>
            <li>ID:${this.id}</li>
            <li>Email: <a href="mailto: ${this.email}">${this.email}</a></li>
            <li>Contact: ${this.school}</li>
        </ul>
        </div>
    </div>\n`)
    }
}

//questions to collect intern details
const internPrompts = [
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
        name: 'intSchool',
        message: 'Enter Intern School Name:',
    },
];

module.exports = { Intern, internPrompts };