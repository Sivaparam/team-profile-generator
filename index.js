const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

const getManagerInfo = [
    {
        type: 'input',
        name: 'manName',
        message: 'Enter Managers Name:',
    },
    {
        type: 'input',
        name: 'manID',
        message: 'Enter Managers ID:',
    },
    {
        type: 'input',
        name: 'manEmail',
        message: 'Enter Managers Email:',
    },
    {
        type: 'input',
        name: 'manNum',
        message: 'Enter Managers Office Number:',
    },
    {
        type: 'rawlist', 
        name: 'teamMember',
        message: 'Choose to add Team Members(opt 1 or 2) or Finish building team(opt 3)',
        choices: ['Engineer', 'Intern', 'Finish'],
    },
];

function buildTeam() {

    console.log('Welcome to Team Profile Generator Application');
    inquirer.prompt(getManagerInfo)
    .then(data => {
        console.log(data);
        console.log(data.teamMember);
        console.log('Team Profile generator successfully!');
    })
    .catch(error => {
        console.log(`Error Occurred ${error}`);
    })

}

buildTeam();