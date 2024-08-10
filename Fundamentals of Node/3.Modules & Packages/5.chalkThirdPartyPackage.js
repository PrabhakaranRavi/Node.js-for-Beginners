// const chalk  = require('chalk');
// console.log(chalk.blue('Hello world!'));


// const success = chalk.green;
// const error = chalk.red.underline;
// const warning = chalk.yellow;

// console.log(success('Task Done!'));
// console.log(error('Something went wrong!'));
// console.log(warning('Check your code again!'));

// console.log(error('Error occurred!'));


const log = console.log;
const errorBg = chalk.yellow.bgRed;
log(errorBg('Address not found'));