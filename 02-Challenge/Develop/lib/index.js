const inquirer = require("inquirer");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const fs = require("fs");

function generate() {
    createManager();
}

function generate() {
    createEngineer();
}

function generate() {
    createIntern();
}


const employeeArr = [];

function createManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "Type the name of the manager",
        },
        {
            type: "input",
            name: "managerId",
            message: "Type the manager's ID",
        },
        {
            type: "input",
            name: "managerEmail",
            message: "Enter manager's email",
        },
        {
            type: "input",
            name: "managerOfficeNumber",
            message: "What is the managers office number?",
        },
    ]).then((answers) => {
        const manager = new Manager(
            answers.managerName,
            answers.managerId,
            answers.managerEmail,
            answers.managerOfficeNumber
        );
        employeeArr.push(manager)
        generate()
    });
}

function createEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "Type the name of the Engineer",
        },
        {
            type: "input",
            name: "engineerId",
            message: "Type the Engineer's ID",
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "Enter Engineer's email",
        },
        {
            type: "input",
            name: "engineerGitHub",
            message: "Please enter the Engineer's GitHub username",
        },
    ]).then((answers) => {
        const engineer = new Engineer(
            answers.engineerName,
            answers.engineerId,
            answers.engineerEmail,
            answers.engineerGitHub
        );
        employeeArr.push(engineer)
        generate()
    });
}

function createIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "Type the name of the Intern",
        },
        {
            type: "input",
            name: "internId",
            message: "Type the Intern's ID",
        },
        {
            type: "input",
            name: "internEmail",
            message: "Enter Intern's email",
        },
        {
            type: "input",
            name: "internSchool",
            message: "Please enter the Intern's school",
        },
    ]).then((answers) => {
        const intern = new Intern(
            answers.internName,
            answers.internId,
            answers.internEmail,
            answers.internSchool
        );
        employeeArr.push(intern)
        generate()
    })
}



function generateHTML() {
    const html = `
    <!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Team Profile</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
</head>

<body>
    <h1 class="text-center mb-4">TEAM PROFILE</h1>
    <div class="container-fluid" style="display:flex; justify-content: space-evenly">
        ${employeeArr.map(emp => emp.makeHTML()).join("\n")}
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
        crossorigin="anonymous"></script>
</body>

</html>
`

    fs.writeFileSync("./output.html", html);

    console.log("Success");
}


function generate() {
    inquirer.prompt([
        {
            type: "list",
            name: "nextEmployee",
            message: "Enter another Employee?",
            choices: ["Add Manager", "Add Engineer", "Add Intern", "Create Profile"]
        }
    ]).then((answers) => {
        switch (answers.nextEmployee) {
            case "Add Manager":
                createManager();
                break;
            case "Add Engineer":
                createEngineer();
                break;
            case "Add Intern":
                createIntern();
                break;
            case "Create Profile":
                generateHTML();
            default:
        }
    })
}

generate()