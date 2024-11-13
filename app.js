let boxs = document.querySelectorAll('.box');
let restart = document.querySelector('.btn');
let newGame = document.querySelector('.btn2');
let p = document.querySelector("p");

let player = true;

let conditions = [[1,2,3],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]]

let draw = 0;

boxs.forEach((box) =>{
    box.addEventListener('click', () =>{
        if(player){
            box.innerHTML = "O";
            box.classList.add("orange");
            player = false;
        }else{
            box.innerHTML = "X";
            player = true;
        }
        draw++;
        box.disabled = true;
        checkWinner()
    });
})
function winner(x){
    p.innerHTML = `winner is ${x}`;
    disableBTN();
    newGame.classList.remove("hide");
    restart.classList.add("hide");
}
function checkWinner(){
    for(let patterns of conditions){
        console.log(patterns[0],patterns[1],patterns[2])
        let pos1 = boxs[patterns[0]].innerText;
        let pos2 = boxs[patterns[1]].innerText;
        let pos3 = boxs[patterns[2]].innerText
        if(pos1!="" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2  && pos2 === pos3){
                winner(pos1);
            }
        }
    }
    if(draw === 9){
        p.innerHTML = `Draw`;
        disableBTN();
        newGame.classList.remove("hide");
        restart.classList.add("hide");
    }
}
function disableBTN(){
    for(let box of boxs){
        box.disabled = true;
    }
}
function inableBTN(){
    for(let box of boxs){
        box.disabled = false;
        box.innerHTML = "";
    }
    newGame.classList.add("hide");
    restart.classList.remove("hide");
    p.innerHTML = "";
    draw=0;
}

newGame.addEventListener('click',()=>{
    player = true;
    inableBTN();
});
restart.addEventListener('click',()=>{
    player = true;
    inableBTN();
});