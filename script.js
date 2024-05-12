let values = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz", "1234567890", `~"!@#$%^&*()_+-={[}]\|;:.></?,"`];
let count = 0;
let btn = document.querySelector(".btn");
let length = document.querySelector("input[type = 'number']");
let inputs = document.querySelectorAll("input[type = 'checkbox']");
let clipboard = document.querySelector(".clipboard");

btn.addEventListener("click", () => {
    document.querySelector(".random-password").innerText = generatePassword();
});

clipboard.addEventListener("click", () => {
    if (document.querySelector(".random-password").innerText.length != 0) {
        navigator.clipboard.writeText(document.querySelector(".random-password").innerText);
        alert("Password copied to clipboard.");
    }
});

let getRandomIdx = length => (Math.floor(Math.random() * length));

function generatePassword() {
    let randomPassword = "";
    while (randomPassword.length < Number(length.value)) {
        let count = 0;
        for (let i = 0; i < inputs.length; i++) {
            if (randomPassword.length < Number(length.value)) {
                if (inputs[i].checked == true) {
                    randomPassword += values[i][getRandomIdx(values[i].length)];
                }
                else {
                    count++;
                }
            }
        }
        if (count == 4) {
            return randomPassword;
        }
    }
    return randomPassword;
}