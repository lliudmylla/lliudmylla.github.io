var array = [];
for (var i = 0; i < 20; i++) {
    array.push(Math.floor(Math.random() * 100));
}
array.sort(function(a, b) {
    return a - b;
});
var arrayOutput = document.createElement("p");
arrayOutput.innerHTML = "Відсортований масив: " + array.join(", ");
document.body.appendChild(arrayOutput);

var select = document.createElement("select");
select.innerHTML = `
    <option value="25">25px</option>
    <option value="45">45px</option>
    <option value="65">65px</option>
`;
document.body.appendChild(select);

var generateButton = document.createElement("button");
generateButton.innerHTML = "Згенерувати";
document.body.appendChild(generateButton);

generateButton.addEventListener("click", function() {
    var div = document.createElement("div");
    div.style.backgroundColor = "blue";
    div.style.width = "30px";
    div.style.height = select.value + "px";
    document.body.appendChild(div);

    var leftButton = document.createElement("button");
    leftButton.innerHTML = "Посунути вліво";
    document.body.appendChild(leftButton);

    var rightButton = document.createElement("button");
    rightButton.innerHTML = "Посунути вправо";
    document.body.appendChild(rightButton);

  var divPosition = 0;

leftButton.addEventListener("click", function() {
    divPosition -= 20;
    div.style.right = divPosition + "px";
});

rightButton.addEventListener("click", function() {
    divPosition += 20;
    div.style.right = divPosition + "px";
});

});
