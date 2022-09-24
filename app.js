//grab increment, decrement and save
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const saveBtn = document.getElementById("save");
//grab repeats
const repeats = document.getElementById("repeats")
//grab prev-repeats
const prevRepeats = document.getElementById("prev-repeats");
//initialise count to 0
let count = 0
//create increment function
function increment() {
    //increment count by 1
    count++
    //get repeats element to display current count value
    repeats.textContent = count
}

//create click event on increment button and assign increment function

//create decrement function
function decrement() {
    //decrement count by 1 unless count===0
    if (count > 0) {
        count--
    }
    //get repeats element to display current count value
    repeats.textContent = count
}

//create click event on decrement button and assign decrement function

//create save function 
function save() {
    //add current count value to prevRepeats textContent
    prevRepeats.textContent += count + " | "
    //reset count to 0
    count = 0
    //reset repeats textContent to 0
    repeats.textContent = 0
}

//create click event on save button and assign save function

//create reset function
function reset() {
    //set prevRepeats textContent to 'Previous repeats:'
    prevRepeats.textContent = "Previous repeats:" + " "
}




