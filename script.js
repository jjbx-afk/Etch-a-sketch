// creating the title and center it 


let title = document.createElement("div");
document.body.appendChild(title);

title.textContent = "Etch a sketch";

title.style.textAlign = "center";
title.style.marginBlock = "8%"
title.style.color = "#eec0c8";
title.style.fontFamily = "Inter,sans-serif";
title.style.textDecoration = "underline";




// buttons to choose the size of the grids 


//Container for buttons 


let containerButton = document.createElement("div");
document.body.appendChild(containerButton);
containerButton.style.textAlign = "center";
containerButton.style.display = "flex";
containerButton.style.gap = "3%";
containerButton.style.justifyContent = "center";



//4x4

const four = document.createElement("button");
four.textContent = "4x4";
four.classList.add("button");
containerButton.appendChild(four);

//8x8

const eight = document.createElement("button");
eight.textContent = "8x8";
eight.classList.add("button");
containerButton.appendChild(eight);

//12x12

const twelve = document.createElement("button");
twelve.textContent = "12x12";
twelve.classList.add("button");
containerButton.appendChild(twelve);

//16x16

const sixteen = document.createElement("button");
sixteen.textContent = "16x16";
sixteen.classList.add("button");
containerButton.appendChild(sixteen);

//Trash can
const trash = document.createElement("button");
trash.textContent = "🗑️";
trash.classList.add("button");
containerButton.appendChild(trash);



// event listener to make the button work 

four.addEventListener("click", btnFour);
eight.addEventListener("click", btnEight);
twelve.addEventListener("click", btnTwelve);
sixteen.addEventListener("click", btnSixteen);


// button class style
four.style.alignItems = "enter";
four.style.backgroundColor = "#fee6e3";
four.style.borderRadius = "8px";
four.style.cursor = "pointer";
four.style.fontFamily = "Inter,sans-serif";
four.style.fontSize = "10px";
four.style.height = "28px";
four.style.justifyContent = "center";
four.style.maxWidth = "100%";
four.style.padding = "0 25px";
four.style.position = "relative";
four.style.textAlign = "center";
four.style.textDecoration = "none";

eight.style.alignItems = "enter";
eight.style.backgroundColor = "#fee6e3";
eight.style.borderRadius = "8px";
eight.style.cursor = "pointer";
eight.style.fontFamily = "Inter,sans-serif";
eight.style.fontSize = "10px";
eight.style.height = "28px";
eight.style.justifyContent = "center";
eight.style.maxWidth = "100%";
eight.style.padding = "0 25px";
eight.style.position = "relative";
eight.style.textAlign = "center";
eight.style.textDecoration = "none";

twelve.style.alignItems = "enter";
twelve.style.backgroundColor = "#fee6e3";
twelve.style.borderRadius = "8px";
twelve.style.cursor = "pointer";
twelve.style.fontFamily = "Inter,sans-serif";
twelve.style.fontSize = "10px";
twelve.style.height = "28px";
twelve.style.justifyContent = "center";
twelve.style.maxWidth = "100%";
twelve.style.padding = "0 25px";
twelve.style.position = "relative";
twelve.style.textAlign = "center";
twelve.style.textDecoration = "none";

sixteen.style.alignItems = "enter";
sixteen.style.backgroundColor = "#fee6e3";
sixteen.style.borderRadius = "8px";
sixteen.style.cursor = "pointer";
sixteen.style.fontFamily = "Inter,sans-serif";
sixteen.style.fontSize = "10px";
sixteen.style.height = "28px";
sixteen.style.justifyContent = "center";
sixteen.style.maxWidth = "100%";
sixteen.style.padding = "0 25px";
sixteen.style.position = "relative";
sixteen.style.textAlign = "center";
sixteen.style.textDecoration = "none";

// make a button to clear the grid 

// creats a container for the grid/cells

let containerDiv = document.createElement("div");
document.body.appendChild(containerDiv);

containerDiv.classList.add('container');

containerDiv.style.width = "346px";
containerDiv.style.marginInline = "auto";
containerDiv.style.marginBlock = "150px";




