//packages
const fs = require('fs');
const inquirer = require('inquirer');
const { exit } = require('process');

//import class and quesitons
const {Engineer, engineerPrompts} = require('./lib/engineer');
const {Intern, internPrompts} = require('./lib/intern');
const {Manager, managerPromts} = require('./lib/manager');

//variable to hold name of file
const fileName = 'index.html';
const {generateHTML} = require('./src/generateHTML');
const fileName1 = 'data.txt';

//Array variable to hold employee data
let empData = [];

//Inquirer for menu option
const menu = [
    {
        type: 'rawlist',
        name: 'teamMember',
        message: 'Choose from following to add/finsih building team:',
        choices: ['Engineer', 'Intern', 'Finish'],
    },

];

getMangerInfo();

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
                    generateFile();
                    break;
            }
        })
        .catch(error => {
            console.log(`Error Occurred during menu option: ${error}`);
        })
};

//function that gathers manager information and stores in an array. Invokes dusplaymenu function
 async function getMangerInfo() {
    console.log('Welcome to Team Profile Generator Application');
    
   await inquirer.prompt(managerPromts)
        .then(data => {
            const manager = new Manager(data.manName, data.manId, data.manEmail, data.manContact);
            empData.push(manager);
           var ManagerData = manager.addManagerInfo();
           fs.writeFile(fileName1, ManagerData, (err) =>
           err ? console.log(err) : console.log('Team Profile generator successfully!'));

        })
    
        .catch(error => {
            console.log(`Error Occurred ${error}`);
        })
        displayMenu();
};

async function getEngineerInfo() {
   await inquirer.prompt(engineerPrompts)
        .then(data => {

            console.log(data);
            const engineer = new Engineer(data.engName, data.endID, data.engEmail, data.engGitName);
            empData.push(engineer);
            var EngineerData = engineer.addEngineerInfo();
            fs.appendFile(fileName1, EngineerData, (err) =>
            err ? console.log(err) : console.log('Team Profile generator successfully!'));
         

        })
        .catch(error => {
            console.log(`Error Occurred in Engineer Info ${error}`);
        })
        displayMenu();
};

async function getInternInfo() {
   await inquirer.prompt(internPrompts)
        .then(data => {

            console.log(data);
            const intern = new Intern(data.intName, data.intID, data.intEmail, data.intSchool);
            empData.push(intern);
            var InternData = intern.addInternInfo();
           fs.appendFile(fileName1, InternData, (err) =>
           err ? console.log(err) : console.log('Team Profile generator successfully!'));
         
        })
        .catch(error => {
            console.log(`Error Occurred in Intern Info ${error}`);
        })
        displayMenu();
};

function generateFile() {
    generateHTML();
   
}

