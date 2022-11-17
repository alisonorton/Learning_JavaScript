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


const gridContainer = document.querySelector(".grid");

gridContainer.addEventListener("mouseenter", () => {
    gridContainer.style.outline = "6px solid red";
  
});

gridContainer.addEventListener("mouseleave", () => {
    gridContainer.style.outline = "";
  
});

const cell = document.querySelectorAll(".cell");

cell.forEach((cell) =>{
    cell.addEventListener("mouseenter", () => {
        cell.style.outline = "2px solid green";
    });

    cell.addEventListener("mouseleave", () => {
        cell.style.outline = "";
    });

    cell.addEventListener("click", () => {
        cell.style.backgroundColor = "blue";
    })
}) 