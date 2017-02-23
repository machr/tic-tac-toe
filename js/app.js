  var $gameboard = $('.gameboard');
  var winningCombinations = [
    'A1A2A3','B1B2B3','C1C2C3',
    'A1B1C1','A2B2C2','A3B3C3',
    'A1B2C3','A3B2C1'
   ];
  var turnCounter = 1;
  var currentPlayer;

   var player1 = {
     name: "Johnny",
     id: 1,
     picks: [] // Push coordinate into array for check
   };
   var player2 = {
     name: "Bob",
     id: 2,
     picks: [] // Push coordinate into array for check
   };

   // winning pick
  //  var winningPick = ['A2','B2','C2'];
  //  var winningPick = winningPick.join('');

   // TODO:
  // sort player.pick array, then join('')
  // Then conditionals for winningCombinations.includes(player.pick.sort().join);
  // update README.md

  // rethink if objects are needed!

  var checkForWin = function(player){
    if (winningCombinations.includes(player.picks.sort().join(''))) {
      console.log('player ' + player.id + ' wins');
    }
  };

  function getPick(event){
    var coordinate = $(event.target).data( "coordinate" );
    $square = $(event.target);
    if (turnCounter % 2 !== 0) {
      player1.picks.push(coordinate);
      $square.addClass( 'blue' );
      currentPlayer = player1;
    } else {
      player2.picks.push(coordinate);
      $square.addClass( 'green' );
      currentPlayer = player2;
    }
    if (turnCounter >= 5) {
      checkForWin(currentPlayer);
    }
    console.log(turnCounter);
    turnCounter++;
  }

  // Event listener
  $($gameboard).on('click', 'div', getPick);
  // winning combinations (there must be a smarter way!)
