const toggle1 = document.getElementById("toggle1");
const toggle2 = document.getElementById("toggle2");
const toggle3 = document.getElementById("toggle3");

toggle1.onclick = function(){
    toggle1.classList.toggle('active')
    if(toggle1.classList.contains('active')){
    document.querySelector(".p1").innerHTML = "ON";
    }
    else{
        document.querySelector(".p1").innerHTML = "OFF";

    }

}
toggle2.onclick = function(){
    toggle2.classList.toggle('active')
    if(toggle2.classList.contains('active')){
        document.querySelector(".p2").innerHTML = "ON";
        }
        else{
            document.querySelector(".p2").innerHTML = "OFF";
    
        }

}
toggle3.onclick = function(){
    toggle3.classList.toggle('active')
    if(toggle3.classList.contains('active')){
        document.querySelector(".p3").innerHTML = "ON";
        }
        else{
            document.querySelector(".p3").innerHTML = "OFF";
    
        }
}