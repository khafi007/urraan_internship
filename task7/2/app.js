let input= document.querySelector("#i1")
let btn = document.querySelector("#btn")
btn.addEventListener('click', convert)

function convert (){
    let hour = parseFloat(input.value)
    let result = hour * 60 * 60
    console.log(result);
    document.querySelector("#res").textContent = `Hours in seconds: ${result} `
}