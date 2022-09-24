//grab increment, decrement and save
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const saveBtn = document.getElementById("save");
//grab prev-repeats
const prevRepeats = document.getElementById("prev-repeats");
//initialise count to 0
let count = 0
//create increment function
function increment() {
    //increment count by 1
    count++
    console.log(count)
}

//create click event on increment button and assign increment function

//create decrement function
function decrement() {
    //decrement count by 1
    if (count > 0) {
        count--
    }
    console.log(count)
}


//create click event on increment button and assign increment function