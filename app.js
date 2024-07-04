let gameSeq=[];
let userSeq=[];

let btns = ["yellow","red","purple","green"];

let started = false;
let level = 0;

let h2= document.querySelector("h2");

let highestLevel = 0; //HW


document.addEventListener("keypress",function() {
    if(started==false){
    // console.log("Game is Started");
    started=true;
    levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("gameflash");
    setTimeout(function() {
        btn.classList.remove("gameflash");
    },500);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    },750);
}

function levelUp() {
    userSeq = [];
    level++;
    if (level > highestLevel) {
        highestLevel = level;
    }

    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4); //HW
    //let randIdx = Math.floor(Math.random() * 3);
    let randColor=btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq); //For Understanding the GAME
    gameFlash(randBtn);
}

function checkAns(idx){
    // console.log("current level: ",level);
// let idx = level-1;

if(userSeq[idx] === gameSeq[idx])
    {
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,500);
        }
        // console.log("same value");
    }
    else{
        h2.innerHTML = `Game Over : Your score was <b>${level}</b>. Highest Score: <b>${highestLevel}</b> <br> Press any key to start.`; 
    //    h2.innerHTML = `Game Over : Your score was <b>${level}</b> <br> Press any key to start.`; 
       document.querySelector("body").style.backgroundColor = "red";
       setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
       },500);
       reset();
    }
}

function btnPress(){
    // console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
   // console.log(userColor);
   userSeq.push(userColor);

   checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}

