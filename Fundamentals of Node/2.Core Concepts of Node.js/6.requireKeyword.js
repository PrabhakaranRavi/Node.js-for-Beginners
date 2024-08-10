const circle = require(`./5.moduleKeyword.js`);
const circleTwo = require('./7.Other Methods of Exporting Using module.exports.js')

console.log(circle);

const area = circle.calculateArea(3);
const circumference = circle.calculateCircumference(3);

console.log(`${area} and ${circumference}`);

// if you want import the Variable::
console.log(circle.LifePI);


console.log(circleTwo);

circleTwo.setRowHeight()





/**
 * In this segment, you learnt the following:

1. The require keyword refers to a function that is used to import all the variables and functions exported using module.exports in another module. In short, if a file wants to import something, it has to declare it using the following syntax:

require('file')
 

2. A path can be represented in two formats: absolute path and relative path. An absolute path is an exact path followed, whereas a relative path is a path relative to the current file. An absolute path is optionally prepended with a forward slash (/), whereas a relative path is prepended with a dot (.).
 

3. While exporting something from a module, you can use any valid identifier. It is not mandatory to match the name of the variable/function while exporting it.

 

So far, you have learnt two keywords: module, which is an object, and require, which is a function. In the next segment, you will learn some interesting facts related to these two keywords. You will learn how you can export and import modules in different ways.
 */