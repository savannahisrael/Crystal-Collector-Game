$( document ).ready(function(){
  
  //Global Variables + Game Start Values

  //Get random value for each crystal between 1-12
  var crystal1= Math.floor(Math.random()*12+1)
  var crystal2= Math.floor(Math.random()*12+1)
  var crystal3= Math.floor(Math.random()*12+1)
  var crystal4= Math.floor(Math.random()*12+1)  
  
  // Counting Variables
  var playerTotal= 0; 
  var wins= 0;
  var losses = 0;
  //Print Wins/Losses to HTML
  $('#wins').text(wins);
  $('#losses').text(losses);
  
  //Get random value for targetScore
  var Random=Math.floor(Math.random()*102+19)
  //Print Target Score
  $('#targetScore').text(Random);
    
    
  //Functions, Methods, Logic

  // Reset Game
  function reset(){
        Random=Math.floor(Math.random()*102+19);
        console.log(Random)
        $('#targetScore').text(Random);
        crystal1= Math.floor(Math.random()*12+1);
        crystal2= Math.floor(Math.random()*12+1);
        crystal3= Math.floor(Math.random()*12+1);
        crystal4= Math.floor(Math.random()*12+1);
        playerTotal= 0;
        $("#yourScore").text(playerTotal);
        } 


  // Wins Count + Print Update
  function winner(){
  alert("It's crystal clear... you've won!");
    wins++; 
    $('#wins').text(wins);
    reset();
  }

  // Losses Count + Print Update
  function loser(){
  alert ("You lost... but of quartz, you still rock!");
    losses++;
    $('#losses').text(losses);
    reset()
  }


  // on.Click events for each crystal
    // *Later will come back and figure how to combine functions to have less repetative code*
    
  $('.green').on ('click', function(){
      playerTotal = playerTotal + crystal1;
      console.log("New playerTotal= " + playerTotal);
      $('#yourScore').text(playerTotal); 
          // Wins + Loss Conditionals
          if (playerTotal == Random){
            winner();
          }
          else if ( playerTotal > Random){
            loser();
          }   
    })  
    
    $('.pink').on ('click', function(){
      playerTotal = playerTotal + crystal2;
      console.log("New playerTotal= " + playerTotal);
      $('#yourScore').text(playerTotal); 
          if (playerTotal == Random){
            winner();
          }
          else if ( playerTotal > Random){
            loser();
          } 
    })  
    
    $('.yellow').on ('click', function(){
      playerTotal = playerTotal + crystal3;
      console.log("New playerTotal= " + playerTotal);
      $('#yourScore').text(playerTotal);
  
            if (playerTotal == Random){
            winner();
          }
          else if ( playerTotal > Random){
            loser();
          } 
    })  
    
    $('.purple').on ('click', function(){
      playerTotal = playerTotal + crystal4;
      console.log("New playerTotal= " + playerTotal);
      $('#yourScore').text(playerTotal); 
        
            if (playerTotal == Random){
            winner();
          }
          else if ( playerTotal > Random){
            loser();
          }
    });
       
  }); 
