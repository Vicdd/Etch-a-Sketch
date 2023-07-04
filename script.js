function createGrid(gridSize) {
    let grid = document.querySelector(".grid");
    for (let i = 0; i < gridSize * gridSize; i++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('mouseout',
            () => cell.style.backgroundColor = "black"
        );
        grid.appendChild(cell);
    }
}

function removeGrid() {
    let divs = document.querySelectorAll(".cell");
    divs.forEach(div => div.remove());
}

createGrid(16);

let button = document.querySelector("button").addEventListener('click', () => {
    let gridSize;

    do {
        gridSize = prompt("Insert new grid size value (1-100)");
    } while (gridSize < 1 || gridSize > 100);

    removeGrid();
    document.documentElement.style.setProperty('--gridSize', gridSize);
    createGrid(gridSize);
})