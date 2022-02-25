var board = new Array(3);
for(var i=0; i < 3; i++){
    board[i] = new Array(3);
}

//initialize the board
for(var row=0; row<3; row++){
    for(var col=0; col<3; coll++){
        board[row][col] = " ";
    }
}

//example if player x play on row 0, col 2
board[0][2] = "x"

//example if player x play on row 1, col 1
board[1][1] = "x"

//exmplae if player o plya on row 0 col 1
board[0][1] = "o"