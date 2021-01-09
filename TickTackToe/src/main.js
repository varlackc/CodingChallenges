// Declare the board
var board = [['','',''], ['','',''], ['','','']]

// Declare the character to use
var stamp = 'O';
function SelectCharacter(){
    var selectCharacter = document.getElementById("CharacterSelect").value;
    console.log(selectCharacter);
    switch(selectCharacter){
        case "O":
            stamp = selectCharacter;
            break;
        case "X":
            stamp = selectCharacter;
            break;
    }
}

function clickEvent(id){
    //update the front end
    document.getElementById(id).innerHTML = stamp;
    
    //update the board values
    switch(id)
    {
        case "topLeft":
            board[0][0] = stamp;
        break;
        
        case "topCenter":
            board[0][1] = stamp;
        break;
        
        case "topRight":
            board[0][2] = stamp;
        break;
        
        case "midLeft":
            board[1][0] = stamp;
        break;
        
        case "midCenter":
            board[1][1] = stamp;
        break;
        
        case "midRight":
            board[1][2] = stamp;
        break;
        
        case "bottomLeft":
            board[2][0] = stamp;
        break;
        
        case "bottomCenter":
            board[2][1] = stamp;
        break;
        
        case "bottomRight":
            board[2][2] = stamp;
        break;
    }
    //display result
    console.log(board);
};