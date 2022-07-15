const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    addInternInfo(){
        return (`<div>
        <ul>
            <li>manager Name:${this.name} </li>
            <li>manager id:${this.id}</li>
            <li>manager email:${this.email}</li>
            <li>manager contact: ${this.school}</li>
        </ul>
    </div>`)
    }
}

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
        name: 'engSchool',
        message: 'Enter Intern School Name:',
    },
];

module.exports = { Intern, internPrompts };