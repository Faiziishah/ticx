let boxes = document.querySelectorAll(".box")
 let reset_button = document.querySelector("#reset")
 let winnershow = document.querySelector("winmsg")
 let show = document.getElementById("show")
 let player = true;
 let winner = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,7],[2,4,6],[3,4,5],[6,7,8]];
 boxes.forEach((box)=>{
   box.addEventListener("click",()=>{
        console.log(" you clicked");
        box.innerText="0"
if (player) { 
    box.innerText="0";
    player=false
   
} else {
    box.innerText="X";
    player=true

}


    //-------- box-disabeling_function----


if (box.classList.contains("disabled")) return;
box.classList.add("disabled"); 
  check_winner();
// box.disabled = true

//   console.log(box.innerText)     
        
    });
});


const hideWinnerMessage = () => {
    show.classList.add("hide");
};




   // Function to disable all boxes
   const disableallboxes = () => {
    boxes.forEach(box => {
        box.classList.add("disabled");
    });
};

          // ---  check_winner_function----
          
const check_winner= ()=>{

    for(let  win of winner){
        // console.log(win[0],win[1],win[2]);
        // // console.log(
            
        //     boxes[win[0]].innerText,
        //     boxes[win[1]].innerText,
        //     boxes[win[2]].innerText

        // )

        const showwinner = (iner) => {
       show.innerText =`congrates winer is =${iner}`;
       show.classList.remove("hide");
    
    
      

        };

        let postion1 = boxes[win[0]].innerText
        let postion2 = boxes[win[1]].innerText
        let postion3 = boxes[win[2]].innerText
         
        if ( postion1 !=""&& postion2 !="" && postion3 !=""){
            if(postion1 === postion2 && postion2 ===postion3){
               
                console.log("WINNER"+postion1)
        
                showwinner(postion1);
                disableallboxes();
                return;
              

            }
        }

    }
}          



        //--------reset___button-------

reset_button.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = ""; 
        box.classList.remove("disabled"); 
        // winnershow.classList.add("hide")
    });
    player = true; 
    hideWinnerMessage();
})