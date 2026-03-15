# 🌐 The DOM (Document Object Model) — Notes

## ✅ Teach

---

## 1️⃣ DOM Tree Structure

The DOM is structured like a **tree**.

It contains different types of nodes:

- **Node**
- **Element**
- **Text**
- **Comment**

Example structure:

```html
<html>
  <body>
    <h1>Hello</h1>
    <p>Welcome</p>
  </body>
</html>
```

DOM Tree:

```
Document
 └── html
      └── body
           ├── h1
           │    └── "Hello"
           └── p
                └── "Welcome"
```

---

## 2️⃣ Selecting Elements

JavaScript provides multiple ways to select DOM elements.

```javascript
document.getElementById("title")

document.getElementsByClassName("card")

document.querySelector(".btn")

document.querySelectorAll(".item")
```

### Explanation

- **getElementById()** → Selects element by ID  
- **getElementsByClassName()** → Selects elements by class  
- **querySelector()** → Returns the **first matching element**  
- **querySelectorAll()** → Returns **all matching elements**

---

## 3️⃣ Text / Content Access

### innerText
Gets the **visible text** of an element.

```javascript
element.innerText
```

### textContent
Gets **all text inside the element**, including hidden text.

```javascript
element.textContent
```

### innerHTML
Gets or sets **HTML content inside the element**.

```javascript
element.innerHTML
```

Example:

```javascript
element.innerHTML = "<b>Hello</b>"
```

---

## 4️⃣ Attribute Manipulation

JavaScript can read or modify HTML attributes.

```javascript
element.getAttribute("href")

element.setAttribute("href", "https://example.com")

element.removeAttribute("disabled")
```

### Explanation

- **getAttribute()** → Gets the value of an attribute  
- **setAttribute()** → Adds or updates an attribute  
- **removeAttribute()** → Removes an attribute  

---

## 5️⃣ Dynamic DOM Manipulation

You can create or modify elements dynamically.

```javascript
const div = document.createElement("div")

parent.appendChild(div)

parent.removeChild(div)

parent.prepend(div)
```

### Explanation

- **createElement()** → Creates a new HTML element  
- **appendChild()** → Adds element at the **end** of a parent  
- **removeChild()** → Removes a child element  
- **prepend()** → Adds element at the **beginning** of a parent  

---

## 6️⃣ Style Updates

### Direct Style Manipulation

```javascript
element.style.color = "red"
element.style.backgroundColor = "black"
```

### Using classList

```javascript
element.classList.add("active")

element.classList.remove("active")

element.classList.toggle("dark")
```

### Explanation

- **add()** → Adds a class  
- **remove()** → Removes a class  
- **toggle()** → Switches class **on/off**

---

## ⚠️ Common Confusions

### Difference between:

- **innerText** → Only visible text  
- **textContent** → All text inside element  
- **innerHTML** → HTML + text inside element  

### Live vs Static Collections

- **HTMLCollection** → Live (updates automatically)  
- **NodeList** → Static (does not auto-update)

Example:

```javascript
document.getElementsByClassName("item") // HTMLCollection

document.querySelectorAll(".item") // NodeList
```

---

## 🧠 Mindset

> The DOM is the **page’s brain** — use it responsibly.
> Manipulate it carefully to keep performance and structure clean.