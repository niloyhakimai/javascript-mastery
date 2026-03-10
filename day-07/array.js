// Array Create 
// Method 1 [most common]
const numbers = [10, 20, 30];


// method 2 
const fruits = new Array("apple", "banana", "mango");


// mixed array
const data = [
    "Niloy",
    21,
    true,
    {country: "Bangladesh"},
];


// Array access 
const fruits1 = ["appple", "banana", "mango"];
// console.log(fruits[0]);

// last element access

const fruits3 = ["appple", "banana", "mango"];

// console.log(fruits3[fruits3.length-1]) // mango


// Array modify 

 const fruits4 = ["appple", "banana", "mango"];

 fruits4[1] = "orange"
//  console.log(fruits4)

// important concept 
const arr1 = [1, 2, 3];
const arr2 = arr1;

arr2[0] = 100;
// console.log(arr1) same memory reference

const cart = ["laptop", "mouse"];
cart[1] = "keyboard";

// console.log(cart)

const colors = ["red", "green", "blue"];



const fr1 = ["apple", "banana"]
fr1.push("mango");

// console.log(fr1) // output: ["apple", "banana", "mango"]

// memory concept 

// before 
    // index   value
    // 0       apple
    // 1       banana

// After push
    // index   value
    // 0       apple
    // 1       banana
    // 2       mango

// important

// push() new length return 
const arr5 = [1,2];
const result = arr5.push(3)
//  console.log(result) // 3


// Multiple push
const arr = [1];

arr.push(2,3,4);
// console.log(arr) // [1,2,3,4]

//  pop() 
// remove the last element
const fruits4 = ["apple", "banana", "mango"];

fruits.pop();

// console.log(fruits); //Output : ["apple", "banana"]




// Real Developer Use Case 

const stack = [];

stack.push("task1");
stack.push("task2");

stack.pop();
// Last In
// First Out

// shift() remove the first element
const fruits6 = ["apple", "banana", "mango"];

fruits.shift();

// console.log(fruits); // Output: ["banana", "mango"]

// unshift()

const fruits7 = ["banana", "mango"];

fruits.unshift("apple");

// console.log(fruits);


// Practice

// Predict output:


const arr9 = [1,2,3];

arr.push(4);
arr.pop();

// console.log(arr);

const arr32 = [10,20];

arr.unshift(5);
arr.shift();

// console.log(arr);


const arrr4 = [1];

// console.log(arr.push(2));



// splice()
const a2rr = [10,20,30,40];

arr.splice(1,2);

// console.log(arr);

// Insert
const arr3 = [1,2,5];

arr.splice(2,0,3,4);

// console.log(arr);3

// Replace
const arr7 = [1,2,3];

arr.splice(1,1,100);

// console.log(arr);

// Important Behavior
const arrr = [1,2,3];

const removed = arr.splice(1,1);

// console.log(removed);

// slice()
const arr33 = [10,20,30,40];

const result4 = arr.slice(1,3);

// console.log(result);

// Common Use Case

// Copy array
const arrrr = [1,2,3];

const copy = arr.slice();

// Partial copy
const ar44r = [1,2,3,4,5];

const part = arr.slice(2);

// Negative Index (Important)
const arr55 = [1,2,3,4];

arr.slice(-2);


// Real Developer Use Case
// Pagination
const users = [1,2,3,4,5,6,7,8];

const page = users.slice(0,5);




// map()
const number3s = [1,2,3];

const res3ult = numbers.map(num => num * 2);

// console.log(result); // Output : [2,4,6]

// Visualization 
// [1,2,3]

// map

// num * 2

// ↓

// [2,4,6]

// Real Developer Example
// API data transform
const userrs = [
 {name:"Niloy",age:20},
 {name:"Rahim",age:25}
]

const names = users.map(user => user.name) // Result: ["Niloy","Rahim"]

// forEach()
// Syntax
array.forEach(callback)
// Example
const numbsers = [1,2,3];

numbers.forEach(num => {
//  console.log(num)
})
// Output : 
    /*  1
        2
        3
    */

// Important 
const results = numbers.forEach(num => num*2)
// Output : undefined



/*
 map vs forEach (Most Confusing)

Feature	          map	        forEach
return value	new array	   undefined
purpose	      transform data   side effects
chainable	    ✅	                ❌             

*/


// filter()
const number32s = [1,2,3,4,5]

const even = numbers.filter(n => n % 2 === 0)

// console.log(even)

// Visualization
/*
[1,2,3,4,5]

n % 2 === 0

↓

[2,4]

*/



// find()

const numbedrs = [5,10,15,20]

const resdult = numbers.find(n => n > 10)

// console.log(result)

// some()
const numbfers = [1,3,5,6]

const refsult = numbers.some(n => n % 2 === 0)

// console.log(result)


// every()
const numdbers = [2,4,6]

const resudlt = numbers.every(n => n % 2 === 0)

// console.log(result)d


// reduce() (Most Powerful)
const numberxs = [1,2,3,4]

const sum = numbers.reduce((acc,n)=>acc+n,0)

// console.log(sum)



/*
Summary Table
Method	Purpose
map	transform
forEach	iterate
filter	select
find	first match
some	any match
every	all match
reduce	combine

*/