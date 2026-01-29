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

submitBtn.addEventListener("click", () => {
  player1 = player1Input.value.trim();
  player2 = player2Input.value.trim();

  if (!player1 || !player2) return;

  form.style.display = "none";
  game.style.display = "block";

  currentPlayer = player1;
  currentSymbol = "x";
  message.innerText = `${currentPlayer}, you're up`;
});

cells.forEach(cell => {
  cell.addEventListener("click", () => {
    if (cell.innerText !== "" || gameOver) return;

    cell.innerText = currentSymbol;

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
