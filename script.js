const hex=[0,1,2,3,4,5,6,"A","B","C","D","E","F"];
const button=document.getElementById("btn");
const color=document.querySelector(".color");

button.addEventListener("click",change_color);
function change_color(){
  let hexColor="#";
  
  for(let i=0;i<6;i++){
    var x=Math.floor(Math.random() * 12);
    hexColor+=hex[x];
    
  }
  color.textContent=hexColor;
  console.log("wtf");
  document.body.style.backgroundColor=hexColor;// what actually changes the background
  
}