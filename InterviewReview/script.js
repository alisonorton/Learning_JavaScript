
const button = document.getElementById("button");
const main = document.querySelector("main");


let number = "";

function display(num){
    for(let i = 1; i <= num; i++){
        console.log("in the loop " + i);
        number += `<div>${i}</div>`;
    }
}

display(9)

button.addEventListener('click', () => {
    let input = parseInt(document.getElementById("input").value);
    console.log(input);
    display(input);
});

document.getElementById("display").innerHTML = number;