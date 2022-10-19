
var numberofDrumButtons = document.querySelectorAll(".drum").length;

for(var i = 0 ; i < numberofDrumButtons;  i++){

document.querySelectorAll(".drum")[i].addEventListener("click" , handleClick)
function handleClick(){
var buttonInnerHTML = this.innerHTML ;
    switch (buttonInnerHTML) {
        case "w":
         var crash = new Audio("sounds/crash.mp3");
         crash.play();
         break;

        case "a":
         var kick = new Audio("sounds/kick-bass.mp3");
         kick.play();
         break;

         case "s":
         var snare = new Audio("sounds/snare.mp3");
         snare.play();
         break;

         case "d":
         var toma = new Audio("sounds/tom-1.mp3");
         toma.play();
         break;

         case "j":
          var tomb = new Audio("sounds/tom-2.mp3");
          tomb.play();
          break;

         case "k":
         var tomc = new Audio("sounds/tom-3.mp3");
         tomc.play();
         break;

         case "l":
         var tomd = new Audio("sounds/tom-4.mp3");
         tomd.play();
         break;
    
        default: 
        console.log("buttoninnerHTML");
            break;
    }
}}