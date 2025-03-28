var clicked = false;
document.body.onclick = function() { 
  
  if(!clicked){
    clicked = !clicked;
    display_riddle();
  }
  ;}
function display_riddle(){
  document.body.innerHTML = '';
  var node = document.createElement("div");
  node.innerHTML = "<p>hi</p>";
  alert(clicked);
}