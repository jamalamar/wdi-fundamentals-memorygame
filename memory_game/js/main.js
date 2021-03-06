
var cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png"
},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png"
},
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png"
}
];

var cardsInPlay = [];

var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
	} else {
	alert("Sorry, try again.");
	}
};

var flipCard = function (cardId) {
	
	cardsInPlay.push(cards[cardId].rank);
	
	console.log("User Flipped" + " " + cards[cardId].rank);	
	console.log(cards[cardId].suit);
	console.log(cards[cardId].cardImage);

	checkForMatch();
};


var createBoard = function () {
	for (var i = 0; i < createBoard.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', '"images/back.png"');
    document.cardElement.setAttribute('data-id', i);
}
};

document.querySelector('.game-board').appendChild(cardElement);
document.querySelectorAll('game-board').addEventListener('click', flipCard);


createBoard();

