const fs = require('fs');
const inquirer = require('inquirer');
const mainHtml = require('./src/mainHtml');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const employees = [];

const questions = {

    manager: [
        {
            type: 'input',
            name: 'name',
            message: 'Please provide name of the manager? ',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a name.');
                    return false;
                }
            }
        }, 
        
        {
            type: 'number',
            name: 'id',
            message: "Please provide ID number",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('You must enter an ID number.');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'email',
            message: "Please provide employees's email address",
            validate: emailInput => {
                if (emailInput.includes('@') && emailInput.includes('.com')) {
                return true;
                } else {
                console.log(' You must enter a valid email address.');
                return false;
                }
            }
        },

        {
            type: 'input',
            name: 'officeNumber',
            message: "Please provide an office number.",
        }
    ],

    intern: [
        {
            type:'input',
            name: 'name',
            message: "Please provide name of the employee ",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('You must enter a name.')
                }
            }
        },

        {
            type: 'number',
            name: 'id',
            message: "Please provide intern's ID number",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('You must enter an ID number.')
                    return false;
                }
            } 
        },
        {
            type: 'input',
            name: 'email',
            message: "Please provide intern's email address ",
            validate: emailInput => {
                if (emailInput.includes('@') && emailInput.includes('.com')) {
                    return true;
                } else {
                    console.log(' You must enter a valid email address.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'schoolName',
            message: " Please provide name of the school he/she attending",
            validate: function (value) {
                if (value) {
                    return true;
                } else {
                    console.log("Please provide the name of the school.")
                }
            }
        }
    ],

    engineer: [
        {        
            type:'input',
            name: 'name',
            message: "Please provide name of the employee ",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('You must enter a name.')
                }
            }
        },

        {
            type: 'number',
            name: 'id',
            message: "Please provide engineer's ID number",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('You must enter an ID number.')
                    return false;
                }
            } 
        },
        {
            type: 'input',
            name: 'email',
            message: "Please provide engineer's email address",
            validate: emailInput => {
                if (emailInput.includes('@') && emailInput.includes('.com')) {
                    return true;
                } else {
                    console.log(' You must enter a valid email address.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: " Please provide engineer's github username",
            validate: function (value) {
                if (value) {
                    return true;
                } else {
                    console.log('Please provide a valid github username.');
                }
            }
        }   
    ]
};

const addManager = () => {
    return inquirer
        .prompt(questions.manager)
        .then(answers => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            employees.push(manager);
            addNew();
        });
};

const addEngineer = () => {
    return inquirer
        .prompt(questions.engineer)
        .then(answers => {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            employees.push(engineer);
            addNew();
        });
};

const addIntern = () => {
    return inquirer
        .prompt(questions.intern)
        .then(answers => {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.schoolName);
            employees.push(intern);
            addNew();
        });
};

const addNew = () => {
    return inquirer
        .prompt({
            type: 'list',
            name: 'newEmployee',
            message: 'Do you want to add another Employee?',
            choices: ['Engineer', 'Intern', 'Finish']
        })
        .then(answers => {
            switch (answers.newEmployee) {
                case 'Engineer':
                    addEngineer();
                    break;
                case 'Intern':
                    addIntern();
                    break;
                case 'Finish':
                    makeProfile();
                    break;
            }
        });
};

const makeProfile = (fileName) => {
    fileName = fs.writeFile('./dist/index.html', mainHtml(employees), (err => {
        if (err) {
            console.log('Error:' + err);
        } else {
            console.log('Team Profile Created');
        }
    }));
};

addManager();