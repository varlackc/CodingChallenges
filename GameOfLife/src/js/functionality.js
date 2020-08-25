/*
        Game of Life

    Rules:
    1. Any live cell with fewer than two live neighbours dies, as caused by underpopulation
    2. Any live cell with tow or three live neighbours lives on the next generation.introContent
    3. Any live cell with more than three live neighbours dies, as if by overpopulation
    4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.  
*/

// Declare Global Variables
const canvas = document.getElementById("canvas");
const context = canvas.getContext('2d');
const size = 800;
const scale = 8;
const resolution = size / scale;

let cells;

// Call functions
setup();
randomCells();
drawCells();

// Initial Setup of the function
function setup() {
    canvas.width = size;
    canvas.height = size;
    context.scale(scale, scale);
    context.fillStyle = "black";
    context.fillRect(50, 50, 1, 1);
    cells = createCells();
}

// Create the actual Cell
function createCells() {
    let arr = new Array(resolution);
    for (let x = 0; x < resolution; x++) {
        let cols = new Array(resolution);
        for (let y = 0; y < resolution; y++) {
            cols[y] = false;
        }
        arr[x] = cols;
        //rows[x] = cols;
    }
    return arr;
}

// Generate random position of the cell
function randomCells() {
    for (let y = 0; y < resolution; y++) {
        for (let x = 0; x < resolution; x++) {
            //if (Math.random() < 0.5) context.fillRect(x, y, 1, 1)
            if (Math.random() < 0.5) cells[x][y] = true; //cells[x][y] = true;;
        }
    }
}

function drawCells() {
    for (let y = 0; y < resolution; y++) {
        for (let x = 0; x < resolution; x++) {
            if (cells[x][y]) context.fillRect(x, y, 1, 1);
        }
    }
}

function steps() {
    let newCells = createCells();
    for (let y = 0; y < resolution; y++) {
        for (let x = 0; x < resolution; x++)
    }

}

function getNeighbourCount() {
    let count = 0;
    for (let yy = -1; yy < 2; yy++) {
        for (let xx = -1; xx < 2; xx++) {
            if (xx === 0 && yy === 0) continue;
        }
    } {

    }
}