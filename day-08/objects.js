// Object = key-value pair collection
{
 key: value
}
//Example:
const user = {
 name: "Niloy",
 age: 21,
 country: "Bangladesh"
};

// Object Create
const car = {
 brand: "Toyota",
 model: "Corolla",
 year: 2020
};

// Method 2
const user2 = new Object();

user.name = "Niloy";
user.age = 21;

// Object Property Access
// Dot notation (Most common)
const user = {
 name: "Niloy",
 age: 21
};

// console.log(user.name); //Output: Niloy
// console.log(user["age"]); // Output: 21

// Important Difference
// Bracket notation
const key = "name";

// console.log(user[key]);

// Object Modify
const user = {
 name: "Niloy",
 age: 21
};

user.age = 25;

// console.log(user); // Result:  { name: "Niloy", age: 25 }

// New Property Add
const user = {
 name: "Niloy"
};

user.country = "Bangladesh";

// Property Delete
const user = {
 name: "Niloy",
 age: 21
};

delete user.age;

// Object Methods
const user = {
 name: "Niloy",
 greet: function(){
   console.log("Hello");
 }
};

user.greet();

// Modern Syntax
const user = {
 name: "Niloy",
 greet(){
//    console.log("Hello");
 }
};

// this keyword
const user = {
 name: "Niloy",
 greet(){
//    console.log("Hello " + this.name);
 }
};

user.greet();

// Object Destructuring

const user = {
 name: "Niloy",
 age: 21
};

const {name, age} = user;

// Spread Operator (Objects)
const user = {
 name: "Niloy",
 age: 21
};

const copy = {...user};

// Object merge
const user = {name:"Niloy"};
const info = {age:21};

const merged = {...user,...info};

/*
⚠️ Important Concept

Object reference type

*/

const obj1 = {a:1};
const obj2 = obj1;

obj2.a = 100;

// console.log(obj1.a); // Output: 100

// Object.keys()
// Example:
const user = {
 name: "Niloy",
 age: 21,
 country: "Bangladesh"
};

// console.log(Object.keys(user));

// Real Dev Use
const user = {
 name: "Niloy",
 age: 21,
 city: "Dhaka"
};

Object.keys(user).forEach(key=>{
//  console.log(key);
});

// Object.values()
const user = {
 name:"Niloy",
 age:21,
 country:"Bangladesh"
};

// console.log(Object.values(user));


// Object.entries()
const user = {
 name:"Niloy",
 age:21
};

// console.log(Object.entries(user));

// Powerful Use Case
const user = {
 name:"Niloy",
 age:21
};

Object.entries(user).forEach(([key,value])=>{
//  console.log(key,value);
});


/*
Quick           Comparison
Method	           Result
Object.keys        keys array
Object.values	   values array
Object.entries	   key-value pairs

*/

// for...in Loop
const user = {
 name:"Niloy",
 age:21,
 city:"Dhaka"
};

for(let key in user){
//  console.log(key);
}

//Object.freeze()
const user = {
 name:"Niloy"
};

Object.freeze(user);

user.name = "Rahim";
user.age = 25;

// console.log(user);

// Object.seal()
const user = {
 name:"Niloy",
 age:21
};

Object.seal(user);

user.age = 30;
user.city = "Dhaka";

// console.log(user);

// Optional Chaining ?.
const user = {
 profile:{
   name:"Niloy"
 }
};

// console.log(user.profile.name);

// Deep Access
user.profile?.name
// Real API Example
const apiData = {
 user:{
   profile:{
     name:"Niloy"
   }
 }
};

// console.log(apiData.user?.profile?.name);