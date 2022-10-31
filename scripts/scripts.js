
const hamburger= document.querySelector(".hamburger__icon");
const closebtn= document.querySelector(".closebtn");

hamburger.addEventListener("click", ()=> {
    
    document.getElementById("mobile__nav").style.width = "100%";
});
closebtn.addEventListener("click", ()=>{
    document.getElementById("mobile__nav").style.width = "0%";
});


