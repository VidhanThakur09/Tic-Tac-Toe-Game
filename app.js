let boxs = document.querySelectorAll('.box');
let restart = document.querySelector('.btn');
let newGame = document.querySelector('.btn2');
let p = document.querySelector("p");

let player = true;

let conditions = [[1,2,3],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]]

boxs.forEach((box) =>{
    box.addEventListener('click', () =>{
        if(player){
            box.innerHTML = "O";
            player = false;
        }else{
            box.innerHTML = "X";
            player = true;
        }
        console.log("box clicked");
        box.disabled = true;
        checkWinner()
    });
})
function checkWinner(){
    for(let patterns of conditions){
        console.log(patterns[0],patterns[1],patterns[2])
        let pos1 = boxs[patterns[0]].innerText;
        let pos2 = boxs[patterns[1]].innerText;
        let pos3 = boxs[patterns[2]].innerText
        if(pos1!="" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2  && pos2 === pos3){
                p.innerHTML = "winner "+pos1;
            }
        }
    }
}