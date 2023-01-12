const cells = document.querySelectorAll('.cell');
let turn=true;
let reset=document.querySelector('.turn');
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
let usedCells=[];

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

for(let i=0;i<9;i++){
    cells[i].addEventListener('click',()=>{
        if(turn){
            addSymbole(player1,i);
            checkWin(player1);
            turn=false;
        }else{
            addSymbole(player2,i);
            checkWin(player2);
            turn=true;
        }
        
    })
}

function addSymbole(player,i){
    cells[i].innerHTML=player.Symbol;
    player.played.push(i);
    usedCells.push(i);
}


function checkWin(player){
    winCombos.some(combo=>{
        if(combo.every(index => player.played.includes(index))){
            alert("u won");
        }
    })
}

function isEmpty(i){
    if(usedCells.includes(i)){
        return false
    }else{
        return true;
    }
}










// function reset(){
    
//         for(let i=0;i<9;i++){
//             cells[i].innerHTML='';
//         }

// }