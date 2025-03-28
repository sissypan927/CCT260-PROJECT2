var clicked = false;
document.body.onclick = function() { 
  
  if(!clicked){
    clicked = !clicked;
  }
  alert(clicked)
  ;}