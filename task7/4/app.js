let input = document.querySelector("#in1")
let butn = document.querySelector("#btn")
butn.addEventListener('click', titleCase)

function titleCase() {
    let str = input.value;
    let splitStr = str.toLowerCase().split(' ');
    
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }

    document.getElementById('res').textContent = `Your name is: ${splitStr.join(" ")}`;

     
 }