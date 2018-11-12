

var winCounter = 0;
var lossCounter = 0;
var targetNumber = Math.floor(Math.random() * 101) + 19;
$("#targetNumber").text(targetNumber);



var green = Math.floor(Math.random() * 11) + 1;
var orange = Math.floor(Math.random() * 11) + 1;
var purple = Math.floor(Math.random() * 11) + 1;
var red = Math.floor(Math.random() * 11) + 1;


$("#winCounter").html(winCounter);
$("#lossCounter").html(lossCounter);

var counter = 0;
$("#curScore").text(counter);

function restartGame() {

targetNumber = Math.floor(Math.random() * 101) + 19;
$("#targetNumber").text(targetNumber);
green = Math.floor(Math.random() * 11) + 1;
orange = Math.floor(Math.random() * 11) + 1;
purple = Math.floor(Math.random() * 11) + 1;
red = Math.floor(Math.random() * 11) + 1;
counter = 0;
$("#curScore").text(counter);

}

function win() {

	alert("WINNER WINNER!!");
	winCounter ++;
	$("#winCounter").text(winCounter);
	restartGame();
}

function lose() {

	alert("Sorry...You Lost!");
	lossCounter ++;
	$("#lossCounter").text(lossCounter);
	restartGame();
}

$('#green').on ('click', function(){
    counter = counter + green;
    
    $('#curScore').text(counter); 
          
        if (counter == targetNumber){
          win();
        }
        else if (counter > targetNumber){
          lose();
        }   
  });  

$('#orange').on ('click', function(){
    counter = counter + orange;
    
    $('#curScore').text(counter); 
         
        if (counter == targetNumber){
          win();
        }
        else if (counter > targetNumber){
          lose();
        }   
  });  

$('#purple').on ('click', function(){
    counter = counter + purple;
    
    $('#curScore').text(counter); 
          
        if (counter == targetNumber){
          win();
        }
        else if (counter > targetNumber){
          lose();
        }   
  });  

$('#red').on ('click', function(){
    counter = counter + red;
    
    $('#curScore').text(counter); 
         
        if (counter == targetNumber){
          win();
        }
        else if (counter > targetNumber){
          lose();
        }   
        
     
  });  










