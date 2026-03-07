// function (Declaration, Expression, Arrow)

// function declaration:
sayHello(); // hoisting
function sayHello(){
    // console.log("hello automation guy")
}


// function expression:

// sayHi() // Error: Cannot access 'sayHi' before initialization
const sayHi = function() {
    // console.log("hi")
}


// Arrow Function (() => {}):ES6
const add = (a, b) => a + b; // Implicit return (no 'return' keyword needed for single lines)


// (Params vs Args & More)
// Parameters:
// Variables declared in a function definition. They act as placeholders to receive values.

// Arguments:
// The actual data (values) passed to a function when it is called.

// Default Parameters:
// Predefined values assigned to parameters in case no argument is provided.

// Rest (...):
// Used in function parameters to collect multiple arguments into a single array.

// Spread (...):
// Used while calling a function (or working with arrays/objects) to expand elements into individual values.


// 'tax' is a default parameter. '... items' is a rest parameter 
function calculateCard(tax = 0.15, ...items) {
    // console.log("Tax:", tax)
    // console.log("Items Array:", items)
}

const myCart = [100, 200, 300]
// Using spread operator to unpack the array into individual arguments
calculateCard(0.10, ...myCart);


// first class & HOF
// HOF example
function multiplier(factor) {
    // returning a function!
    return function(number) {
        return number * factor
    }
}

const double = multiplier(2);
// console.log(double(5))

// Pure vs Impure Functions

// Pure Function:
// A function that always returns the same output for the same input and does not modify any external variables or state (no side effects).
// Pure functions are ideal for transforming API data because they are predictable and testable.

// Impure Function:
// A function that modifies external data, depends on global variables, or produces side effects.

// 🔪 Postmortem Section (The Deep End & Common Confusions)
// 1. Lexical Scoping & Closures (The Memory Holder)

// Lexical Scope:
// A function can access variables defined in its outer (parent) scope.

// Closure:
// When a function is returned from another function, it still remembers the variables from its original scope (its “birthplace”).
// This behavior is called a closure.
// Closures are commonly used to create private data and maintain state.

// 2. Arrow vs Regular Function: this Context

// This is where many developers get confused.

// Regular Function:
// Its this value depends on how the function is called. This is known as dynamic this.

// Arrow Function:
// It does not have its own this. Instead, it inherits this from its surrounding (lexical) scope. This is known as lexical this.

// 3. IIFE (Immediately Invoked Function Expression)

// A function that runs immediately after it is defined.

// It is commonly used to:

// Isolate variables

// Prevent global scope pollution

// Create a private execution context


(function() {
    let privateSecret = "No one can access me outside!";
    // console.log("IIFE ran!");
})();





// function calculateBMI(weight, height) {
//     // 1. Early Return for bad inputs (Validation)
//     if (weight <= 0 || height <= 0 || typeof weight !== "number" || typeof height !== "number") {
//         return "Invalid input! Weight and height must be positive numbers.";
//     }

//     // 2. Calculate BMI here (use the formula)
//     let bmi = ???;

//     // 3. Return the exact category based on the bmi value
//     if (bmi < 18.5) {
//         return "Underweight";
//     }
//     // Add the remaining conditions using early returns...
    
// }

// console.log(calculateBMI(65, 1.75)); // Expected: "Normal"
// console.log(calculateBMI(-10, 1.75)); // Expected: "Invalid input!..."



// challenge 2:  reusable Discount Calculator (Higher-Order Function)

// HOF: Takes the discount percentage and returns a function
const createDiscountCalculator = (discountPercentage) => {
    return(price) => {
        const discountAmount = price * (discountPercentage / 100);
        return price - discountAmount;
    };
};


// Create specific calculators
const summerSale = createDiscountCalculator(20); // 20% discount
const winterSale = createDiscountCalculator(15); // 15% discount 

// console.log(summerSale(1000)); // Output: 800
// console.log(winterSale(1000)) // Output: 850



const createTaxCalculator = (taxPercentage) => {
    return(amount) => {
        const taxAmount = amount * (taxPercentage / 100);
        return amount + taxAmount;
    }
}

const restaurentVat = createTaxCalculator(15)
const shopTax = createTaxCalculator(5)

// console.log(restaurentVat(1000))
// console.log(shopTax(1000))


// building a counter using closure

const createCounter = () => {
    let count = 0; // Private variable (memory held by closure)

    return () => {
        count ++; // Modifying the private variable
        return count;
    };
};

const clickCounter = createCounter();
console.log(clickCounter()) // Output: 1
console.log(clickCounter()) // Output: 2
console.log(clickCounter()) // ...3
console.log(clickCounter()) // ...4
console.log(clickCounter()) // ...5