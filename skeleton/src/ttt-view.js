class View {
  constructor(game, el) {}

  setupBoard() {
    const board = document.createElement("ul");
    let cell;
    for(let i = 0; i < 3; i++) {
      for(let j = 0; j < 3; j++){
        cell = document.createElement("li");
        cell.innerText = "";
        cell.setAttribute("data-pos", `[${i}, ${j}]`); 
        board.appendChild(cell);
      }
    }
  }
  
  bindEvents() {}

  handleClick(e) {}

  makeMove(square) {}

}

module.exports = View;
