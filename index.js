//packages
const fs = require('fs');
const inquirer = require('inquirer');
const { exit } = require('process');

//import class and quesitons
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

//variable to hold name of file
const fileName = 'team_profile.txt';

//Array variable to hold employee data
let empData = [];

//Inquirer for menu option
const menu = [
    {
        type: 'rawlist',
        name: 'teamMember',
        message: 'Choose to add Team Members(opt 1 or 2) or Finish building team(opt 3)',
        choices: ['Engineer', 'Intern', 'Finish'],
    },

];


function buildTeam() {

    console.log('Welcome to Team Profile Generator Application');

    getMangerInfo();

    //console.log('Team Profile generator successfully!');

};

//function that gathers manager information and stores in an array. Invokes dusplaymenu function
function getMangerInfo() {
    console.log('Lets gather Manager Information');
    inquirer.prompt(Manager.getManagerInfo)
        .then(data => {
            console.log(data);
const {name, id, email, officeNum} = data;
const manager = new Manager(name, id, email, officeNum);
empData.push(manager);
console.log(manager);

         
            // fs.writeFile(fileName, JSON.stringify(data, null, '\t'), (err) =>
            // err ? console.log(err) : console.log('success on manager details!')
            // );
        })

        .then(displayMenu())
            //displayMenu();
       
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
    inquirer.prompt(Engineer.getEngineerInfo)
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
    inquirer.prompt(Intern.getInternInfo)
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