console.log("Up and running!");

var cards = [
  {
  	rank: "queen",
  	suit: "hearts",
  	cardImage: "images1/queen-of-hearts.png"
  },

  {
  	rank: "queen",
  	suit: "diamonds",
  	cardImage: "images1/queen-of-diamonds.png"
  },

  {
  	rank: "king",
  	suit: "hearts",
  	cardImage: "images1/king-of-hearts.png"
  },

  {
  	rank: "king",
  	suit: "diamonds",
  	cardImage: "images1/king-of-diamonds.png"
  }
	
];
var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	    } else {
		alert("Sorry, try again.");
	    };
	};


var flipCard = function() {
	var cardId = this.setAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}

 };

 var createBoard = function () {
 	for (var i = 0; i < cards.length; i++) {
 		var cardElement = document.createElement('img');
 		cardElement.setAttribute('scr', 'images1/back.png');
 		cardElement.setAttribute('data-id', 'i');
 		cardElement.addEventListener('click', flipCard);
 		document.getElementById('game-board').appendChild(cardElement);
 	}
 };

createBoard();





