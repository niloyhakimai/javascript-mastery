# 🚀 JavaScript Events Deep Guide

**Topic:** DOM Events & Event System  
**Level:** Beginner → Intermediate  
**Status:** ✅ Completed  

---

## 🧠 Mental Model

> "Events are signals that something happened in the browser. You don’t control when they happen — you only listen and react."

Think of events like:
- User actions (click, type, scroll)
- Browser actions (load, resize)
- Custom triggers (your own logic)

---

## 🔍 What is an Event?

An **event** is an interaction or occurrence detected by the browser.

Examples:
- Clicking a button
- Typing on keyboard
- Submitting a form
- Resizing window

To handle events, we use:

```javascript
element.addEventListener("eventName", callbackFunction);
```

---

## 🖱️ 1️⃣ Mouse Events

Mouse events are triggered by user interaction with the mouse.

```javascript
const button = document.getElementById("btn");

// Click Event
button.addEventListener("click", () => {
  console.log("Button Clicked");
});

// Double Click
button.addEventListener("dblclick", () => {
  console.log("Button Double Clicked");
});

// Mouse Over
button.addEventListener("mouseover", () => {
  console.log("Mouse Over Button");
});
```

### 📌 Why it matters:
- Used in UI interactions (buttons, menus, cards)
- Core of user experience (UX)

---

## ⌨️ 2️⃣ Keyboard Events

Triggered when user presses keys.

```javascript
const input = document.getElementById("input");

// Key Down
input.addEventListener("keydown", (e) => {
  console.log("Key Down:", e.key);
});

// Key Up
input.addEventListener("keyup", (e) => {
  console.log("Key Up:", e.key);
});

// Key Press (deprecated)
input.addEventListener("keypress", (e) => {
  console.log("Key Press:", e.key);
});
```

### 📌 Notes:
- `keydown` → when key is pressed
- `keyup` → when key is released
- `keypress` → ❌ deprecated (avoid in modern apps)

### 📌 Use cases:
- Search input
- Shortcuts (Ctrl + S)
- Game controls

---

## 🧾 3️⃣ Form Events

Used for handling form behavior.

```javascript
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Form Submitted");
});

// Input Change
input.addEventListener("change", () => {
  console.log("Input Changed");
});
```

### 📌 Why `preventDefault()`?
- Stops page reload
- Lets you control form submission (API call, validation)

### 📌 Use cases:
- Login/Register forms
- Validation systems
- API requests

---

## 🧠 4️⃣ Event Object Deep Dive

Every event gives you an **event object**.

```javascript
button.addEventListener("click", (event) => {
  console.log("Event Type:", event.type);
  console.log("Target Element:", event.target);
  console.log("Mouse Position:", event.clientX, event.clientY);
});
```

### 📌 Important properties:
- `event.type` → event name
- `event.target` → element that triggered event
- `event.clientX/Y` → mouse position

---

## 🌊 5️⃣ Event Bubbling & Capturing

### 🔹 Bubbling (default behavior)
Event goes from child → parent

```javascript
document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent Clicked");
});

document.getElementById("child").addEventListener("click", (e) => {
  console.log("Child Clicked");

  // Stop bubbling
  e.stopPropagation();
});
```

### 📌 Key concept:
- Without `stopPropagation()` → both child + parent trigger
- With it → only child runs

### 📌 Real-world use:
- Nested components
- Modals, dropdowns

---

## 🌐 6️⃣ Window Events

Triggered by browser window.

```javascript
window.addEventListener("load", () => {
  console.log("Page Fully Loaded");
});

window.addEventListener("resize", () => {
  console.log("Window Resized");
});
```

### 📌 Use cases:
- Responsive UI
- Performance optimization
- Lazy loading

---

## ⚡ 7️⃣ Custom Events (Advanced)

You can create your own events.

```javascript
const customEvent = new Event("myEvent");

document.addEventListener("myEvent", () => {
  console.log("Custom Event Triggered");
});

// Trigger event
document.dispatchEvent(customEvent);
```

### 📌 Why use custom events?
- Communication between components
- Decoupled architecture
- Advanced frontend systems

---

## ⚙️ Best Practices

✅ Always use `addEventListener` (not inline JS)  
✅ Avoid `keypress` (deprecated)  
✅ Use `event.preventDefault()` carefully  
✅ Use `stopPropagation()` only when needed  
✅ Clean up listeners (important in frameworks)

---

## 💡 Real Developer Insight

> Events are the backbone of frontend development.  
> If you master events → you can build:
- Interactive UI
- Games
- Dashboards
- Real-time apps

---

## 🧪 Mini Practice Ideas

- Build a button click counter
- Live search input (keyup)
- Form validation system
- Modal open/close system

---

Built with ❤️ by Niloy (The Automation Guy)