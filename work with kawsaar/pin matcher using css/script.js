const generatePinBtn = document.getElementById("generatePinBtn");
generatePinBtn.addEventListener("click", () => {
    const randomPin = Math.floor((Math.random() * 9000) + 1000);
    document.getElementById("generatedPinField").value = randomPin;
})
function numPad(value) {
    document.getElementById("pinInputField").value = pinInputField.value + value;
}
function clearDis() {
    document.getElementById("pinInputField").value = "";
}
function backspace() {
    document.getElementById("pinInputField").value = document.getElementById("pinInputField").value.slice(0, document.getElementById("pinInputField").value.length - 1);
}
function pinSubmit() {
    if (generatedPinField.value == pinInputField.value) {
        alert("Pin Matched");
    }
    else {
        let totalTry = document.getElementById("totalTry").innerText;
        let tryLeft =parseInt(totalTry) - 1;
        document.getElementById("totalTry").innerText = tryLeft;
        if (tryLeft <1) {
            document.getElementById("tryMsg").innerText = "No more try left";
            document.getElementById("tryMsg").style.color="red"
           let submitBtn =  document.getElementById("submitBtn");
           submitBtn.disabled = true;
           submitBtn.classList.add("disBtn")
            
        }
    }

}
