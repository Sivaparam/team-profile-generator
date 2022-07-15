const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, gitUserName) {
        super(name, id, email);
        this.gitUserName = gitUserName;
    }
}

const getEngineerInfo = [
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

module.exports = { Engineer, getEngineerInfo };