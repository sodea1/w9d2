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
    this.el.addEventListener("click", this.handleClick.bind(this)); 
    // view.handleClick
  }

  handleClick(e) {
 
    let ourTarget = e.target;
    this.makeMove(ourTarget);
  }

  makeMove(square) {
    debugger;
    let pos = square.getAttribute("data-pos");

    this.game.playMove(pos); 
    let cell = document.querySelector(`li[data-pos=${pos}]`); 
    cell.innerText = 'X'; 
  }

}

module.exports = View;
