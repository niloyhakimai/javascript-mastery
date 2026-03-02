// 1. Variable Declarations in JavaScript

// var, let, const: Line-by-line Comparative Overview

// Understanding the differences between these three ways of declaring variables in JavaScript is very important.

// var (The Old School):
// It has existed since the beginning of JavaScript. It is very flexible, but this flexibility often leads to bugs.

// let (The Modern Standard):
// It was introduced in ES6 (2015). Use it when you need a variable whose value may change in the future (reassignment).

// const (The Strict Standard):
// It was also introduced in ES6. Use it when you want the variable’s value to never change. By default, you should always try to use const.

// Example of:

// var: Can be reassined and redeclared. It is function-scoped, which can lead to unexpected behavior.
var name = "Niloy";

var name = "The Automation Guy";
name = "AI Engineer";
console.log(name); // Output: "AI Engineer"

// let: Can be reassigned but cannot be redeclared in the same scope. It is block-scoped, which helps prevent bugs.
let age = 21;
// let age = 22; // This will throw an error because 'age' has already been declared in the same scope.
age = 22; 

// const: Cannot be reassigned or redeclared. It is also block-scoped. It is used for values that should not change.
const country = "Bangladesh";
//const country = "BD"; // This will throw an error because 'country' has already been declared.
//country = "BD"; // This will throw an error because 'country' is a constant and cannot be reassigned.


// Scope Differences:
if(true){
    var  leakedVar = "I am out";
    let securedLet = "I am locked inside"
}
// console.log(leakedVar) Output: "I am out" (because var is function-scoped, not block-scoped)
// console.log(securedLet) This will throw an error because securedLet is block-scoped and cannot be accessed outside the if block.



// Objects declared with const can have their properties changed, but the variable itself cannot be reassigned to a new object.
const user = {
    name: "Niloy",
    role: "Web Dev"
};

// changing property is ALLOWED
user.role = "Applied AI Engineer";
// console.log(user.role);  Output: "Applied AI Engineer"

// Reassigning the whole object is NOT ALLOWED
// user = { name: "Niloy", role: "AI Engineer" }; // This will throw an error because 'user' is a constant and cannot be reassigned.


// Practice Task:
let counter = 0;
console.log(counter)
for(let i = 0; i < 3; i++){
    let loopvar = "Inside Loop";
    counter++;
    console.log(loopvar)
    console.log(counter)
   
}
console.log(counter)
// console.log(loopvar) // This will throw an error because 'loopvar' is block-scoped and cannot be accessed outside the for loop.