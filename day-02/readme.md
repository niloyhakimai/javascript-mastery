# 🚀 Day 02: Deep Dive into Data Types & Type System

**Date:** 2026-02-27  
**Topic:** JavaScript Fundamentals (Types, Coercion, Equality)  
**Status:** ✅ Completed  

---

## 🧠 Mental Model

> "Think about types like expected input/output. If an API expects a Number but gets a String, things will break. Mastering types is the key to solid API validation, form handling, and state checks."

---

## 🔍 Core Concepts

JavaScript data types are broadly divided into two categories: **Primitives (Pass by Value)** and **Reference Types (Pass by Reference)**.

---

## 1️⃣ Primitive vs Reference Types

### 🔹 Primitives
- `String`
- `Number`
- `Boolean`
- `Undefined`
- `Null`
- `Symbol`
- `BigInt`

They store a single, simple value.

### 🔹 Reference Types
- `Object`
- `Array`
- `Function`

They store a reference (memory address) to the actual value in memory.

---

## 2️⃣ The `typeof` Quirks & Postmortem

JavaScript has some historical quirks and strange behaviors when checking types:

```javascript
// The famous historical bug
console.log(typeof null); 
// Output: "object"

// NaN stands for "Not-A-Number", but its type is number
console.log(typeof NaN); 
// Output: "number"
```

### Why?

- `null` returning `"object"` is a legacy bug from early JavaScript implementation.
- `NaN` is the result of an invalid mathematical operation. Since it's a math result, its type remains a `number`.

---

## 3️⃣ Type Coercion: The Tricky Part

JavaScript tries to be smart and dynamically converts types behind the scenes.

### ➕ The `+` Operator (Prefers Strings – Concatenation)

```javascript
console.log("5" + 1); 
// Output: "51"
```

### ➖ ➗ ✖ Operators (Prefer Numbers – Math)

```javascript
console.log("5" - 1); 
// Output: 4
```

---

## 4️⃣ Equality: `==` vs `===`

✅ Always use strict equality (`===`) in modern JavaScript.

### 🔹 `==` (Loose Equality)
- Checks only value
- Forces type coercion

### 🔹 `===` (Strict Equality)
- Checks both value AND type
- No type coercion

```javascript
console.log(5 == "5");  
// Output: true

console.log(5 === "5"); 
// Output: false
```

---

## 5️⃣ Truthy vs Falsy Values

In JavaScript, everything is considered `true` in a boolean context EXCEPT for these 6 falsy values:

- `false`
- `0`
- `""` (Empty string)
- `null`
- `undefined`
- `NaN`

---

## 💻 Practice Output Analysis

Here are the results of today's type coercion practice:

```javascript
console.log(true + false); 
// Output: 1 (true is coerced to 1, false to 0. 1 + 0 = 1)

console.log(null + 1);     
// Output: 1 (null is coerced to 0. 0 + 1 = 1)

console.log(5 + "5");      
// Output: "55" (Number is coerced to String, then concatenated)

console.log(!!undefined);  
// Output: false (undefined is falsy, '!' makes it true, the second '!' makes it false)
```

---

Built with ❤️ by Niloy (The Automation Guy)