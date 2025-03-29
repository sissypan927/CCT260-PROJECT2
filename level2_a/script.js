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
  container.setAttribute("id", "content");
  
  var node = document.createElement("div");
  var heading = document.createElement("h1");
  node.setAttribute("id", "riddle");
  heading.textContent = "Riddle:";
  var riddle = document.createElement("p");
  riddle.append("I am a five-digit number. The sum of my digits is 25, and exactly");
  riddle.append(document.createElement("br"))
  riddle.append("one digit repeats consecutively (like '22'). My second digit is");
  riddle.append(document.createElement("br"))
  riddle.append("larger than both my first and third digits. My ten-thousands digit is");
  riddle.append(document.createElement("br"))
  riddle.append("4, and my ones digit is 7. My hundreds digit is even and smaller");
  riddle.append(document.createElement("br"))
  riddle.append("than my tens digit. No digit appears more than twice in the");
  riddle.append(document.createElement("br"))
  riddle.append("number. What number am I?"); 
  node.append(riddle);
  
  node.append(heading);
  node.append(riddle);
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