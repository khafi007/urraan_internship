function calculateSum() {
    var input1 = document.getElementById("input1").value;
    var input2 = document.getElementById("input2").value;
    
    if (input1 === "" || input2 === "") {
        document.getElementById("result").value = "NaN";
    } else {
        var sum = parseInt(input1) + parseInt(input2);
        document.getElementById("result").value = sum;
    }
}

document.getElementById("result").value = "NaN";