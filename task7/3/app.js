let input = document.querySelector("#id1")
let butn = document.querySelector("#btn")
butn.addEventListener('click', add)

function add(){
    let val = parseInt(input.value);
    let res = val + 1;
    document.getElementById('result').textContent = `Your next number is: ${res}.`;


}