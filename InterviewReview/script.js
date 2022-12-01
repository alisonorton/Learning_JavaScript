
const button = document.getElementById("button");
const main = document.querySelector("main");
const displayDivs = document.getElementById("display")

function display(num){
    for(let i = 1; i <= num; i++){
        console.log("in the loop " + i);
        let circle = document.createElement("div")
        circle.classList.add("circle")
        let num = document.createElement("p")
        num.textContent = i
        circle.appendChild(num)
        displayDivs.appendChild(circle)

    }
}


button.addEventListener('click', () => {
    let input = parseInt(document.getElementById("input").value);
    console.log(input);
    display(input);
});