var clicked = false;
document.body.onclick = function () {
  if (!clicked) {
    clicked = !clicked;
    document.body.innerHTML = "";
    load_instructions();
  }
};
function load_instructions(){
  var header = document.createElement("h1");
  header.textContent = "Instructions";
  var para = document.createElement("p");
  para.textContent = "Solve the jigsaw puzzle by clicking the piece then clicking the slot you want to place it in. You have 20 seconds."
  var button = document.createElement("button");
  button.textContent = "Click to start the puzzle";
  button.addEventListener("click", load_puzzle);
  document.body.append(header);
  document.body.append(para);
  document.body.append(button);
}
function load_puzzle(){
  var puzzle_board = document.createElement("div");
  var temp_button = document.createElement("button");
  temp_button.textContent = "hi";
  puzzle_board.append(temp_button);
  document.body.append(puzzle_board);
}