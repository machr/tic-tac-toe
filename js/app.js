var $gameboard = $('.gameboard');
var turnCounter = 1;
var currentPlayer;
var winningCombinations = [
  'A1A2A3','B1B2B3','C1C2C3',
  'A1B1C1','A2B2C2','A3B3C3',
  'A1B2C3','A3B2C1'
 ];

 var player1 = {
   name: "Johnny",
   id: 1,
   picks: []
 };
 var player2 = {
   name: "Bob",
   id: 2,
   picks: []
 };

var checkForWin = function(player){
  if ( winningCombinations.includes( player.picks.sort().join('') ) ) {
    $('body').append($('<h1 class="game-won">PLAYER  ' + player.id + '  WINS! </h1>'));
  }
};

function getPick(event){
  var coordinate = $(event.target).data( "coordinate" );
  $square = $(event.target);
  if (turnCounter % 2 !== 0) {
    player1.picks.push(coordinate);
    $square.addClass( 'player-one' );
    currentPlayer = player1;
    $('.gameboard, .square').removeClass( 'glow-purple' );
    $('.gameboard, .square').addClass( 'glow-blue' );

  } else {
    player2.picks.push(coordinate);
    $square.addClass( 'player-two' );
    currentPlayer = player2;
    $('.gameboard, .square').removeClass( 'glow-blue' );
    $('.gameboard, .square').addClass( 'glow-purple' );
  }
  if (turnCounter >= 5) {
    checkForWin(currentPlayer);
  }
  turnCounter++;
}

// Event listener
$($gameboard).on('click', 'div', getPick);
