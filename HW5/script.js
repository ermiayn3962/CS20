const grid = [];


function game() 
{
    var player = "X"
    $("#player").html(player + "'s Turn");
    
    $(document).ready(function() {
        boxes = $(".box");
        $(".box").click(function(){
            $(this).unbind();
            index = boxes.index(this);
            
            //changing the box to X or O
            $(this).text(player);
            
            // Check for win conditions
            gameEnd = checkGameEnd(player);
            if (gameEnd) {
                $(".box").unbind();
            }
            
            //changing player 
            if (!gameEnd) {
                player = switchPlayer(player);
            }
            
        }) 
        
        $("#restart").click(function() {
            resetGame();
        })
    })
    
}

function createGrid() 
{
    for (i = 0; i < 9; i++) {
        var newBox = $("<div>").text("");
        newBox.addClass("box");
        grid.push(newBox);
    }

    var board = $("#board");

    $.each(grid, function(index, div) {
        board.append(div)
    })

}

function switchPlayer(player) 
{
    if (player == "X"){
        player = "O";
    } else if (player == "O") {
        player = "X";
    }
    $("#player").html(player + "'s Turn");
    return player;
}

function checkGameEnd(player) 
{
    //Check rows for win condition
    for (i = 0; i <= 6; i++) {
        if (i % 3 == 0) {
            if ($(grid[i]).html() == player && $(grid[i+1]).html() == player && $(grid[i+2]).html() == player) {
                $("#winningScreen").html(player + " won!");
                return true; 
            }
        }
    }
    
    //Checking cols for win condition
    for (i = 0; i < 3; i++) {
        if ($(grid[i]).html() == player && $(grid[i+3]).html() == player && $(grid[i+6]).html() == player) {
            $("#winningScreen").html(player + " won!");
            return true ;  
        }
    }
    
    //Checking diagonals for win condition
    if ($(grid[0]).html() == player && $(grid[4]).html() == player && $(grid[8]).html() == player) {
        $("#winningScreen").html(player + " won!");
        return true;
    }
    
    if ($(grid[2]).html() == player && $(grid[4]).html() == player && $(grid[6]).html() == player) {
        $("#winningScreen").html(player + " won!");
        return true;
    }

    //Checking for draw
    const allNotEqual = grid.every(element => $(element).html() !== "");
    console.log(allNotEqual)
    console.log("\n")
    if (allNotEqual) {
        $("#winningScreen").html("Draw!");
        return true;
    }
    
}

function resetGame(){
    for (const cell of grid) {
        $(cell).html("");
    }
    $("#winningScreen").html("");
    game();
}

createGrid()  
game()    