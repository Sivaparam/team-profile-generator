const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, gitUserName) {
        super(name, id, email);
        this.gitUserName = gitUserName;
    }
    addEngineerInfo(){
        return (`<div>
        <ul>
            <li>manager Name:${this.name} </li>
            <li>manager id:${this.id}</li>
            <li>manager email:${this.email}</li>
            <li>manager contact: ${this.gitUserName}</li>
        </ul>
    </div>`)
    }
}

const engineerPrompts = [
    {
        type: 'input',
        name: 'engName',
        message: 'Enter Engineer Name:',
    },
    {
        type: 'input',
        name: 'engID',
        message: 'Enter Engineer ID:',
    },
    {
        type: 'input',
        name: 'engEmail',
        message: 'Enter Engineer Email:',
    },
    {
        type: 'input',
        name: 'engGitName',
        message: 'Enter Engineer Github Username:',
    },
];

module.exports = { Engineer, engineerPrompts };