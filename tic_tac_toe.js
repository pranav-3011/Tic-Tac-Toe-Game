 let boxes = document.querySelectorAll(".box");
 let reset = document.querySelector(".reset");
 let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg")
 const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
 ];  

 let turn0 = true;

 boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){                           //player o
            box.innerText = "O";
            turn0=false;
        }else{                               //player x
            box.innerText = "X";
            turn0=true;
        }
        box.disabled==true;
        checkWinner();                     //function to check the winner
    })
 });

 let checkWinner=()=>{
    for(let pattern of winPatterns){
        let posi1 = boxes[pattern[0]].innerText;
        let posi2 = boxes[pattern[1]].innerText;
        let posi3 = boxes[pattern[2]].innerText;

        if(posi1!="" && posi2!="" && posi3!=""){
            if(posi1===posi2 && posi2===posi3){
                showWinner(posi1);    //function to show winner
            }
        }
    }
 };

 const showWinner = (x)=>{                   //to print winner msg
    msg.innerText=`!!You Nailed it Boie!! ${x}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
 }

 const disableBoxes=()=>{        //function for disablin boxes
    for(let box of boxes){
        box.disabled=true;
    }
 };

 const enableleBoxes=()=>{        //function for enabling boxes
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
 };

 const resetGames=()=>{
    turn0=true;
    enableleBoxes();
    msgContainer.classList.add("hide");
    

 };

 reset.addEventListener("click",resetGames);