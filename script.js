const front_btn = document.getElementById("front-btn");
let already_press = false ;

front_btn.addEventListener("click" , ()=>{

       if(!already_press && front_btn.textContent !="Already Booked ✧"){
   function btn_text_changer(){
     front_btn.style.color = "white"; 
    let btn_text = front_btn.textContent ;
    btn_text += "  ▷";
    front_btn.textContent = btn_text ; 
    console.log(btn_text);
    front_btn.style.width = "40%" ; 
    already_press = true ; 
     front_btn.style.color  = "black" ;
      front_btn.style.backgroundColor = "white" ;
   } 


    setTimeout(btn_text_changer , 500) ;


     function btn_text_changer2(){
     front_btn.style.color = "white"; 
    let btn_text = front_btn.textContent ;
    btn_text = "";
    btn_text = "Book Demo"
    front_btn.textContent = btn_text ; 
    console.log(btn_text);
    front_btn.style.width = "30%" ; 
  
   } 

    setTimeout(btn_text_changer2 , 2500) ;

     function btn_text_changer3(){
     front_btn.style.color = "white"; 
    let btn_text = front_btn.textContent ;
    btn_text = "Already Booked ✧"
    front_btn.textContent = btn_text ; 
    console.log(btn_text);
    front_btn.style.width = "30%" ; 
      front_btn.style.color  = "white" ;
      front_btn.style.backgroundColor = "black" ;
    already_press = false ; 
   } 

    setTimeout(btn_text_changer3 , 3000) ;
}
})