//document.getElementById("count-el").innerText=5;

//chaleenge 1
// let firstBatch = 5;
// let secondBatch = 7;
// let count = firstBatch + secondBatch;
// console.log(count);


//challenge 2
// let myAge = 22;
// //1 human year = 7 dog year
// let humandogRatio = 7;
// let dogAge = myAge * humandogRatio;
// console.log(dogAge);

//chalenge 3
// let bonousPoints = 50;
// console.log(bonousPoints);
// bonousPoints = bonousPoints + 50;
// console.log(bonousPoints);
// bonousPoints = bonousPoints - 75;
// console.log(bonousPoints);
// bonousPoints = bonousPoints + 45 ;
// console.log(bonousPoints);

// challenge 4
// let count = 5;
// count = count + 1;
//  console.log(count);

//challenge 5
// function countdown() {
//     console.log(5);
//     console.log(4);
//     console.log(3);
//     console.log(2);
//     console.log(1);
// }
// //setting up the race - - -
// countdown();
// //Go !
// //Players are running the race - - -
// //Race is finifshed!
// //Get ready for the new race - - -
// countdown();


//challenge 6
// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;
// //Create a function that logs out the sum of all the lap times
// function logLapTime () { 
//     let totalTime = lap1 + lap2 + lap3;
//     console.log(totalTime);
// }
// logLapTime()

//challenge 7
// let lapsCompleted = 0;
// //Create a function that increment the lapsCompleted variable with one
// //Runit three times
// function logLapCount () {
//     lapsCompleted = lapsCompleted + 1;
// }
// logLapCount();
// logLapCount();
// logLapCount();
// console.log(lapsCompleted);

//Challenge 8
// let username = "per";
// //Crate a variable, message, that stores the string: "You Have three new notifications"
// let message = "You Have three new notifications";
// console.log(username + ", " + message + "!");
// //Crate a variable, mesageToUser, that contains the message we have logged
// let meassageToUser = username + ", " + message + "!";
// console.log(meassageToUser);


//Challenge 9
// Create two variables, name and greeting. The name variable should store your name,
// and the greeting should store e.g. "Hi, my name is "
// Create a third variable, myGreeting, that contatenates the two strings
// Log myGreeting to the console
// let name = "Rohit";
// let greeting = "Hi, my name is ";
// let myGreeting = greeting + name;
// console.log(myGreeting);

//Challenge 10
// let points = 4
// let bonusPoints = "10"
// let totalPoints = points + bonusPoints
// console.log(4 + 5) // 9
// console.log("2" + "4")//24
// console.log("5" + 1)//51
// console.log(100 + "100")//100100

// //Challenge 11
// // Grab the welcome-el paragraph and store it in a variable called welcomeEl
// let welcomeEl = document.getElementById("welcome-el");
// // Create two variables (name & greeting) that contains your name
// // and the greeting we want to render on the page
// let name = "Rohit";
// let greeting = "Welcome back ";
// // Render the welcome message using welcomeEl.innerText
// welcomeEl.innerText = greeting + name;

//Challenge 12
// let welcomeEl = document.getElementById("welcome-el");
// let name = "Rohit";
// let greeting = "Welcome back ";
// welcomeEl.innerText = greeting + name;
// // Add an emoji to the end! 👋
// // WRITE YOUR CODE BELOW HERE
// // HINT: count = count + 1
// welcomeEl.innerText += "👋";

//initialize the count as 0
//listen for clicks on the increment button
// increment the count variable when the button is clicked
//change the counet-el in the html to reflect the new count

let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;

document.getElementById("increment-btn").addEventListener("click", function() {
    count++;
    countEl.textContent = count;
});

document.getElementById("save-btn").addEventListener("click", function() {
    saveEl.textContent += count + " - ";
    count = 0;
    countEl.textContent = count;
});
