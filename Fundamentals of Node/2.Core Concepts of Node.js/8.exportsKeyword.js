

const foo = () => {
    console.log("alpha");
}

const bar = () => {
    console.log("beta");
}

module.exports = {
    foo: foo,
    bar: bar
};

console.log(exports = module.exports);

//  exports.x =100;

module.exports = {
    Y: 200
}
console.log(exports = module.exports);

console.log(exports);

exports = { a: 100 };

console.log(exports);


/**
 * When a property is changed in an object, which points to (references) another object, the change is reflected in the pointed (referenced) object. The exports variable points to the module.exports object. Thus, if you make a change in a property using the exports variable, the change is reflected in the module.exports object.
 */


/**
 * When an object pointing to (referencing) another object is assigned a new value (object), then the changes are not reflected in the pointed (referenced) object. When the exports variable is assigned a value, which is a new object, the module.exports object is not changed, i.e., it remains as it was.
 */

/**
 * In the last video, you learnt the following facts:

 

1. The exports keyword is a shortcut to using module.exports.

 

2. exports is a variable that references the module.exports object.

 

3. Before the code in a module is evaluated, the exports variable is assigned the reference to the module.exports.

 

4. At the end of each module, module.exports is returned. Thus, the require function in some other module loads the object returned by the module.exports keyword.

 

5. Objects in JavaScript are passed by reference.
 */


