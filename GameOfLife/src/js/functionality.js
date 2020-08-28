/** 
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
setInterval(step, 100);

console.log(getNeighbourCount(1, 1));

/**
 *  Initial Setup of the function
 **/
function setup() {
    canvas.width = size;
    canvas.height = size;
    context.scale(scale, scale);
    context.fillStyle = "black";
    context.fillRect(50, 50, 1, 1);
    cells = createCells();
}

/**
 *  Create the actual Cell
 */
function createCells() {
    let arr = new Array(resolution);
    for (let x = 0; x < resolution; x++) {
        let cols = new Array(resolution);
        for (let y = 0; y < resolution; y++) {
            cols[y] = false;
        }
        arr[x] = cols;
    }
    return arr;
}

/**
 * Populate the screen by randomly generating cells on the screen
 */
function randomCells() {
    for (let y = 0; y < resolution; y++) {
        for (let x = 0; x < resolution; x++) {
            if (Math.random() < 0.5) cells[x][y] = true;
        }
    }
}

/**
 * Draw the cells on the screen
 */
function drawCells() {
    context.fillStyle = "white"; // clear screen at the begining of each project
    context.fillRect(0, 0, resolution, resolution);
    context.fillStyle = "black"; // set the default color of the cells back to black
    for (let y = 0; y < resolution; y++) {
        for (let x = 0; x < resolution; x++) {
            if (cells[x][y]) context.fillRect(x, y, 1, 1);
        }
    }
}

/**
 * update the cell using the rules of the game of life
 * 
 *  */
function step() {
    let newCells = createCells();
    for (let y = 0; y < resolution; y++) {
        for (let x = 0; x < resolution; x++) {
            const neighbours = getNeighbourCount(x, y);
            //Apply the game rules
            if (cells[x][y] && neighbours >= 2 && neighbours <= 3) newCells[x][y] = true; // 2 to 3 cells stay alive
            else if (!cells[x][y] && neighbours == 3) newCells[x][y] = true;
        }
    }
    cells = newCells; // override cells
    drawCells(); //draw the cells on the screen after update
}

/**
 * Get the number of neighbours of cell
 * 
 * @param {x horizontal coordinate} x 
 * @param {y vertical coordinate} y 
 */
function getNeighbourCount(x, y) {
    let count = 0;
    for (let yy = -1; yy < 2; yy++) {
        for (let xx = -1; xx < 2; xx++) {
            if (xx === 0 && yy === 0) continue;
            if (x + xx < 0 || x + xx > resolution - 1) continue;
            if (y + yy < 0 || y + yy > resolution - 1) continue;
            if (cells[x + xx][y + yy]) count++;
        }
    }
    return count;
}