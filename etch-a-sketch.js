let rowsCount = 10;
let containerSize = 920;
let color = "blue";

let gridContainer = document.querySelector(".container");
let changeSquaresPerSideButton = document.querySelector(
  ".squares-per-side-button",
);

buildGrid(rowsCount, containerSize, color);

gridContainer.addEventListener("mouseover", function (e) {
  if (e.target.classList.contains("cell")) {
    e.target.style.backgroundColor = color;
  }
});
changeSquaresPerSideButton.addEventListener("click", (e) => {
  let squaresPerSide = prompt("Set new squares per side:");
  squaresPerSide = parseInt(squaresPerSide);

  removeGrid();
  buildGrid(squaresPerSide, containerSize, color);
});

function buildGrid(rowsCount, containerSize, color) {
  gridContainer.style.width = `${containerSize}px`;
  gridContainer.style.height = `${containerSize}px`;

  let cellSize = Math.floor(containerSize / rowsCount);
  buildCells(gridContainer, rowsCount, cellSize);
}

function removeGrid() {
  gridContainer.innerHTML = "";
}

function buildCells(gridContainer, rowsCount, cellSize) {
  for (let i = 0; i < rowsCount ** 2; ++i) {
    let cell = document.createElement("div");
    cell.style.width = `${cellSize}px`;
    cell.style.height = `${cellSize}px`;
    cell.className = "cell";
    gridContainer.appendChild(cell);
  }
}
