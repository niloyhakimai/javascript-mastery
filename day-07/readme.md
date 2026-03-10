# Day-07 — JavaScript Arrays Deep Dive

## Overview

Today’s focus was **JavaScript Arrays** and the most commonly used **array manipulation and transformation methods** used in real-world development.

Topics covered:

* Array basics (create, access, modify)
* Mutating array methods
* `splice()` vs `slice()`
* Iteration & transformation methods
* Key differences (`map` vs `forEach`)
* Core concepts developers must understand for interviews and real projects

---

# 1. Array Basics

## Create Array

```javascript
const fruits = ["apple", "banana", "mango"];
```

Alternative (rarely used):

```javascript
const fruits = new Array("apple", "banana", "mango");
```

---

## Access Array Elements

Arrays use **zero-based indexing**.

```javascript
const fruits = ["apple", "banana", "mango"];

console.log(fruits[0]); 
// apple
```

Get last element:

```javascript
fruits[fruits.length - 1]
```

---

## Modify Array

```javascript
const fruits = ["apple", "banana", "mango"];

fruits[1] = "orange";

console.log(fruits);
// ["apple","orange","mango"]
```

---

# 2. Mutating Array Methods

These **change the original array**.

---

## push()

Adds element **to the end**.

```javascript
const arr = [1,2];

arr.push(3);

console.log(arr);
// [1,2,3]
```

Returns **new length**.

---

## pop()

Removes **last element**.

```javascript
const arr = [1,2,3];

arr.pop();

console.log(arr);
// [1,2]
```

Returns **removed element**.

---

## shift()

Removes **first element**.

```javascript
const arr = [10,20,30];

arr.shift();

console.log(arr);
// [20,30]
```

---

## unshift()

Adds element **to beginning**.

```javascript
const arr = [2,3];

arr.unshift(1);

console.log(arr);
// [1,2,3]
```

---

### Performance Insight

| Method  | Operation    | Speed  |
| ------- | ------------ | ------ |
| push    | end add      | fast   |
| pop     | end remove   | fast   |
| shift   | start remove | slower |
| unshift | start add    | slower |

Reason: **reindexing occurs at start operations**.

---

# 3. splice() vs slice()

This is one of the **most confusing JavaScript topics**.

| Method | Mutates Array | Purpose            |
| ------ | ------------- | ------------------ |
| splice | Yes           | add/remove/replace |
| slice  | No            | copy/extract       |

---

## splice()

Changes original array.

Syntax:

```javascript
array.splice(start, deleteCount, newItems)
```

### Delete Example

```javascript
const arr = [10,20,30,40];

arr.splice(1,2);

console.log(arr);
// [10,40]
```

---

### Insert Example

```javascript
const arr = [1,2,5];

arr.splice(2,0,3,4);

// [1,2,3,4,5]
```

---

### Replace Example

```javascript
const arr = [1,2,3];

arr.splice(1,1,100);

// [1,100,3]
```

---

## slice()

Creates **new array copy**.

```javascript
const arr = [10,20,30,40];

const result = arr.slice(1,3);

console.log(result);
// [20,30]
```

Original array remains unchanged.

---

### Negative Index

```javascript
const arr = [1,2,3,4];

arr.slice(-2);

// [3,4]
```

---

# 4. Array Iteration Methods

Modern JavaScript heavily relies on these.

---

## map()

Transforms array → returns new array.

```javascript
const numbers = [1,2,3];

const result = numbers.map(n => n * 2);

// [2,4,6]
```

Used for **data transformation**.

---

## forEach()

Used for **side effects**.

```javascript
numbers.forEach(n => {
 console.log(n)
})
```

Returns:

```
undefined
```

---

## map vs forEach

| Feature       | map            | forEach      |
| ------------- | -------------- | ------------ |
| returns array | yes            | no           |
| chainable     | yes            | no           |
| use case      | transformation | side effects |

---

## filter()

Returns elements that match condition.

```javascript
const numbers = [1,2,3,4,5];

const even = numbers.filter(n => n % 2 === 0);

// [2,4]
```

---

## find()

Returns **first matching element**.

```javascript
const numbers = [5,10,15,20];

numbers.find(n => n > 10);

// 15
```

---

## some()

Checks if **at least one element matches condition**.

```javascript
[1,3,5,6].some(n => n % 2 === 0);

// true
```

---

## every()

Checks if **all elements match condition**.

```javascript
[2,4,6].every(n => n % 2 === 0);

// true
```

---

## reduce()

Transforms array → **single value**.

Syntax:

```javascript
array.reduce((acc, current) => {}, initialValue)
```

Example:

```javascript
const numbers = [1,2,3,4];

const sum = numbers.reduce((acc,n)=>acc+n,0);

// 10
```

---

### Real Example (Cart Total)

```javascript
const cart = [
 {price:100},
 {price:200},
 {price:50}
];

const total = cart.reduce((sum,item)=>sum+item.price,0);

// 350
```

---

# Summary

| Method  | Purpose      |
| ------- | ------------ |
| push    | add end      |
| pop     | remove end   |
| shift   | remove start |
| unshift | add start    |
| splice  | modify array |
| slice   | copy array   |
| map     | transform    |
| forEach | iterate      |
| filter  | select       |
| find    | first match  |
| some    | any match    |
| every   | all match    |
| reduce  | combine      |

---

# Next Topics (Day-08)

* `reverse()`
* `sort()` deep dive
* `sort()` without compareFn problem
* Array destructuring
* Spread operator (`...`)
* Advanced array patterns
