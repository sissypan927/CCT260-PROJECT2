var clicked = false;
document.body.onclick = function() { 
  
  if(!clicked){
    clicked = !clicked;
  }
  alert(clicked);
  display_riddle();
  ;}
function display_riddle(){
  document.body.innerHTML = '';
  var node = document.createElement("div");
  node.setAttribute("id", "div1");  
  var temp =  document.createTextNode("Water");
  
}