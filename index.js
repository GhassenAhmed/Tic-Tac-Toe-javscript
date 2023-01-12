const cells = document.querySelectorAll('.cell');
let turn=true;
let reset=document.querySelector('.turn');



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
            turn=false;
        }else{
            addSymbole(player2,i);
            turn=true;
        }
        
    })
}

function addSymbole(player,i){
    cells[i].innerHTML=player.Symbol;
}

function reset(){
    
        for(let i=0;i<9;i++){
            cells[i].innerHTML='';
        }

}