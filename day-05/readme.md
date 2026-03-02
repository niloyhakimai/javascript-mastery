# 🚀 Day 05: Mastering Loops & Data Processing

**Date:** 2026-03-02  
**Topic:** JavaScript Loops (for, while, for...in, for...of)  
**Status:** ✅ Completed  

---

## 🧠 Mental Model

> "Loop is for processing data. It’s not just about repeating an action; it's the core engine for filtering, transforming, and extracting value from mountains of data efficiently."

---

## 🔍 Core Loop Structures

### 1️⃣ The Standard Loops

- **`for` loop:** Used when you know exactly how many times you want to iterate.
- **`while` loop:** Used when you want to iterate as long as a specific condition remains true.
- **`do...while` loop:** Executes the code block at least once before checking the condition.

---

### 2️⃣ Loop Control

- **`break`:** Acts as an emergency exit, completely terminating the loop.
- **`continue`:** Skips the current iteration and immediately moves to the next one.

---

### 3️⃣ Smart Loops for Data Structures

#### 🔹 Arrays

- **`for...of`:** The cleanest way to iterate over the *values* of an iterable (like arrays or strings).
- **`forEach`:** An array method for iteration, but `break` and `continue` do not work inside it.

#### 🔹 Objects

- **`for...in`:** Iterates over the *keys* (property names) of an object.
- **`Object.entries()`:** Converts an object into an array of key-value pairs, making it perfect for `for...of` loops.

---

## 🔪 The Postmortem: `for...in` vs `for...of`

The ultimate confusion cleared up:

- **`for...in`** 👉 Think "**in**dex".  
  It returns the *keys* or *indexes*.  
  Best suited for **Objects**.  
  If used on an array, it returns `0, 1, 2...` instead of the actual data.

- **`for...of`** 👉 Think "values".  
  It returns the actual *data*.  
  Best suited for **Arrays and Strings**.  
  It throws an error if used directly on a standard object because objects are not inherently iterable.

---

## 💻 Practice Output & Solutions

Here are the solutions to today's data processing challenges:

---

## 🧩 Challenge 1: Print Pattern

**Task:** Print a right-angled triangle pattern.

```javascript
// Solution using nested loops
for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "*";
    }
    console.log(row);
}

// Alternative (Pro Move using string repeat)
for (let i = 1; i <= 5; i++) {
    console.log("*".repeat(i));
}
```

---

## 🔁 Challenge 2: Reverse a String

**Task:** Reverse the string `"AUTOMATION"` without using built-in methods.

```javascript
let word = "AUTOMATION";
let reversedWord = "";

// Loop backwards through the string
for (let i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i];
}

console.log(reversedWord); 
// Output: NOITAMOTUA
```

---

## ➕ Challenge 3: Sum of Even Numbers from an Array

**Task:** Find the sum of only the even numbers in `[12, 5, 8, 13, 20, 7]`.

```javascript
let numbers = [12, 5, 8, 13, 20, 7];
let sumOfEvens = 0;

for (let num of numbers) {
    // Check if the number is even using the modulo operator
    if (num % 2 === 0) {
        sumOfEvens += num;
    }
}

console.log("Sum of Even Numbers:", sumOfEvens); 
// Output: 40 (12 + 8 + 20)
```

---

Documenting the journey. Built with ❤️ by Niloy (The Automation Guy)