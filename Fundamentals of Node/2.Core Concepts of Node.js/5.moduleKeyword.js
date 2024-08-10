/**
 * 1. Modules: Each file in Node.js is referred to as a module.

 

2. Before executing the code written in a module, Node.js takes the code written in the module and converts it into a function wrapper, which has the following syntax:

(function(exports, require, module, __filename, __dirname) {

   // Module code actually lives in here

});
 

3. The function wrapper ensures that all the code written inside a module is private to it unless explicitly stated otherwise (exported). The parameters exports, require, module, __filename, and __dirname act as the variables global to the entire code in a module. Since each module has its own function wrapper, the code written inside one function wrapper becomes local to that module and is not accessible inside another function wrapper (read module). 

 

4. The module keyword refers to the object representing the current module and has a property called exports. module.exports is another object that is used for defining what is exported by a module, which can be made available to other modules. In short, if a file wants to export something, it has to declare it using the module.export syntax.
 */




/**
 * Module - object representing the current module
 * Exports - defines exported constructs (property of module)
 * module.exports - empty object by default { }
 */

const PI = 3.14;
const calculateArea = r => PI * r * r;
const calculateCircumference = r => 2 * PI * r;

module.exports.calculateArea = calculateArea;
module.exports.calculateCircumference = calculateCircumference;

/**
 * Let's now look at how to export variables and functions from a module using the exports property of the module object
 */
// module.exports['calculateArea'] = calculateArea;
// module.exports['calculateCircumference'] = calculateCircumference;

module.exports.LifePI = PI;
