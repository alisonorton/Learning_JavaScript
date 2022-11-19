//Adding user input to the Christmas list

const addButton = document.querySelector(".addButton");
//var listInput = document.getElementById('list').value;
var list = [];

addButton.addEventListener('click', (e) => {
    list.push(document.getElementById('listInput').value);
    displayItem(list);
});

for(let i = 0; i < list.length; i ++){
    console.log(list[i])
}

function displayList(list){
    var ul = document.getElementById('listDisplay');

    for(let i = 0; i < list.length; i++){
        var item = list[i]
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(item));
        ul.appendChild(li);
    }
}

function displayItem(list){
    var ul = document.getElementById('listDisplay');
    var item = list[list.length - 1];
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(item));
    ul.appendChild(li);

}




