// creating the title and center it 


let title = document.createElement("div");
document.body.appendChild(title);

title.textContent = "Etch a sketch";
title.classList.add("title");

let containerButton = document.createElement("div");
document.body.appendChild(containerButton);
containerButton.classList.add("btn-container");



const four = document.createElement("button");
four.textContent = "4x4";
four.classList.add("btn");
containerButton.appendChild(four);


const eight = document.createElement("button");
eight.textContent = "8x8";
eight.classList.add("btn");
containerButton.appendChild(eight);



const twelve = document.createElement("button");
twelve.textContent = "12x12";
twelve.classList.add("btn");
containerButton.appendChild(twelve);


const sixteen = document.createElement("button");
sixteen.textContent = "16x16";
sixteen.classList.add("btn");
containerButton.appendChild(sixteen);


four.addEventListener("click", () => drawGrid(4));
eight.addEventListener("click", () => drawGrid(8));
twelve.addEventListener("click", () => drawGrid(12));
sixteen.addEventListener("click", () => drawGrid(16));



const containerDiv = document.createElement("div");
document.body.appendChild(containerDiv);
containerDiv.classList.add('container');


function drawGrid(size, width, height) {

    let newGrid = document.createElement("div");


    for (let i = 0; i < size; i++) {

        let newDiv = document.createElement("div");
        newGrid.appendChild(newDiv);
        newDiv.classList.add('grid-line');

        for (let i = 0; i < size; i++) {

            let innerNewDiv = document.createElement("div");
            newDiv.appendChild(innerNewDiv);
            innerNewDiv.classList.add('inner-cells');

            innerNewDiv.addEventListener('mouseover', () => {
                innerNewDiv.classList.add('mouse-over');
            });

        }
    };
    containerDiv.replaceChildren(newGrid);
};

drawGrid(size);


