let values = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz","1234567890", `~"!@#$%^&*()_+-={[}]\|;:.></?,"`];
let count = 0;
let btn = document.querySelector("button");
let length = document.querySelector("input[type = 'number']");
let inputs = document.querySelectorAll("input[type = 'checkbox']");

btn.addEventListener("click", () => {
    document.querySelector(".random-password").innerText = generatePassword();
})

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
                else{
                    count++;
                }
            }
        }
        if(count == 4){
            return randomPassword;
        }
    }
    return randomPassword;
}