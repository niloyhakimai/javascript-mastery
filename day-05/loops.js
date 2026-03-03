// 1. The Basic Loops (for, while, do-while)

// for loop
for(let i = 0; i < 5; i++){
    // console.log("Processing item:", i)
}

// while loop
let count = 0;
while(count < 3) {
    // console.log("Still running...");
    count++;
}

// do-while loop


// loop control (break vs continue)
// break (Emergency Exit):
// continue (Skip & Move On):


for(let i = 1; i <= 5; i++) {
    if(i === 3) continue;
    if(i === 5) break;
    // console.log(i)
}

// Loop for Arrays & Objects    
//  for Arrays for...of 
let tools =  ["puppeteer", "Selenium", "Playwright"];
for(let tool of tools) {
    // console.log(tool)
}

// Loop for objects 
// for objects for...in
let user = {name: "Niloy", role: "Web Dev"}
for(let key in user) {
    // console.log(key, ":", user[key] )
}

// Object.entries() (Pro Move)
for (let [key, value] of Object.entries(user)) {
    // console.log(`${key} is ${value}`);
}

// modern methods (forEach & Object.entries)
// forEach for Arrays
let numbers = [10, 20, 30];
numbers.forEach(function(num) {
    // console.log("Number is: " + num)
})







// Outer loop for rows (Line 1 to 5)
for(let i = 1; i <=5; i++){

    // Create an empty string to hold the stars for the current row
    let rowStars = ""

    // Inner loop for columns (Add stars based on the row number 'i')
   for(let j = 1; j <= i; j++){
        rowStars += "*"
   }
    // Print the fully built row
    console.log(rowStars)
   }




// Manager loop: Start from 5, go down to 1 (i--)
for(let i = 5; i >= 1; i--) {

    // Create an empty string for the current row
    let rowStars = "";

    // Worker loop: Still goes from 1 to whatever the manager says (i)
    for(let j = 1; j <= i; j++) {
        rowStars += "*";
    }

    // Print the row
    // console.log(rowStars);
}