// 4 Function to make the grids


function btnFour() {
    for (let i = 0; i < 4; i++) {

        let newDiv = document.createElement("div");
        containerDiv.appendChild(newDiv);

        newDiv.classList.add('grid-line');
        newDiv.style.display = "flex";
        newDiv.style.marginInline = "auto";

        for (let i = 0; i < 4; i++) {

            let innerNewDiv = document.createElement("div");

            newDiv.appendChild(innerNewDiv);

            innerNewDiv.classList.add('grid-line');
            innerNewDiv.style.display = "flex";
            innerNewDiv.style.height = "20px";
            innerNewDiv.style.width = "20px";
            innerNewDiv.style.border = "1px solid black";
            innerNewDiv.style.clear = "both";


            innerNewDiv.addEventListener('mouseover', () => {
                innerNewDiv.style.backgroundColor = "#eec0c8";
            });

        };
    };
}
function btnEight() {
    for (let i = 0; i < 8; i++) {

        let newDiv = document.createElement("div");
        containerDiv.appendChild(newDiv);

        newDiv.classList.add('grid-line');

        newDiv.style.display = "flex";

        for (let i = 0; i < 8; i++) {

            let innerNewDiv = document.createElement("div");

            newDiv.appendChild(innerNewDiv);

            innerNewDiv.classList.add('grid-line');

            innerNewDiv.style.display = "flex";

            innerNewDiv.style.height = "20px";
            innerNewDiv.style.width = "20px";
            innerNewDiv.style.border = "1px solid black";
            innerNewDiv.style.clear = "both";

            innerNewDiv.addEventListener('mouseover', () => {
                innerNewDiv.style.backgroundColor = "#eec0c8";
            });

        };
    };
}
function btnTwelve() {
    for (let i = 0; i < 12; i++) {

        let newDiv = document.createElement("div");
        containerDiv.appendChild(newDiv);

        newDiv.classList.add('grid-line');

        newDiv.style.display = "flex";

        for (let i = 0; i < 12; i++) {

            let innerNewDiv = document.createElement("div");

            newDiv.appendChild(innerNewDiv);

            innerNewDiv.classList.add('grid-line');

            innerNewDiv.style.display = "flex";
            innerNewDiv.style.height = "20px";
            innerNewDiv.style.width = "20px";
            innerNewDiv.style.border = "1px solid black";
            innerNewDiv.style.clear = "both";

            innerNewDiv.addEventListener('mouseover', () => {
                innerNewDiv.style.backgroundColor = "#eec0c8";
            });

        };
    };
}


function btnSixteen() {
    for (let i = 0; i < 16; i++) {

        let newDiv = document.createElement("div");
        containerDiv.appendChild(newDiv);

        newDiv.classList.add('grid-line');

        newDiv.style.display = "flex";

        for (let i = 0; i < 16; i++) {

            let innerNewDiv = document.createElement("div");

            newDiv.appendChild(innerNewDiv);

            innerNewDiv.classList.add('grid-line');

            innerNewDiv.style.display = "flex";
            innerNewDiv.style.height = "20px";
            innerNewDiv.style.width = "20px";
            innerNewDiv.style.border = "1px solid black";
            innerNewDiv.style.clear = "both";

            innerNewDiv.addEventListener('mouseover', () => {
                innerNewDiv.style.backgroundColor = "#eec0c8";
            });

        };
    };
}


document.innerHTML = function conditionBtn() {


if (btnFour.clicked == true) {

    btnFour();
}
if (btnEight.clicked == true) {
    btnEight();
}
if (btnTwelve.clicked == true) {
    btnTwelve();
}
if (btnSixteen.clicked == true) {
    btnSixteen();
}
};
// make a condition for trash can if clicked 

conditionBtn();




// to add : 

// trash can to delete drawing

// center grids x

// when another button clicked delete the past grid :
// use inner html empty the container and replace with the clicked function 
//  use the name of the var. innerHTML = the condition.


// make a footer 



