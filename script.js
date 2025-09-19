const symbols = ["🍎", "🍎", "🍌", "🍌", "🍇", "🍇", "🍉", "🍉"];
let shuffledSymbols = symbols.sort(() => 0.5 - Math.random());
let selectedCards = [];
let matchedPairs = 0;

function createBoard() {
    const board = document.getElementById("gameBoard");
    shuffledSymbols.forEach((symbol, index) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.symbol = symbol;
        card.onclick = () => flipCard(card);
        board.appendChild(card);
    });
}

function flipCard(card) {
    if (selectedCards.length < 2 && !card.textContent) {
        card.textContent = card.dataset.symbol;
        selectedCards.push(card);
    }

    if (selectedCards.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

function checkMatch() {
    if (selectedCards[0].dataset.symbol === selectedCards[1].dataset.symbol) {
        matchedPairs++;
    } else {
        selectedCards.forEach(card => card.textContent = "");
    }
    selectedCards = [];
}

createBoard();
