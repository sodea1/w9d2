class View {
  constructor(game, el) {

    this.el = el;
    this.game = game;
    this.setupBoard();

  }

  setupBoard() {
    const board = document.createElement("ul");
    let cell;
    for(let i = 0; i < 3; i++) {
      for(let j = 0; j < 3; j++){
        cell = document.createElement("li");
        cell.innerText = "";
        cell.setAttribute("data-pos", `[${i}, ${j}]`); 
        cell.classList.toggle('cell'); 
        board.appendChild(cell);
      }
    }

    
    this.el.appendChild(board); 


  }
  
  bindEvents() {}

  handleClick(e) {}

  makeMove(square) {}

}

module.exports = View;
