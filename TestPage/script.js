//Adding user input to the Christmas list

const addButton = document.querySelector(".addButton");
//var listInput = document.getElementById('list').value;
var list = [];

//Displaying the list
addButton.addEventListener('click', (e) => {
    list.push(document.getElementById('listInput').value);
    displayItem(list);
});

for(let i = 0; i < list.length; i ++){
    console.log(list[i])
}
//Function to display list items

function displayItem(list){
    var ul = document.getElementById('listDisplay');
    var item = list[list.length - 1];
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(item));
    ul.appendChild(li);

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




