var clicked = false;
document.body.onclick = function() { 
  
  if(!clicked){
    clicked = !clicked;
    document.body.innerHTML = '';
    display_riddle();
  }
  ;}
function display_riddle(){
  var node = document.createElement("div");
  node.setAttribute("id", "div1");
  node.setAttribute("class", "container");
  node.innerHTML = "<div id = 'display'>hi</div>";
  
  document.body.append(node);
  
  alert(document.body.innerHTML);
}