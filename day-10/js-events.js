// ===============================
// 📌 JavaScript Events Deep Guide
// ===============================

// 👉 1. Mouse Events

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

// ===============================
// 👉 2. Keyboard Events

const input = document.getElementById("input");

// Key Down
input.addEventListener("keydown", (e) => {
  console.log("Key Down:", e.key);
});

// Key Up
input.addEventListener("keyup", (e) => {
  console.log("Key Up:", e.key);
});

// Key Press (deprecated but used sometimes)
input.addEventListener("keypress", (e) => {
  console.log("Key Press:", e.key);
});

// ===============================
// 👉 3. Form Events

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent page reload
  console.log("Form Submitted");
});

// Input Change
input.addEventListener("change", () => {
  console.log("Input Changed");
});

// ===============================
// 👉 4. Event Object Deep Dive

button.addEventListener("click", (event) => {
  console.log("Event Type:", event.type);
  console.log("Target Element:", event.target);
  console.log("Mouse Position:", event.clientX, event.clientY);
});

// ===============================
// 👉 5. Event Bubbling & Capturing

document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent Clicked");
});

document.getElementById("child").addEventListener("click", (e) => {
  console.log("Child Clicked");

  // Stop bubbling
  e.stopPropagation();
});

// ===============================
// 👉 6. Window Events

window.addEventListener("load", () => {
  console.log("Page Fully Loaded");
});

window.addEventListener("resize", () => {
  console.log("Window Resized");
});

// ===============================
// 👉 7. Custom Event (Advanced)

const customEvent = new Event("myEvent");

document.addEventListener("myEvent", () => {
  console.log("Custom Event Triggered");
});

// Trigger custom event
document.dispatchEvent(customEvent);