

buttonColours=["red", "blue", "green", "yellow"];
gamePattern=[];
userClickedPattern=[]
var level=0
var count=0

function thesequence(gamePattern, userClickedPattern){
    if (gamePattern[count]== userClickedPattern[count]){               
            count+=1;
            var m= gamePattern.length;
           
            console.log("mine")
            console.log(userClickedPattern);
            if (count== m){
                level+=1;
                count=0;
                userClickedPattern=[];
                
                console.log("new nime");
                console.log(userClickedPattern);
                newSequence();
             
            }
    } 
    else{
        $("body").css("background-color", "red")
        setTimeout(function(){
            $("body").css("background-color", "#011F3F")
        }, 1000)
       gamePattern=[];
       userClickedPattern=[];
       level=0;
       count=0;
       $("h1").text(" Wrong Pattern");
       setTimeout(function(){
        $("h1").text("Press A Key to Start");
       }, 1000)
    }


}


function newSequence(){

    $("h1").text("level "+String(level));
    randomNum=((Math.random()*3));
    randomNum=randomNum.toFixed(0);
    
    randomChoosenColour=buttonColours[randomNum];

    gamePattern.push(randomChoosenColour);
  
    playSound(randomChoosenColour);
    console.log("comp");
    console.log(gamePattern) 
  
}


function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function()  {
        $("#"+currentColour).removeClass("pressed");
    }, 300);
}


function playSound(randomChoosenColour){
    
    selected="#"+randomChoosenColour;
    $(selected).delay(1).fadeOut("fast").fadeIn("fast");
    switch(randomChoosenColour){

        case "red":
            var sound= new Audio("sounds/" + randomChoosenColour + ".mp3");
            sound.play();
            break;       
        case "blue":
            var sound= new Audio("sounds/" + randomChoosenColour + ".mp3");
            sound.play();
            break;    
        case "green":
            var sound= new Audio("sounds/" + randomChoosenColour + ".mp3");
            sound.play();        
            break;    
        case "yellow":
            var sound= new Audio("sounds/" + randomChoosenColour + ".mp3");
            sound.play();        
            break;
        default:
            alert("A mior Glitch!!!");    
    }
}    


$("body").on("keydown", function(event){
   newSequence();
})


$(".btn").on("click" , function(){
    userChosenId=this.id;
    userClickedPattern.push(userChosenId);
    animatePress(userChosenId);
    playSound(userChosenId);
  
   if (gamePattern[count]== userClickedPattern[count]){               
    count+=1;
    var m= gamePattern.length;
   
    console.log("mine")
    console.log(userClickedPattern);
    if (count== m){
        level+=1;
        count=0;
        userClickedPattern=[];
        
        console.log("new nime");
        console.log(userClickedPattern);
        newSequence();
   
    }
} 
else{
$("body").css("background-color", "red")
setTimeout(function(){
    $("body").css("background-color", "#011F3F")
}, 1000)
gamePattern=[];
userClickedPattern=[];
level=0;
count=0;
$("h1").text(" Wrong Pattern");
setTimeout(function(){
$("h1").text("Press A Key to Start");
}, 1000)
}
});