console.log("beta");
const foo = () => { console.log("Foo")}
const bar = () => { console.log("Bar")}
 module.exports = {
    foo: foo,
    bar: bar
 };

 console.log(exports = module.exports);