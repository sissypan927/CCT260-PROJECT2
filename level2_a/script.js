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
  //Append number buttons
  for (let i = 1; i < 10; i++){
    var temp = document.createElement("button");
    temp.textContent = i;
    node.append(temp);
  }
  //append clear button
  var temp = document.createElement("button");
  temp.textContent = "CLEAR";
  node.append(temp);
  temp = document.createElement("button");
  //append 0 button
  temp.textContent = 0;
  node.append(temp);
  //append ENTER button
  temp = document.createElement("button");
  temp.textContent = "ENTER";
  node.append(temp);
  
  document.body.append(node);
  alert(document.body.innerHTML);
}