const doubleIt = num => num * 2; // arrow function single parameter
const add = (x, y) => x + y; // double parameter
const give5 = () => 5; // without parameter

const doubleIt2 = num => num * 2; // arrow function single parameter
const add2 = (x, y) => x + y; // double parameter
const give6 = () => 6; // without parameter


const double2 = doubleIt2(5);
const addNum = add2(5,9);
const singleNum = give6();


const double = doubleIt(5);
const adding = add(4, 8);
const fiveS = give5();

console.log(double);
console.log(adding);
console.log(fiveS);