var clicked = false;
var puzzle_start = false;
document.body.onclick = function() { 
  
  if(!clicked){
    clicked = !clicked;
    document.body.innerHTML = '';
    display_riddle();
  }
  ;}
function display_riddle(){
  // var container = document.createElement("div");
  var container = document.createElement("div");
  node2.setAttribute("id", "content");
  
  var node = document.createElement("div");
  var heading = document.createElement("h1");
  node.setAttribute("id", "riddle");
  heading.textContent = "Riddle:";
  node.append(heading);
  container.append(node);
  
  
  var node2 = document.createElement("div");
  node2.setAttribute("id", "keypad");
  node2.innerHTML = "<div id = 'display'><p>Key in your answer using the keypad...</p></div>";
  
  var row = document.createElement("div");
  row.setAttribute("id", "row-1");
  node2.setAttribute("class", "rows");
  //Append number buttons
  for (let i = 1; i < 10; i++){
    var temp = document.createElement("button");
    temp.textContent = i;
    temp.addEventListener("click", () => enter_number(i));
    row.append(temp);
    if(i%3 == 0){
      node2.append(row);
      row = document.createElement("div");
      row.setAttribute("id", "row"+((i/3)+1));
      node2.setAttribute("class", "rows");
    }
    
  }
  //append clear button
  var temp = document.createElement("button");
  temp.textContent = "CLEAR";
  temp.addEventListener("click", clear_ans);
  row.append(temp);
  temp = document.createElement("button");
  //append 0 button
  temp.textContent = 0;
  row.append(temp);
  temp.addEventListener("click", () => enter_number(0));
  //append ENTER button
  temp = document.createElement("button");
  temp.textContent = "ENTER";
  temp.addEventListener("click", submit_ans);
  row.append(temp);
  
  node2.append(row);
  
  container.append(node2);
  document.body.append(container);
}
function clear_ans(){
  document.getElementById("display").innerHTML = "<p></p>";
}
function enter_number(number){
  var curr = document.getElementById("display").textContent;
  if(curr == "Key in your answer using the keypad..."){
     document.getElementById("display").innerHTML =  "";
    curr = "";
  }
  if (curr.length < 5){
     document.getElementById("display").innerHTML = "<p>" + curr + number +"</p>"; 
  }
}
function submit_ans(){
  var curr = document.getElementById("display").textContent;
  if(curr == "45277"){
    alert("yay");
  }
  else{
    alert("ohno..");
  }
}