// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================
var inquirer = require('inquirer');

inquirer.prompt([
    {
        type: 'input',
        message: "What is your name?",
        name: 'name'
    },
    {
        type: 'list',
        message: "What is your element?",
        choices: ['earth', 'wind', 'fire', 'water'],
        name: 'element'
    },
    {
        type: 'checkbox',
        message: 'Pick one',
        choices: ['a', 'b', 'c'],
        name: 'check'
    },
    {
        type: 'password',
        message: 'Enter a password',
        name: 'password'
    },
    {
        type: 'confirm',
        message: 'We are done.',
        default: true,
        name: 'confirm'
    },
]).then(function (user) {
    console.log(JSON.stringify(user, null, 2));

    console.log(user.name);
    console.log(user.element);
    console.log(user.check);
    console.log(user.password);
    console.log(user.confirm);

    if (user.password == '12345') {
        console.log('You guessed the password!');
    }
});