// typeof null === 'object'
// console.log(typeof null)

// In JavaScript, null is a primitive value that represents the intentional absence of any object value. It is often used to indicate that a variable should not point to any object or that an object property does not exist. However, due to a historical bug in JavaScript, the typeof operator returns "object" when applied to null. This is a well-known quirk of the language and can lead to confusion for developers who are new to JavaScript.
function processData(data) {
    if(data !== null && typeof data === 'object'){
        // console.log("Processing object: " + data.name)
    }else{
        // console.log("Please send an object")
    }
}

processData({name: "John"})

processData(null)


// In JavaScript, primitive types (like numbers, strings, booleans, null, undefined) are copied by value. When you assign a primitive value to a variable, it creates a copy of that value. So when you do b = a, b gets a copy of the value of a. Therefore, when you change the value of b, it does not affect the value of a because they are stored separately in memory.
let a = 10;
let b = a;
b = 20;

// console.log(a)

// In JavaScript, objects are reference types. When you assign an object to a variable, you are assigning a reference to that object in memory. So when you do obj2 = obj1, both obj1 and obj2 point to the same object in memory. Therefore, when you change a property of obj2, it also changes the same property of obj1 because they reference the same object.
let obj1 = {name: "Automation guy"};
let obj2 = obj1;

obj2.name = "AI Engineer";

// console.log(obj1.name)
// 
let result = "Apple" / 2;
// console.log(result)

// console.log(typeof result) // Output: "number" (Because NaN is of type number)
let result2 = +"5" + 1
// console.log(result2)
let result3 = "5" - 1
// console.log(result3)

// console.log(5 == "5") // Output: true
// console.log(0 == false) // Output: true (Because false is treated as 0)

// console.log(5 === "5") // Output: false (Number is not equal to String)
// console.log(0 === false) // Output: false (Number is not equal to Boolean)


// In JavaScript, the following values are considered falsy:
// 1. false

// 2. 0 

// 3. "" 

// 4. null

// 5. undefined

// 6. NaN (Not a Number)




// Falsy values in JavaScript: false, 0, "", null, undefined, NaN
let userName = "";
if(userName){
    console.log("We have a user!"); 
}else {
    console.log("no user found.") // Output: "No user found." (Because "" is falsy)
}

// Truthy values in JavaScript: Any value that is not falsy is truthy. Examples include: "0", "false", [], {}, function(){}, etc.
let fakeZero = "0";
if(fakeZero){
    console.log("It is truthy!") // Output: "It is truthy!" (Because a string with anything inside is truthy)
}
