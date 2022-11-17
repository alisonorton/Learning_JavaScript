/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */

/*const li = ul.querySelector(".grid");
li.addEventListener('click',(event) => {
    console.log(event)
}*/
//Function to generate random color
const randColor = () => {
    let hexNum = Math.floor(Math.random() * 16777215).toString(16);
    return hexNum;
};

//Adding red outline when mouse is on grid
const gridContainer = document.querySelector(".grid");

gridContainer.addEventListener("mouseenter", () => {
    gridContainer.style.outline = "6px solid red";
  
});

gridContainer.addEventListener("mouseleave", () => {
    gridContainer.style.outline = "";
  
});


const cell = document.querySelectorAll(".cell");

cell.forEach((cell) =>{
    //Adding outline when mouse is hovering over cell
    cell.addEventListener("mouseenter", () => {
        cell.style.outline = "2px solid green";
    });

    cell.addEventListener("mouseleave", () => {
        cell.style.outline = "";
    });
    //Generating random color when a cell is clicked
    cell.addEventListener("click", () => {
        if(cell.style.backgroundColor) {
            cell.style.backgroundColor = "";
            console.log("NO color");
        }
        else {
            cell.style.backgroundColor = `#${randColor()}`;
            console.log("Printed color");
        }
        
    })
}) 

//Changing background color when spacebar is pressed
const body = document.body;

body.addEventListener("keydown", (e) => {
    let highLighted = false;


    if(e.code === "Space"){
        if (body.style.backgroundColor){
            body.style.backgroundColor = ""
        }
        else {
            body.style.backgroundColor = "grey"
        }
        
    }
})

//Reset button
const button = document.querySelector(".button");

button.addEventListener("click", () =>{
    cell.forEach((cell) =>{
        if (cell.style.backgroundColor){
            cell.style.backgroundColor = "";
        }
    })
        body.style.backgroundColor = ""
    
})
