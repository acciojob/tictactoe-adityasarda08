const player1Input = document.getElementById("player1");
const player2Input = document.getElementById("player2");
const submitBtn = document.getElementById("submit");
const message = document.querySelector(".message");
const game = document.getElementById("game");
const form = document.getElementById("player-form");
const cells = document.querySelectorAll(".cell");

let player1 = "";
let player2 = "";
let currentPlayer = "";
let currentSymbol = "x";
let gameOver = false;

// Winning combinations
const winPatterns = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
  ["1", "4", "7"],
  ["2", "5", "8"],
  ["3", "6", "9"],
  ["1", "5", "9"],
  ["3", "5", "7"]
];

submitBtn.addEventListener("click", () => {
  player1 = player1Input.value.trim();
  player2 = player2Input.value.trim();

  if (!player1 || !player2) return;

  form.style.display = "none";
  game.style.display = "block";

  currentPlayer = player1;
  currentSymbol = "x";
  gameOver = false;

  // IMPORTANT: exact message
  message.innerText = `${currentPlayer}, you're up`;
});

function checkWinner(symbol) {
  return winPatterns.some(pattern =>
    pattern.every(id =>
      document.getElementById(id).innerText === symbol
    )
  );
}

cells.forEach(cell => {
  cell.addEventListener("click", () => {
    if (cell.innerText !== "" || gameOver) return;

    cell.innerText = currentSymbol;

    if (checkWinner(currentSymbol)) {
      gameOver = true;
      message.innerText = `${currentPlayer} congratulations you won!`;
      return;
    }

    // Switch turn
    if (currentSymbol === "x") {
      currentSymbol = "o";
      currentPlayer = player2;
    } else {
      currentSymbol = "x";
      currentPlayer = player1;
    }

    message.innerText = `${currentPlayer}, you're up`;
  });
});
