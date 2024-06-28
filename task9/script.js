let inputBox = document.querySelector("#input-box")
let list = document.querySelector("#list-container")

function addtask(){
    if(inputBox.value === ""){
            alert("you must write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    inputBox.value = "";
    saveData();
}

list.addEventListener('click', function(e){
    if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", list.innerHTML);
}

function showtask(){
    list.innerHTML = localStorage.getItem("data");
}
showtask();
