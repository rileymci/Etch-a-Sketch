var id = 0;
var rangeValue = 16;
var boxHeight = "32px";
var boxWidth = "32px";

var rainbow = false;


function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    return bgColor = "rgb(" + x + "," + y + "," + z + ")";

}

function clearBox(){
    var child = maindiv.lastElementChild;
    while(child) {
        maindiv.removeChild(child);
        child = maindiv.lastElementChild;
    }
    createGrid();
}

function createGrid() {

    var HWcalc = 512 / rangeValue;
    boxHeight = HWcalc.toString() + "px";
    boxWidth = HWcalc.toString() + "px";

    for (i = 0; i < rangeValue; i++){ //each row
        var row = createRow(maindiv);
        for (b = 0; b < rangeValue; b++){ //each column
            createBox(row, boxHeight, boxWidth);
        }
    }
}

function rainbowMode(){
    var list = maindiv.children;
    console.log(list);
}

function createBox(element, Height, Width) {
    var div = document.createElement("div");
    div.id = 'box';
    div.style.height = Height;
    div.style.width = Width;
    div.style.flex = "1";
    div.addEventListener("mouseover", function(){
        if(rainbow){
            div.style.backgroundColor = random_bg_color();
        }
        else{
            div.style.backgroundColor = "black";
        }

    });
    element.append(div);
}

function createRow(main){
    var div = document.createElement("div");
    div.id = 'row' + row++;
    main.append(div);
    return div;
}

const button1 = document.querySelector('#rainbowBtn');
const button2 = document.querySelector('#blackBtn');
const button3 = document.querySelector('#clearBtn');
    
    button1.addEventListener('click', () => {
        rainbow = true;
        button1.style.color = "green";
        button2.style.color = "black";
    });
    button2.addEventListener('click', () => {
        rainbow = false;
        button2.style.color = "green";
        button1.style.color = "black";
    });
    button3.addEventListener('click', () => {
        clearBox();
    });


const maindiv = document.querySelector(".main");

document.getElementById("myRange").oninput = (e) => {
    rangeValue = parseInt(e.target.value);
    document.getElementById("inputSize").innerText = rangeValue + " x " + rangeValue;
}

for (i = 0; i < rangeValue; i++){ //each row
    var row = createRow(maindiv);
    for (b = 0; b < rangeValue; b++){ //each column
        createBox(row, boxHeight, boxWidth);
    }
}

rainbowMode();