var id = 0;
function createBox(element) {
    var div = document.createElement("div");
    div.id = 'box';
    div.style.width = "25px";
    div.style.height = "25px";
    div.style.borderStyle = "solid";
    div.style.borderWidth = "2px";
    div.style.flex = "1";
    div.addEventListener("click", function(){
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

for (i = 0; i < 16; i++){ //each row
    var row = createRow(maindiv);
    for (b = 0; b < 16; b++){ //each column
        createBox(row);
    }
}
