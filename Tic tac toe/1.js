var origBoard;
const huplayer='O';
const aiplayer='X';
const winCombos=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]
];
const cells=document.querySelectorAll('.cell');
startGame();

function startGame(){
    document.querySelector('.endgame').style.display='none';
    origBoard=Array.from(Array(9).keys());
    //console.log(origBoard);
    for(var i=0; i<cells.length;i++){
        cells[i].innerText='';
        cells[i].style.removeProperty('background-color');
        cells[i].addEventListener('click',turnClick,false);
    }
}
function turnClick(square){
    //console.log(square.target.id);
    if(typeof origBoard[square.target.id] == 'number'){
        turn(square.target.id,huplayer);
        if(!checkTie()){
            turn(bestSpot(),aiplayer);
        }
    }
}
function turn(squareId,player){
    origBoard[squareId]=player;
    document.getElementById(squareId).innerText=player;
    let gameWon = checkWin(origBoard,player);
    if(gameWon){
        gameOver(gameWon);
    }
}
function checkWin(board,player){
    let plays=board.reduce((accumulator,e,i)=>
        (e===player) ? accumulator.concat(i): accumulator,[]);
    let gameWon=null;
    for(let [index,win] of winCombos.entries()){
        if(win.every(elem=> plays.indexOf(elem) > -1)){
            gameWon={index: index,player: player};
            break;
        }
    }
        return gameWon;
}
function gameOver(gameWon){
    for(let index of winCombos[gameWon.index]){
        document.getElementById(index).style.backgroundColor= gameWon.player == huplayer ? "orange" : "red";
    }
    for(var i=0;i<cells.length;i++){
        cells[i].removeEventListener('click',turnClick,false);
    }
    declareWinner(gameWon.player == huplayer ? "You Win" : "You Lose");
}
function declareWinner(who){
    document.querySelector(".endgame").style.display ="block";
    document.querySelector(".endgame .text").innerText= who;
}
function checkTie(){
    if(emptySquares().length == 0)
    {
        for(var i=0;i<cells.length;i++){
            cells[i].style.backgroundColor ="green";
            cells[i].removeEventListener('click',turnClick,false);
        }
        declareWinner("Tie Game");
        return true;
    }
    return false;
}
function emptySquares(){
    return origBoard.filter(s=>typeof s == 'number');
}
function bestSpot(){
   // return emptySquares()[0];
    return minMax(origBoard,aiplayer).index;
}
function minMax(newBoard,player){
    var avialSpot=emptySquares(newBoard);
    if(checkWin(newBoard,player)){
        return {score : -10};
    }
    else if(checkWin(newBoard,aiplayer)){
        return { score : 10};
    }
    else if(avialSpot.length ==0){
        return {score: 0};
    }   
    var moves=[];
    for(var i=0;i<avialSpot.length;i++){
        var move ={};    
        move.index=newBoard[avialSpot[i]];
        newBoard[avialSpot[i]]=player;
        if(player == aiplayer){
            var result= minMax(newBoard,huplayer);
            move.score = result.score;
        }
        else{
            var result= minMax(newBoard,aiplayer);
            move.score = result.score;
        }
        newBoard[avialSpot[i]]=move.index;
        moves.push(move);
    }   
    var bestMoves;
    if(player === aiplayer){
        var bestScore =-10000;
        for(var i= 0;i<moves.length;i++){
            if(moves[i].score > bestScore){
                bestScore = moves[i].score;
                bestMoves=i;
            }
        }
    }
    else {
        var bestScore =10000;
        for(var i= 0;i<moves.length;i++){
            if(moves[i].score < bestScore){
                bestScore = moves[i].score;
                bestMoves=i;
            }
        }
    }
    return moves[bestScore];
}