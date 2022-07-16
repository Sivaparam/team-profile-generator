//packages
const fs = require('fs');
const inquirer = require('inquirer');
const { exit } = require('process');

//import class and quesitons
const { Engineer, engineerPrompts } = require('./lib/engineer');
const { Intern, internPrompts } = require('./lib/intern');
const { Manager, managerPromts } = require('./lib/manager');

//variable to hold name of file
const fileName = './dist/index.html';
const { generateHTML } = require('./src/generateHTML');
const dataFile= './src/data.txt';

//Inquirer for menu option
const menu = [
    {
        type: 'rawlist',
        name: 'teamMember',
        message: 'Choose from following to add/finsih building team:',
        choices: ['Engineer', 'Intern', 'Finish'],
    },
];

//initial function that gets invokved by self
getMangerInfo();

//display menu option to add a team member or complete generating team buillding
async function displayMenu() {
    
    await inquirer.prompt(menu)
        .then(data => {
            switch (data.teamMember) {
                case "Engineer":
                    getEngineerInfo();
                    break;
                case "Intern":
                    getInternInfo();
                    break;
                case "Finish":
                    generateHTML();
                    break;
            }
        })
        .catch(error => {
            console.log(`Error Occurred during menu option: ${error}`);
        })
};

//function that gathers manager information from user, data is written to temp file. Invokes displaymenu function
async function getMangerInfo() {
    console.log('Welcome to Team Profile Generator Application');

    await inquirer.prompt(managerPromts)
        .then(data => {
            const manager = new Manager(data.manName, data.manId, data.manEmail, data.manContact);
           
            var ManagerData = manager.addManagerInfo();
            fs.writeFile(dataFile, ManagerData, (err) =>
                err ? console.log(err) : console.log('Manager Data updated to temp file!'));

        })

        .catch(error => {
            console.log(`Error Occurred in manager info ${error}`);
        })
    displayMenu();
};

//function that gather engineer information from user, data is written to temp file. Invokes displaymenu function
async function getEngineerInfo() {
    await inquirer.prompt(engineerPrompts)
        .then(data => {

            const engineer = new Engineer(data.engName, data.endID, data.engEmail, data.engGitName);
           
            var EngineerData = engineer.addEngineerInfo();
            fs.appendFile(dataFile, EngineerData, (err) =>
                err ? console.log(err) : console.log('Engineer data updated to temp file!'));

        })
        .catch(error => {
            console.log(`Error Occurred in Engineer Info ${error}`);
        })
    displayMenu();
};

//function that gathers intern information from user, data is written to temp file. Invokes displaymenu function
async function getInternInfo() {
    await inquirer.prompt(internPrompts)
        .then(data => {


            const intern = new Intern(data.intName, data.intID, data.intEmail, data.intSchool);
            // empData.push(intern);
            var InternData = intern.addInternInfo();
            fs.appendFile(dataFile, InternData, (err) =>
                err ? console.log(err) : console.log('Intern data updated to temp file!'));

        })
        .catch(error => {
            console.log(`Error Occurred in Intern Info ${error}`);
        })
    displayMenu();
};


