const TextFeild = document.getElementById("text");
const Btn = document.getElementById("btn");
const parentList = document.getElementById("parentList");

Btn.addEventListener("click" , addTodo);
function addTodo(){
    let TextVal = TextFeild.value;

    let newLi = document.createElement("li");
    newLi.innerHTML = `<h3>${TextVal}</h3>
    <input type="button" value="Remove" id="removeBtn" onclick="remove(this)">`;
    parentList.appendChild(newLi);
    
}

const removeBtn = document.getElementById("removeBtn");

function remove(currElement){
    currElement.parentElement.remove();
}

