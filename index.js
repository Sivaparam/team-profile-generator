const fs = require('fs');
const inquirer = require('inquirer');
const { exit } = require('process');
const Employee = require('./lib/team');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

let fileName = 'team_profile.txt';

const managerInfo = [
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
];

const menu = [
    {
        type: 'rawlist',
        name: 'teamMember',
        message: 'Choose to add Team Members(opt 1 or 2) or Finish building team(opt 3)',
        choices: ['Engineer', 'Intern', 'Finish'],
    },

];

const engineerInfo = [
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

const internInfo = [
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

function buildTeam() {

    console.log('Welcome to Team Profile Generator Application');

    getMangerInfo();

    //console.log('Team Profile generator successfully!');

};

function getMangerInfo() {
    console.log('Lets gather Manager Information');
    inquirer.prompt(managerInfo)
        .then(data => {
            console.log('Gather Managers details!');
            fs.writeFile(fileName, JSON.stringify(data, null, '\t'), (err) =>
            err ? console.log(err) : console.log('success on manager details!')
            );
            displayMenu();
        })
        .catch(error => {
            console.log(`Error Occurred ${error}`);
        })
};

function displayMenu() {
    console.log('Display Options to add team members/finish team building')
    inquirer.prompt(menu)
        .then(data => {
            switch (data.teamMember) {
                case "Engineer":
                    getEngineerInfo();
                    break;
                case "Intern":
                    getInternInfo();
                    break;
                case "Finish":
                    break;
            }
        })
        .catch(error => {
            console.log(`Error Occurred ${error}`);
        })
};

function getEngineerInfo() {
    inquirer.prompt(engineerInfo)
    .then(data => {
        console.log('Gather Engineer details!');
        fs.appendFile(fileName, JSON.stringify(data, null, '\t'), (err) =>
        err ? console.log(err) : console.log('success on engineer details!')
        );
        displayMenu();
    })
    .catch(error => {
        console.log(`Error Occurred ${error}`);
    })
}

function getInternInfo() {
    inquirer.prompt(internInfo)
    .then(data => {
        console.log('Gather Intern details!');
        fs.appendFile(fileName, JSON.stringify(data, null, '\t'), (err) =>
        err ? console.log(err) : console.log('success on Intern details!')
        );
        displayMenu();
    })
    .catch(error => {
        console.log(`Error Occurred ${error}`);
    })
}

buildTeam();