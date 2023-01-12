const cells = document.querySelectorAll('.cell');





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
        addSymbole(player1,i);
    })
}

function addSymbole(player,i){
    cells[i].innerHTML=player.Symbol;
}