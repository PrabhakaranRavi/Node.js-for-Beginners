//To See the Core modules 

console.log(require('module').builtinModules);









/**
 * There are three types of modules/packages in Node.js:

A. Custom modules/packages: These modules/packages are created and defined by the user; there is no need to install a custom module. However, you need to use the require function to import a custom module by giving its path to start using it. 

B. Third-party modules/packages: These modules/packages are provided by Node Package Manager; they have already been created by someone else for you. You are required to install a third-party module via NPM and import it via the require function while giving the name of the module as the ID to start using it.

C. Core modules: These modules are provided by Node by default; you do not need to define them. Also, these are not required to be installed prior to their usage. You can just use the require function to import a core module to start using it.
Examples: buffer, os, events, http, https, module, path, url, fs, v8, etc.
 
You can see the list of all core modules using the following statement:

console.log(require('module').builtinModules);
 

fs is a core module standing for file-system. This module provides the local file system management capability to Node.js, which is one of the factors that differentiates Node (server-side JavaScript) from client-side JavaScript. 

 
 */