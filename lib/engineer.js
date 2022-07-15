const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, gitUserName) {
        super(name, id, email);
        this.gitUserName = gitUserName;
    }
    addEngineerInfo(){
        return (`<div class="card">
        <h4>${this.name}
        <h5>Engineer</h5>
        <div class="card-body">
        <ul>
            
            <li>ID:${this.id}</li>
            <li>Email: <a href="mailto: ${this.email}">${this.email}</a></li>
           <li> Github: <a href="https://github.com/${this.gitUserName}">${this.gitUserName} </a> </li>
           
        </ul>
        </div>
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