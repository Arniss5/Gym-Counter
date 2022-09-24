//grab repeats
const repeats = document.getElementById("repeats")
//grab prev-repeats
const prevRepeats = document.getElementById("prev-repeats");

//initialise count to 0
let count = 0
//initialise prevRepeats.textContent as localStorage gymSession
prevRepeats.textContent = localStorage.getItem('gymSession')

//INCREMENT
function increment() {
    //increment count by 1
    count++
    //get repeats element to display current count value
    repeats.textContent = count
}

//create click event on increment button and assign increment function

//DECREMENT
function decrement() {
    //decrement count by 1 unless count===0
    if (count > 0) {
        count--
    }
    //get repeats element to display current count value
    repeats.textContent = count
}

//create click event on decrement button and assign decrement function

//SAVE
function save() {
    //add current count value to prevRepeats textContent
    prevRepeats.textContent += count + " | "
    //save prevRepeats.textContent to local storage
    localStorage.setItem("gymSession", prevRepeats.textContent)
    //reset count to 0
    count = 0
    //reset repeats textContent to 0
    repeats.textContent = 0
}

//create click event on save button and assign save function

//RESET
function reset() {
    //set prevRepeats textContent to 'Previous repeats:'
    prevRepeats.textContent = "Previous repeats:" + " "
    //save prevRepeats.textContent to local storage
    localStorage.setItem("gymSession", prevRepeats.textContent)
}




