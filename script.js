let containerDivs = document.createElement("div");
 
function gridBoard(){
    for (let i= 0; i < 16; i ++){
    let newDiv = document.createElement("div");
    newDiv.textContent = "div";
    document.body.appendChild(newDiv);
    newDiv.classList.add('grid-line');
    

    for (let i= 0; i < 16; i ++){
    let innerNewDiv = document.createElement("div");
    innerNewDiv.textContent = "div1";
    document.body.appendChild(innerNewDiv);
    innerNewDiv.classList.add('cell');
    innerNewDiv.style.display = "flex";
    };
    };
}

gridBoard();