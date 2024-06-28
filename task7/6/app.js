function generateAndPick() {
    var randomArray = [];
    for (var i = 0; i < 10; i++) {
        randomArray.push(Math.floor(Math.random() * 100));
    }

    var firstElement = randomArray[0];
    var lastElement = randomArray[randomArray.length - 1];

    document.getElementById("arrayDisplay").innerText = "Generated Array: [" + randomArray.join(", ") + "]";
    document.getElementById("pickedElements").innerText = "First Element: " + firstElement + ", Last Element: " + lastElement;
}