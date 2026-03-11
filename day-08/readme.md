# 📅 Day-08 — JavaScript Objects (Deep Dive)

## 📌 Overview

Today’s focus was **JavaScript Objects**, one of the most fundamental data structures in JavaScript.
Objects store data as **key-value pairs** and are widely used in APIs, databases, and application state management.

Topics covered:

* Object basics
* Creating objects
* Accessing and modifying properties
* Object methods
* Destructuring
* Spread operator
* Object utility methods (`keys`, `values`, `entries`)
* Object iteration
* Object immutability (`freeze`, `seal`)
* Optional chaining

---

# 1️⃣ Object Basics

An **object** is a collection of key-value pairs.

```javascript
const user = {
  name: "Niloy",
  age: 21,
  country: "Bangladesh"
};
```

Structure

| Key     | Value      |
| ------- | ---------- |
| name    | Niloy      |
| age     | 21         |
| country | Bangladesh |

---

# 2️⃣ Creating Objects

### Object Literal (Most Common)

```javascript
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020
};
```

### Constructor Method

```javascript
const user = new Object();

user.name = "Niloy";
user.age = 21;
```

---

# 3️⃣ Accessing Object Properties

### Dot Notation

```javascript
user.name
```

### Bracket Notation

```javascript
user["age"]
```

Bracket notation is useful when keys are **dynamic**.

```javascript
const key = "name";

user[key]
```

---

# 4️⃣ Modifying Objects

### Update Property

```javascript
user.age = 25;
```

### Add Property

```javascript
user.city = "Dhaka";
```

### Delete Property

```javascript
delete user.age;
```

---

# 5️⃣ Object Methods

Objects can contain functions.

```javascript
const user = {
  name: "Niloy",
  greet(){
    console.log("Hello");
  }
};

user.greet();
```

---

### Using `this`

`this` refers to the **current object**.

```javascript
const user = {
  name: "Niloy",
  greet(){
    console.log("Hello " + this.name);
  }
};

user.greet();
```

---

# 6️⃣ Object Destructuring

Extract properties easily.

```javascript
const user = {
  name: "Niloy",
  age: 21
};

const {name, age} = user;
```

Rename variable

```javascript
const {name: username} = user;
```

---

# 7️⃣ Spread Operator (Objects)

Copy object

```javascript
const user = {
  name: "Niloy",
  age: 21
};

const copy = {...user};
```

Merge objects

```javascript
const user = {name:"Niloy"};
const info = {age:21};

const merged = {...user, ...info};
```

---

# 8️⃣ Object.keys()

Returns **array of keys**.

```javascript
const user = {
  name:"Niloy",
  age:21,
  city:"Dhaka"
};

Object.keys(user);

// ["name","age","city"]
```

---

# 9️⃣ Object.values()

Returns **array of values**.

```javascript
Object.values(user);

// ["Niloy",21,"Dhaka"]
```

---

# 🔟 Object.entries()

Returns **key-value pair arrays**.

```javascript
Object.entries(user);

/*
[
 ["name","Niloy"],
 ["age",21],
 ["city","Dhaka"]
]
*/
```

---

# 1️⃣1️⃣ Iterating Objects

### Using `for...in`

```javascript
const user = {
  name:"Niloy",
  age:21,
  city:"Dhaka"
};

for(let key in user){
  console.log(key, user[key]);
}
```

---

# 1️⃣2️⃣ Object.freeze()

Makes object **immutable**.

```javascript
const user = {
  name:"Niloy"
};

Object.freeze(user);

user.name = "Rahim";
user.age = 25;

console.log(user);
```

Result

```javascript
{ name: "Niloy" }
```

---

# 1️⃣3️⃣ Object.seal()

Allows **modification** but prevents **adding/removing properties**.

```javascript
const user = {
  name:"Niloy",
  age:21
};

Object.seal(user);

user.age = 30;
user.city = "Dhaka";

console.log(user);
```

Result

```javascript
{ name:"Niloy", age:30 }
```

---

# Freeze vs Seal

| Feature         | freeze | seal |
| --------------- | ------ | ---- |
| modify property | ❌      | ✅    |
| add property    | ❌      | ❌    |
| delete property | ❌      | ❌    |

---

# 1️⃣4️⃣ Optional Chaining (`?.`)

Prevents errors when accessing nested properties.

```javascript
const user = {
  profile:{
    name:"Niloy"
  }
};

console.log(user.profile?.name);
```

Safe access:

```javascript
user.address?.city
```

Instead of throwing error, it returns:

```javascript
undefined
```

---

# 🧪 Practice

### Exercise 1

Create object:

```
name
age
city
```

---

### Exercise 2

Print all keys using:

```
Object.keys()
```

---

### Exercise 3

Iterate object using:

```
for...in
```

---

### Exercise 4

Safely access nested property:

```
user.address?.street
```

---

# 📚 Key Takeaways

* Objects store data as **key-value pairs**
* Dot and bracket notation are used to access properties
* Objects can contain **methods**
* `Object.keys/values/entries` help convert objects into arrays
* `freeze` and `seal` control object mutability
* Optional chaining prevents runtime errors

