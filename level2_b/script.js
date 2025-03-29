var clicked = false;
var slot1 = false;
var slot2 = false;
var slot3 = false;
var slot4 = false;
var slot = 0;
var piece = 0;
document.body.onclick = function () {
  if (!clicked) {
    clicked = !clicked;
    load_instructions();
  }
};
function load_instructions() {
  document.body.innerHTML = "";
  
  var header = document.createElement("h1");
  header.textContent = "Instructions";
  var para = document.createElement("p");
  para.textContent =
    "Solve the jigsaw puzzle by clicking the piece then clicking the slot you want to place it in. You have 20 seconds.";
  var button = document.createElement("button");
  button.textContent = "Click to start the puzzle";
  button.addEventListener("click", load_puzzle);
  button.addEventListener("click", load_puzzle);
  document.body.append(header);
  document.body.append(para);
  document.body.append(button);
}
function load_puzzle() {
  document.body.innerHTML = "";

  var puzzle_board = document.createElement("div");
  var temp_button;
  var row = document.createElement("div");
  for(var i = 1; i < 5; i++){
    temp_button = document.createElement("button");
    temp_button.setAttribute("class", "puzzle-slot");
    temp_button.setAttribute("id", "puzzle-slot" + i);
    temp_button.addEventListener("click", () => check_puzzle(i.toString(), 0));
    temp_button.textContent = i;
    puzzle_board.append(temp_button);
    
    if(i == 2){
      puzzle_board.append(row);
      row = document.createElement("div");
    }
  }

  document.body.append(puzzle_board);
  
  var pieces  = document.createElement("div");
  var row = document.createElement("div");
  for(var i = 1; i < 5; i++){
    temp_button = document.createElement("button");
    temp_button.setAttribute("class", "puzzle-piece");
    temp_button.setAttribute("id", "puzzle-piece" + i);
    var index = i.toString();
    temp_button.addEventListener("click", () => check_puzzle(0, index));
    temp_button.textContent = i;
    pieces.append(temp_button);
  
  }
  document.body.append(pieces);
}
function check_puzzle(s, p){
  if(s != 0){
    slot = s;
  }
  else if(p != 0){
    piece = p;
  }
  if(slot != 0 && piece != 0){
    if(slot == piece){
      alert("yay")
    }
    else{
      alert("yeowch")
    }
  }
  alert(slot + " " + piece)
  
}
