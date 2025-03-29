var clicked = false;
document.body.onclick = function () {
  if (!clicked) {
    clicked = !clicked;
    document.body.innerHTML = "";
    load_puzzle();
  }
};
function load_puzzle(){
  var puzzle_board = document.createElement("div");
  var temp_button = document.createElement("button");
  temp_button.textContent = "hi";
  puzzle_board.append(temp_button);
  document.body.append(puzzle_board);
}