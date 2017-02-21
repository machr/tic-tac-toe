  var $gameboard = $('.gameboard');
  var tictactoe = [
    ['A1A2A3'],['B1B2B3'],['C1C2C3'],
    ['A1B1C1'],['A2B2C2'],['A3B3C3'],
   ];

  tictactoe =  tictactoe.join(',');
  console.log(tictactoe);

  var checkForWin = function(){
    if (tictactoe.includes(player1.pick)) {
      console.log('player1 wins');
    } else if (tictactoe.includes(player2.pick)) {
      console.log('player2 wins');
    }
  };

  function checkForWin(){
     if (tictactoe.includes(player1.pick)) {
       console.log('player1 wins');
     } else if (tictactoe.includes(player2.pick)) {
       console.log('player2 wins');
     }
   }

  var player1 = {
    name: "Johnny",
    pick: [] // Push coordinate into array for check
  };

  var player2 = {
    name: "Johnny",
    pick: [] // Push coordinate into array for check
  };



  var turnCounter = 0;
  function getPick(event){
    var coordinate = $(event.target).data( "coordinate" );
    $square = $(event.target);
    if (turnCounter % 2 !== 0) {
      player1.pick.push(coordinate);
      $square.addClass( 'blue' );
    } else {
      player2.pick.push(coordinate);
      $square.addClass( 'green' );
    }
    if ((player1.pick.length === 3) || (player1.pick.length === 3)) {
      checkForWin();
    }
    turnCounter++;
    console.log(turnCounter);
  }


  // compare player's pick array with tictactoe

  // Event listener
  $($gameboard).on('click', 'div', getPick);
  // winning combinations (there must be a smarter way!)
