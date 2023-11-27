var id = 0;
var rangeValue = 16;
function range() {
    rangeValue = document.getElementById("myRange").value;
    document.getElementById("demo").innerHTML = "User Input: " + rangeValue + " x " + rangeValue;
  }

function createBox(element) {
    var div = document.createElement("div");
    div.id = 'box';
    div.style.height = "32px";
    div.style.width = "32px";
    div.style.flex = "1";
    div.addEventListener("mouseover", function(){
        div.style.backgroundColor = "black";
    });
    element.append(div);
}

function createRow(main){
    var div = document.createElement("div");
    div.id = 'row' + row++;
    main.append(div);
    return div;
}

const maindiv = document.querySelector(".main");

for (i = 0; i < rangeValue; i++){ //each row
    var row = createRow(maindiv);
    for (b = 0; b < rangeValue; b++){ //each column
        createBox(row);
    }
}
