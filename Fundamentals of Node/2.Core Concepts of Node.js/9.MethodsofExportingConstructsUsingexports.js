// circle Module (Method 1):

const PI = 3.14;

const calculateArea = r => PI * r * r;
const calculateCircumference = r => 2 * PI * r;

// using individual exports statement to export each construct one by one
// exports.calculateArea = calculateArea;
// exports.calculateCircumference = calculateCircumference;

// circle Module (Method 2):

// using exports statement while defining a function
exports.calculateArea = r => PI * r * r;
exports.calculateCircumference = r => 2 * PI * r;

// circle Module (Method 3):

// const PI = 3.14;

// const calculateArea = r => PI * r * r;
// const calculateCircumference = r => 2 * PI * r;

// // using single exports statement to export all constructs at once
// exports = {
//    calculateArea: calculateArea,
//    calculateCircumference: calculateCircumference
// }

// // fixing the reference by assigning object inside exports to module.exports
// module.exports = exports;

