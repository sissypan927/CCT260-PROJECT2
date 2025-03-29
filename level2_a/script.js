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
  for (let i = 1; i < 10; i++){
    var temp = document.createElement("button");
    temp.textContent = i;
    node.append(temp);
  }
  var temp = document.createElement("button");
  temp.textContent = 0;
  node.append(temp);
  temp = document.createElement("button");
  temp.textContent = "DEL";
  node.append(temp);
  document.body.append(node);
  alert(document.body.innerHTML);
}