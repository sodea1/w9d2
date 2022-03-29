class View {
  constructor(game, el) {

    this.el = el;
    this.game = game;
    this.setupBoard();
    this.bindEvents();
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
  
  bindEvents() {
    this.el.addEventListener("click", this.handleClick); 
    // view.handleClick
 
  }

  handleClick(e) {
   debugger;
    let ourTarget = e.target;
    this.makeMove(ourTarget);
  }

  makeMove(square) {
    let pos = square.data-pos;
    debugger;
    this.game.playMove(pos); 
  }

}

module.exports = View;
