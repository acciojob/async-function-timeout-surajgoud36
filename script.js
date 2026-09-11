//your JS code here. If required.
const text = document.getElementById("text");
const delay = document.getElementById("delay");
const button = document.getElementById("btn");
const output = document.getElementById("output");

button.addEventListener("click",async()=>{
    let textVal = text.value;
    let delayVal = Number(delay.value);
    let outputMessage = await displayMessage(textVal,delayVal);
    output.textContent=outputMessage;
})

function displayMessage(message,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(message);
        },delay)
    })
}