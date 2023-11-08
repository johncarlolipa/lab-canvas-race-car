// Add an event listener to the "Start Game" button
const startButton = document.getElementById("start-button");
startButton.addEventListener("click", startGame);

function startGame() {
  // Hide the game intro and show the game board
  const gameIntro = document.querySelector(".game-intro");
  const gameBoard = document.getElementById("game-board");
  gameIntro.style.display = "block";
  gameBoard.style.display = "block";

  // Get the canvas element and its 2d rendering context
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  // Create Image objects for the road and car
  const roadImage = new Image();
  const carImage = new Image();

  // Set the sources for the road and car images
  roadImage.src = "/images/road.png";
  carImage.src = "/images/car.png";

  // Once the road image is loaded, draw it on the canvas
  roadImage.onload = () => {
    carImage.onload = () => {
      // Once both images are loaded, draw the road image on the canvas
      ctx.drawImage(roadImage, 0, 0, canvas.width, canvas.height);

      // Draw the car image on top of the road
      ctx.drawImage(carImage, carX, carY, 60, 100); // Adjust width and height as needed
    };
  };
}

window.addEventListener("load", () => {
  let startBtn = document.querySelector("#start-button");

  startBtn.addEventListener("click", () => {
    startGame();
  });
});

// Define the initial position (x, y) for the car
let carX = 220;
const carY = 500;


