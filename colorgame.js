var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#msg");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyBtn = document.querySelector("#easybtn");
var hardBtn = document.querySelector("#hardbtn");



easyBtn.addEventListener("click",function(){
   hardBtn.classList.remove("selected");
   easyBtn.classList.add("selected");
   numberOfSquares = 3;
   colors = generateRandomColors(numberOfSquares);
   pickedColor = pickColor();
   colorDisplay.textContent = pickedColor;
   for(var i = 0;i<squares.length;i++){
   	  if(colors[i]){
   	  	squares[i].style.backgroundColor = colors[i];
   	  }
   	  else{
   	  	squares[i].style.display = "none";
   	  }
   }


})
hardBtn.addEventListener("click",function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numberOfSquares = 6;
    colors = generateRandomColors(numberOfSquares);
   pickedColor = pickColor();
   colorDisplay.textContent = pickedColor;
   for(var i = 0;i<squares.length;i++){
   	  	squares[i].style.backgroundColor = colors[i];
   	  	squares[i].style.display = "block";
   	  }
   
})



resetButton.addEventListener("click", function(){
	  colors = generateRandomColors(numberOfSquares);
	  pickedColor = pickColor();
	  colorDisplay.textContent = pickedColor;
	  message.textContent = "";
	  this.textContent = "New Colors";
	  for (var i = 0; i < squares.length;i++ ){
      squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "steelblue";
})

colorDisplay.textContent = pickedColor;





for (var i = 0; i < squares.length;i++ ){
      squares[i].style.backgroundColor = colors[i];
      squares[i].addEventListener("click",function(){
      	if(this.style.backgroundColor === pickedColor){
      		message.textContent = "Correct";
      		changeColors(pickedColor);
      		h1.style.backgroundColor = pickedColor;
      		resetButton.textContent = "Play Again";
      		}
      	else{
      		this.style.backgroundColor = "#232323";
      		message.textContent = "Try AGain";
      	}
      })
  }


function changeColors(color)
{
	for (var i = 0; i < squares.length;i++ ){
      squares[i].style.backgroundColor = color;
}
}

function pickColor(){
	var rand = Math.floor(Math.random()*colors.length);
	return colors[rand];
}


function generateRandomColors(num)
{
	var arr = [];
    for(var i = 0;i< num;i++)
    {
       arr.push(randomColor());
    }
	return arr;
}
function randomColor()
{
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}