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
containerButton.classList.add("btn-container"); 
containerButton.style.textAlign = "center";
containerButton.style.display = "flex";
containerButton.style.gap = "3%";
containerButton.style.justifyContent = "center";



//4x4

const four = document.createElement("button");
four.textContent = "4x4";
four.classList.add("btn");
containerButton.appendChild(four);

//8x8

const eight = document.createElement("button");
eight.textContent = "8x8";
eight.classList.add("btn");
containerButton.appendChild(eight);

//12x12

const twelve = document.createElement("button");
twelve.textContent = "12x12";
twelve.classList.add("btn");
containerButton.appendChild(twelve);

//16x16

const sixteen = document.createElement("button");
sixteen.textContent = "16x16";
sixteen.classList.add("btn");
containerButton.appendChild(sixteen);

// trash button 
const trash = document.createElement("button");
trash.textContent = "🗑️";
trash.classList.add("btn");
containerButton.appendChild(trash);



// event listener to make the button work 

four.addEventListener("click", () => drawGrid(4));
eight.addEventListener("click", () => drawGrid(8));
twelve.addEventListener("click", () => drawGrid(12));
sixteen.addEventListener("click", () => drawGrid(16));

// trash.addEventListener("click", trash)


containerDiv.classList.add('container');

const containerDiv = document.createElement("div");
document.body.appendChild(containerDiv);
webkitURL





//Function to make the grids


function drawGrid(size, width) {

    let newGrid = document.createElement("div");
    

    for (let i = 0; i < size; i++) {

        let newDiv = document.createElement("div");
        newGrid.appendChild(newDiv);

        newDiv.classList.add('grid-line');
        newDiv.style.display = "flex";
        newDiv.style.marginInline = "auto";

        for (let i = 0; i < size; i++) {

            let innerNewDiv = document.createElement("div");

            newDiv.appendChild(innerNewDiv);

            innerNewDiv.classList.add('grid-line');
            innerNewDiv.addEventListener('mouseover', () => {
                innerNewDiv.classList.add('mouse-over');
            });

        };
    };

    containerDiv.replaceChildren(newGrid);
};




    // if (btnFour.clicked == true) {
    //     containerDiv.replaceChildren(drawGrid());
    // }
    // if (btnEight.clicked == true) {
    //     containerDiv.replaceChildren(drawGrid());
    // }
    // if (btnTwelve.clicked == true) {
    //     containerDiv.replaceChildren(drawGrid());
    // }
    // if (btnSixteen.clicked == true) {
    //     containerDiv.replaceChildren(drawGrid());
    // }