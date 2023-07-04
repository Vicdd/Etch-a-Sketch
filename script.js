const gridSize = 16;

function createGrid() {
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

createGrid();