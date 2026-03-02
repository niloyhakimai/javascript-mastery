// control flow statements

// 1. if, else if, else 
// if stop executing the block if the condition is true, else if and else will be ignored
// else if will be checked if the previous if condition is false, else will be executed if all previous conditions are false
// else is optional, it will be executed if all previous conditions are false

// 2. switch case
// switch statement is used to perform different actions based on different conditions
// it is a more efficient way to compare a variable with multiple values
// it is also more readable than multiple if-else statements

// fallthrough behavior of switch case:
let trafficLight = "yellow";

switch(trafficLight){
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Get Ready!");
        // Notice: There is no 'break' here!
    case "green":
        console.log("Go!");
        break;
    default:
        console.log("Invalid traffic light color");
}

// In this example, when trafficLight is "yellow", it will print "Get Ready!" and then continue to execute the next case, which will print "Go!" because there is no 'break' statement after the "yellow" case. This is known as fallthrough behavior in switch statements.




//if-else statement

// junior level nested if-else:
function loginUser(user) {
    if(user !== null) {
        if(user.isActive) {
            console.log("Welcome Admin Dashboard!")
        }else{
            console.log("Welcome User Dashboard!")
        }

    }else{
        console.log("Please Login first!")
    }
}



loginUser({isActive: true}); // Output: Welcome Admin Dashboard!
loginUser({isActive: false});
// Output: Welcome User Dashboard!
loginUser(null); // Output: Please Login first!


function loginUser2(user) {
    // 1. Invalid condition out of the way first!
    if(user === null){
        console.log("Please login first!")
        return; // Function stops here. No need for an 'else' block.
    }

    // 2. Edge case out the way next!
    if(user.isAdmin){
        console.log("Welcome Admin Dashboard!")
        return;
    }

    // 3. The main, clean logic remains at the bottom, un-nested!
    console.log("Welcome User Dashboard!")
}

loginUser2({isAdmin: true}); // Output: Welcome Admin Dashboard!
loginUser2({isAdmin: false});
loginUser2(null); // Output: Please Login first!







function getGrade(score){
    // Early return for Invalid inputs
    if(score < 0 || score > 100 || typeof score !== "number"){
        return "Invalid score ❌";
    }

    // actual logic
    if(score >= 80){
        return "Grade: A 🏆"
    }else if(score >= 70){
        return "Grade: B 👍"
    }else if(score >= 60){
        return "Grade: C 🙂"
    }else {
        return "Grade: F 😞"
    }
}


console.log(getGrade(85)) // Output: Grade: A 🏆
console.log(getGrade(45)) // Output: Grade: F 😞

console.log(getGrade(150)) // Output: Invalid score ❌






function playRPS(player1, player2) {
    // Step 1: Handle Draw (Early Return)
    if (player1 === player2) {
        return "It's a Draw! 🤝";
    }

    // Step 2: Write logic for Player 1 winning
    // Hint: When does player 1 win? (Rock vs Scissors OR Scissors vs Paper OR Paper vs Rock)
    if (
        (player1 === "Rock" && player2 === "scissors") ||
        (player1 === "scissors" && player2 === "Paper") ||
        (player1 === "Paper" && player2 === "rock")
    ) {
        return "Player 1 Wins! 🎉";
    }

    // Step 3: If it's not a draw, and Player 1 didn't win, who wins?
    return "Player 2 Wins! 😎";
}

// Testing the game
console.log(playRPS("Rock", "Scissors")); // Should output: Player 1 Wins!
console.log(playRPS("Paper", "Paper"));   // Should output: It's a Draw!
console.log(playRPS("Rock", "Paper"));    // Should output: Player 2 Wins!