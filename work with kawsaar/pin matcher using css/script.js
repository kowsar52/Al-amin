// const generatePinBtn = document.getElementsById("generateBtn");
// generatePinBtn.addEventListener("click", function(){
//     const randomPin = Math.floor((Math.random()*9000)+1000);
//     document.getElementsByClassName("pin_field").value = randomPin;
// })
const generatePinBtn = document.getElementById("generatePinBtn");
generatePinBtn.addEventListener("click",()=>{
    const randomPin = Math.floor((Math.random()*9000)+1000);
    document.getElementById("generatedPinField").value = randomPin;
})
// const man = document.getElementById("numBtn");
// man.addEventListener("click", ()=>{
//     let val = document.getElementById("numBtn").innerText;
//     document.getElementById("pinInputField").value = val;
// })

// let allNumBtns = document.getElementsByClassName('numbtn');
// for(i=0; i < allNumBtns.length ; i++){
//     console.log(allNumBtns[i]);
// }

function numPad(value){
document.getElementById("pinInputField").value = pinInputField.value + value;
}
function clearDis(){
    document.getElementById("pinInputField").value = "";
}
function backspace(){
    document.getElementById("pinInputField").value = document.getElementById("pinInputField").value.slice(0,document.getElementById("pinInputField").value.length -1);
}
