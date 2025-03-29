var clicked = false;
document.body.onclick = function() { 
  
  if(!clicked){
    clicked = !clicked;
    document.body.innerHTML = '';
    display_riddle();
  }
  ;}
function display_riddle(){
  var
  var node = document.createElement("div");
  node.setAttribute("id", "keypad");
  node.setAttribute("class", "container");
  node.innerHTML = "<div id = 'display'><p>hi</p></div>";
  
  var row = document.createElement("div");
  row.setAttribute("id", "row-1");
  node.setAttribute("class", "rows");
  //Append number buttons
  for (let i = 1; i < 10; i++){
    var temp = document.createElement("button");
    temp.textContent = i;
    row.append(temp);
    if(i%3 == 0){
      node.append(row);
      row = document.createElement("div");
      row.setAttribute("id", "row"+((i/3)+1));
      node.setAttribute("class", "rows");
    }
    
  }
  //append clear button
  var temp = document.createElement("button");
  temp.textContent = "CLEAR";
  row.append(temp);
  temp = document.createElement("button");
  //append 0 button
  temp.textContent = 0;
  row.append(temp);
  //append ENTER button
  temp = document.createElement("button");
  temp.textContent = "ENTER";
  row.append(temp);
  
  node.append(row);
  
  document.body.append(node);
  alert(document.body.innerHTML);
}