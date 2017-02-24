var $gameboard = $('.gameboard');
var turnCounter = 1;
var hasWon = false;
var currentPlayer;
var winningCombinations = [
  '123','456','789',
  '147','258', '369',
  '159','357'
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

 var pickMatching = function (player){
    for(var i = 0; i < winningCombinations.length; i++) {
      var combo = winningCombinations[i];
      var regexPattern = '[' + combo + ']';
      var regEx = new RegExp(regexPattern, 'g');
      var matchedNumbers = player.picks.sort().join('').match(regEx);
      if (matchedNumbers !== null && matchedNumbers.join('') === combo) {
        hasWon = true;
        break;
      }
    }
    return hasWon;
 };

var checkForWin = function(player) {
  if (pickMatching(player)) {
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
