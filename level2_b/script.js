var clicked = false;
var slot1 = false;
var slot2 = false;
var slot3 = false;
var slot4 = false;
var slot = 0;
var piece = 0;
var x;
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
  var timer = document.createElement("h1");
  timer.innerHTML = "Time remaining: 20 second(s)";
  timer.setAttribute("id", "timer");
  x = setInterval(time_up, 1000);
  document.body.append(timer);

  var puzzle_board = document.createElement("div");
  var temp_button;
  var row = document.createElement("div");
  for (let i = 1; i < 5; i++) {
    temp_button = document.createElement("button");
    temp_button.setAttribute("class", "puzzle-slot");
    temp_button.setAttribute("id", "puzzle-slot" + i);
    temp_button.addEventListener("click", () => check_puzzle(i, 0));
    temp_button.textContent = i;
    puzzle_board.append(temp_button);

    if (i == 2) {
      puzzle_board.append(row);
      row = document.createElement("div");
    }
  }

  document.body.append(puzzle_board);

  var pieces = document.createElement("div");
  var row = document.createElement("div");
  for (let i = 1; i < 5; i++) {
    temp_button = document.createElement("button");
    temp_button.setAttribute("class", "puzzle-piece");
    temp_button.setAttribute("id", "puzzle-piece" + i);
    temp_button.textContent = i;
    temp_button.addEventListener("click", () => check_puzzle(0, i));
    pieces.append(temp_button);
  }
  var children = pieces.children;
  var new_list = [children[1], children[3], children[2], children[0]];
  pieces.innerHTML = "";
  for (let i = 0; i < 4; i++) {
    pieces.append(new_list[i]);
  }

  document.body.append(pieces);
}
function check_puzzle(s, p) {
  if (s != 0) {
    slot = s;
  } else if (p != 0) {
    piece = p;
  }
  if (slot != 0 && piece != 0) {
    if (slot == piece) {
      var dest_slot = document.getElementById("puzzle-slot" + slot);
      var piece_style = window.getComputedStyle(
        document.getElementById("puzzle-piece" + piece)
      );
      var new_img = piece_style.getPropertyValue("background-image");
      dest_slot.style.backgroundImage = new_img;
      dest_slot.style.borderStyle = "none";

      if (slot == 1) {
        slot1 = true;
      } else if (slot == 2) {
        slot2 = true;
      } else if (slot == 3) {
        slot3 = true;
      } else if (slot == 4) {
        slot4 = true;
      }

      document.getElementById("puzzle-piece" + piece).remove();
      document.getElementById("puzzle-slot" + slot).blur();
      slot = 0;
      piece = 0;
    } else {
      document.getElementById("puzzle-piece" + piece).blur();
      document.getElementById("puzzle-slot" + slot).blur();
      slot = 0;
      piece = 0;
    }
    if (slot1 && slot2 && slot3 && slot4) {
      document.body.innerHTML = "";
      var div = document.createElement("div");
      var heading = document.createElement("h1");
      heading.textContent = "You solved the puzzle and got a map!";
      div.append(heading);
      var audio = document.createElement("audio");
      audio.setAttribute(
        "src",
        "https://cdn.glitch.global/4a7df820-baeb-4964-a116-d8ae284b35e2/key.mp3?v=1743261972450"
      );
      audio.play();
      var button = document.createElement("button");
      button.textContent = "Continue";
      button.setAttribute("id", "continue_button");
      button.addEventListener("click", navigate_next_level);
      div.append(button);
      document.body.append(div);
      clearInterval(x);
    }
  }
}

var time_left = 20;
function time_up() {
  if (time_left == 0 && (!slot1 || !slot2 || !slot3 || !slot4)) {
    window.location.href = "../ending-2/ending-2.html";
  } else {
    time_left -= 1;
    document.getElementById("timer").innerHTML =
      "Time remaining: " + time_left + " second(s)";
  }
}
function navigate_next_level() {
  window.location.href = "../level3_b/level3_b.html";
}
