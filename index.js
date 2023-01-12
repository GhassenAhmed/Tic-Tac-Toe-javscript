const cells = document.querySelectorAll('.cell');

for(let i=0;i<9;i++){
    cells[i].addEventListener('click',()=>{
        addSymbole(i);
    })
}

for(let i=0;i<9;i++){
    cells[i].addEventListener('dblclick',()=>{
        cells[i].innerHTML='O';
    })
}

function addSymbole(i){
    cells[i].innerHTML='<i class="fa fa-close"></i>';
}