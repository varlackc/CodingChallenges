// Declare the board
var board = [['','',''], ['','',''], ['','','']]

// Declare the character to use
var stamp = 'O';
var computerStamp = 'X';
function SelectCharacter(){
    var selectCharacter = document.getElementById("CharacterSelect").value;
    console.log(selectCharacter);
    switch(selectCharacter){
        case "O":
            stamp = selectCharacter;
            computerStamp = 'X';
            break;
        case "X":
            stamp = selectCharacter;
            computerStamp = 'O';
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

function SelectNextMove(board){

    //Try to find a wining strategy
    //Top Left
    if((board[0][1] == board[0][2] && board[0][2] !== '' && board[0][0] == '') || (board[1][0] == board[2][0] && board[2][0] !== '' && board[0][0] == '')
        || (board[1][1] == board[2][2] && board[2][2] !== '' && board[0][0] == '')){
        board[0][0] = computerStamp;
        document.getElementById("topLeft").innerHTML = computerStamp;
        return board;
    }
    //Top Center
    if((board[0][0] == board[0][2] && board[0][2] !== '' && board[0][1] == '') || (board[1][1] == board[1][2] && board[0][1] == '')){
        board[0][1] = computerStamp;
        document.getElementById("topCenter").innerHTML = computerStamp;
        return board;
    }
    //Top Right
    if((board[0][0] == board[0][1] && board[0][1] !== '' && board[0][2] == '') || (board[2][1] == board[2][2] && board[2][2] !== '' && board[0][2] == '')|| (board[2][0] == board[1][1] && board[1][1] !== '' && board[0][2] == '')){
        board[0][2] = computerStamp;
        document.getElementById("topRight").innerHTML = computerStamp;
        return board;
    }

    //Mid Left
    if((board[1][1] == board[1][2] && board[1][2] !== '' && board[1][0] == '') || (board[0][0] == board[2][0] && board[1][0] == '')){
        board[1][0] = computerStamp;
        document.getElementById("midLeft").innerHTML = computerStamp;
        return board;
    }
    //Mid Right
    if((board[1][0] == board[1][1] && board[1][1] !== '' && board[1][2] == '') || (board[0][2] == board[2][2] && board[2][2] !== '' &&  board[1][2] == '')){
        board[1][2] = computerStamp;
        document.getElementById("midRight").innerHTML = computerStamp;
        return board;
    }

    // Bottom Left
    if((board[2][1] == board[2][2] && board[2][2] !== '' && board[2][0] == '') || (board[0][0] == board[1][0] && board[1][0] !== '' && board[2][0] == '')){
        board[2][0] = computerStamp;
        document.getElementById("bottomLeft").innerHTML = computerStamp;
        return board;
    }
    // Bottom Mid
    if((board[0][1] == board[1][1] && board[1][1] !== '' && board[2][1] == '') || (board[2][0] == board[2][2] && board[2][2] !== '' && board[2][1] == '')){
        board[2][1] = computerStamp;
        document.getElementById("bottomCenter").innerHTML = computerStamp;
        return board;
    }
    // Bottom Right
    if((board[0][2] == board[1][2] && board[1][2] !== '' && board[2][2] == '') || (board[2][0] ==  board[2][1] && board[2][1] !== '' && board[2][2] == '')){
        board[2][2] = computerStamp;
        document.getElementById("bottomRight").innerHTML = computerStamp;
        return board;
    }

        //Attack the center of the board
    if(board[1][1] == '')
    {
            board[1][1] = computerStamp;
            document.getElementById("midCenter").innerHTML = computerStamp;
            return board;
    }

    // If no wining moves are available then look for an available move
    if(board[0][0] == ''){ board[0][0] = computerStamp; document.getElementById("topLeft").innerHTML = computerStamp; return board;}
    if(board[0][1] == ''){ board[0][1] = computerStamp; document.getElementById("topCenter").innerHTML = computerStamp; return board;}
    if(board[0][2] == ''){ board[0][2] = computerStamp; document.getElementById("topRight").innerHTML = computerStamp; return board;}

    if(board[1][0] == ''){ board[1][0] = computerStamp; document.getElementById("midLeft").innerHTML = computerStamp; return board;}
    if(board[1][2] == ''){ board[1][2] = computerStamp; document.getElementById("midRight").innerHTML = computerStamp; return board;}

    if(board[2][0] == ''){ board[2][0] = computerStamp; document.getElementById("bottomLeft").innerHTML = computerStamp; return board;}
    if(board[2][1] == ''){ board[2][1] = computerStamp; document.getElementById("bottomCenter").innerHTML = computerStamp; return board;}
    if(board[2][2] == ''){ board[2][2] = computerStamp; document.getElementById("bottomRight").innerHTML = computerStamp; return board;}
}

