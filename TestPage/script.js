//Adding user input to the Christmas list

const addButton = document.getElementById("addButton");
const displayButton = document.getElementById("displayButton");
const displayList = document.getElementById("listDisplay");

var list = [];

//Displaying the list
addButton.addEventListener('click', () => {
    const item = document.getElementById('listInput').value
    list.push(item);
    const input = document.getElementById("listInput");
    input.value = "";
});

displayButton.addEventListener('click', () => {
   // if(list.length >= 1){
        displayItem(list);
    //}
    
    
})


//Function to display list items

function displayItem(list){
    for(let i = 0; i < list.length; i++){
        let item = document.createElement("div");
        item.classList.add("item");
        let text = document.createElement("p");
        item.textContent = list[i];
        
        item.appendChild(text);
        displayList.appendChild(item);
    }
}

const backgroundMusic = document.querySelector(".musicBtn");

backgroundMusic.addEventListener('click', () => {
    playPause();
})

function playPause(){
    const audio = document.querySelector(".background_music");
    if(audio.paused){
        audio.play();        
    }
    else{
        audio.pause();
    }
}




