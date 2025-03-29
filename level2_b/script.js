var clicked = false;
document.body.onclick = function () {
  if (!clicked) {
    clicked = !clicked;
    document.body.innerHTML = "";
    load_puzzle();
  }
};
function load_puzzle(){
  
}