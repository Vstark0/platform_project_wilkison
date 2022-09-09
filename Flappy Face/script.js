var block = document.getElementById("block");
var hole = document.getElementById("hole");
var character = document.getElementById("character");
var jumping = 0;
var counter = 0;
hole.addEventListener('animationiteration', () => {
    var random = -((Math.random() * 300) + 150);
    var top = (random*100)+150;
    //is something wrong here? Am i missing something?? Did I put in extra code??
    hole.style.top = random +"px";
    counter++;
});
setInterval(function(){
    var characterTop = parseInt (window.getComputedStyle(character).getPropertyValue("top"));
    if(jumping==0){
        character.style.top = (characterTop + 3) + "px";
    }
    var blockleft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    var cTop = -(500-characterTop);
    parceInt (window.getComputedStyle(character).getPropertyValue("top"));
    
    if((characterTop > 480) ||((blockLeft < 20)&&(blockLeft>-50)&&((cTop<holeTop)||(cTop>holeTop+130)))){
        alert("Game Over. Score: "+counter-1);
        character.style.top = 100 + "px";
        counter=0;
    }
    //for the stats page, just use that code^ but take out the reset of the counter for the total overtime

}, 10);

function jump(){
    jumping = 1;
    var jumpCount = 0;
    var jumpInterval = setInterval(function(){
        var characterTop = parseInt (window.getComputedStyle(character).getPropertyValue("top"));
        if((characterTop > 5)&&(jumpCount<13)){
            character.style.top = (characterTop - 6) + "px";

            
        }
        if(jumpCount > 20){
            clearInterval(jumpInterval);
            jumping=0;
            jumpCount=0;
        }
        jumpCount++;
    

    },10);

}