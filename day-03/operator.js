// Operator - Arithmetic Operators
// +, -, *, /, % (modulus), ** (exponentiation)

// Operator - Assignment Operators
// =, +=, -=, *=, /=, %=, **=

// Operator - Comparison Operators
// ==, ===, !=, !==, >, <, >=, <=

// Operator - Logical Operators
// && (logical AND), || (logical OR), ! (logical NOT)

// Operator - Bitwise Operators
// &, |, ^, ~, <<, >>, >>>

// unary operator
// ++ (increment), -- (decrement), + (unary plus), - (unary negation)

// Operator - Ternary Operator
// condition ? expressionIfTrue : expressionIfFalse

// typeof vs instanceof
// typeof: returns a string indicating the type of the operand
// instanceof: checks if an object is an instance of a specific class or constructor function   

let result = false || (true && false) || true;
// console.log(result);
let m = 10;
let n = m++ + ++m;
// console.log(n);
let x = 5;
let y = ++x - x--;
// console.log(x);


// modulo Operator (%) 
let isEven = (25 % 2 === 0)
// console.log(isEven)


// assignment shortcut (+=, -=, *=, /=, %=, **=)
let greeting = "Hello";
greeting +=  " Niloy";
// console.log(greeting) // output: Hello Niloy 


let age = 21;
let status;
if(age >= 18) {
    status = "Adult";
}else {
    status = "Minor";
}

// using ternary operator
let age2 = 21;
let status2 = (age2 >= 18) ? "Adult" : "Minor";
// console.log(status2)


// typeof vs instanceof
let list = [1,2,3];
// console.log(typeof list);
// console.log(list instanceof Array);



// task -
let time = 15;
let isWeekend = false;

// Challenge Line:
let action = (time >= 9 && time <= 17 && !isWeekend) ? "Work Time" : "Chill Time";

console.log(action)

