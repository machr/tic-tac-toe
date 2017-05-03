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
 name: "Kasun",
 id: 1,
 picks: []
};
var player2 = {
 name: "DT",
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
    currentPlayer = executeTurn(coordinate, 'one', player1);
  } else {
    currentPlayer = executeTurn(coordinate, 'two', player2);
  }
  if (turnCounter >= 5) {
    checkForWin(currentPlayer);
  }
  turnCounter++;
}

function executeTurn(coord, playerNum, player) {
  player.picks.push(coord);
  $square.addClass('player-' + playerNum);
  if (playerNum == 'one') {
    colors = ['glow-purple', 'glow-blue'];
  } else {
    colors = ['glow-blue', 'glow-purple'];
  }
  $('.gameboard, .square').removeClass(colors[0]);
  $('.gameboard, .square').addClass(colors[1]);
  return player;
}

// Event listener
$($gameboard).on('click', 'div', getPick);
