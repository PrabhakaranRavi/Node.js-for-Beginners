/**
 * Summary
In this session, you learned about:

REPL, which stands for Read, Evaluate, Print and Loop. You saw that the code which you wrote was removed from the memory heap when you exited the REPL. To overcome this problem you created files and started writing your codes inside of these files.

JavaScript runtime environment has different components namely - Memory Heap, Execution/Call Stack, Web APIs Container, Callback Queue, and Event Loop.

There are two types of I/O model- blocking and non-blocking and JavaScript being a single-threaded language can't afford to have a blocking I/O model and hence it uses the non-blocking I/O model.

Before executing the code written in a module, Node takes the code written in the module and converts it into a function wrapper. Function wrapper has different parameters namely- exports, require, module, __filename, __dirname.

By using the exports property of module object, you can export the constructs declared in one module. There are three ways to do so:

By writing individual module.exports statements for each construct to be exported.
By writing a single module.exports statement and assign all the constructs to be exported as key-value pairs.

By writing module.exports statement along with the declaration of function such that the function name becomes the key and the function definition becomes the value.

Using the require keyword, you can import all the constructs which you had exported in some other module. The require keyword takes in an argument which can be an id or a path.

The keyword exports act as a shortcut to module.exports. You can also export constructs using exports. You also learned that objects in JavaScript are passed by reference.

The keyword __filename returns the filename of the current module including the absolute path of the module file. 

The keyword __dirname returns all the directories in the hierarchical order in which the current module file resides

 */

const foo = () => {
    console.log("alpha");
 }
 
 const bar = () => {
    console.log("beta");
 }
 
 module.exports = { // statement 1
    foo: foo,
    bar: bar
 };
 
 exports.foo = bar; // statement 2
 
 console.log(module.exports);
 console.log(exports);