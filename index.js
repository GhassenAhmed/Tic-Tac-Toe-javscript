const cells = document.querySelectorAll('.cell');
const btnreset=document.querySelector('.button');
const content=document.querySelector('.content');
const msg= ' is the</span> <h2>winner</h2>';
const currentTurn=document.querySelector('.current-turn');
const player1score=document.querySelector('.score1');
const player2score=document.querySelector('.score2');
const draw=document.querySelector('.draw');
const overlay=document.querySelector('.overlay');
const close=document.querySelector('.close');
const winCombos=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

let turn=true;
let usedCells=[];
let winner=false;
let ties=0;
let player1={
    Symbol:'<i class="fa fa-close"></i>',
    played:[],
    score:0
}

let player2={
    Symbol:'<i class="fa fa-circle-o"></i>',
    played:[],
    score:0
}

checkTurn();
for(let i=0;i<9;i++){
    cells[i].addEventListener('click',()=>{
        if(isEmpty(i)){
            if(turn){
                addSymbole(player1,i);
                turn=false;
                checkWin(player1);
                checkTurn();
            }else{
                addSymbole(player2,i);
                turn=true;
                checkWin(player2);
                checkTurn();
            }    
        }else{
            alert("choose another cell");
        }
       
    })
}

function addSymbole(player,i){
    cells[i].innerHTML=player.Symbol;
    player.played.push(i);
    usedCells.push(i);
}


function checkWin(player){
    if(!winner){
        winCombos.some(combo=>{
            if(combo.every(index => player.played.includes(index))){
                player.score++;
                showScore();
                showMessage(player);
            }
        })
    }
    if(!winner && usedCells.length==9){
        ties++;
        showScore();
        showMessage(player);
    }
}

function isEmpty(i){
    if(usedCells.includes(i)){
        return false;
    }else{
        return true;
    }
}

function reset(){
    cells.forEach(cell=>{
        cell.innerHTML='';
    })
    usedCells=[];
    player1.played=[];
    player2.played=[];
    turn=true;
}

btnreset.addEventListener('click',reset);

function checkTurn(){
    if(turn){
        currentTurn.innerHTML=player1.Symbol;
    }else{
        currentTurn.innerHTML=player2.Symbol;
    }
}

function showScore(){
    player1score.innerHTML=player1.score;
    player2score.innerHTML=player2.score;
    draw.innerHTML=ties;
}

function showMessage(player,winner){
    overlay.style.display='flex';
    if(winner){
        content.innerHTML= player.Symbol +msg;
    }else{
        content.innerHTML= 'it'+'s a draw';
    }
   
}

function closeMsg(){
    overlay.style.display='none';

}
close.addEventListener('click',closeMsg);
close.addEventListener('click',reset);
