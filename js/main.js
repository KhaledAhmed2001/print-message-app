// get elements into
let btnEl = document.querySelector("button")
let inputEl = document.querySelector("input")
let msgEl = document.querySelector("p")

// events
// btnEl.addEventListener('click', x )
// function x(){
//     var inputValue =inputEl.value
//     msgEl.innerHTML = inputValue
//     inputEl.value = ''

// }



btnEl.onclick = ()=>{

    // get value from input
    var inputValue =inputEl.value

if (inputValue !== "" ) {
    
    
    // put input value into P
    msgEl.innerHTML = inputValue
    
    
    // empty input value
    inputEl.value = ''
}
}