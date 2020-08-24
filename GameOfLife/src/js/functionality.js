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
const context = canvas.getContext("2d");
const size = 800;
const scale = 8;
const resolution = size / scale;
let cells;

// Call functions
setup();
randomCells();

function setup() {
    canvas.width = size;
    canvas.height = size;
    context.scale(scale, scale);
    context.fillStyle = "black";
    cells = createCells();
}

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

function randomCells() {
    for (let y = 0; y < resolution; y++) {
        for (let x = 0; x < resolution; x++) {
            if (Math.random() < 0.5) context.fillRect(x, y, 1, 1); //cells[x][y] = true;;
        }
    }
}

function drawCells() {
    for (let)
}

/*

function make2DArray(cols, rows) {
    let arr = new Array(cols);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows);
    }
    return arr;
}


// Global variables
let grid;
let cols = 10;
let rows = 10;

function setup() {

    grid = make2DArray(10, 10);
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            // Randomly populate the cells
            grid[i][j] = floor(random(2));
        }
    }

}

/*
$(document).ready(function() {


    $('#submitButton').click(function() {

        //Declare Variables
        var message = "";
        var result = "";

        console.log("Game of Life Test");

        // JavaScript 
        $('#details').html(result);
    });

    $('#clearButton').click(function() {
        $('#details').html(" ");
    });
});
*/