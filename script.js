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
