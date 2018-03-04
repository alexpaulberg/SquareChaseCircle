window.onload = function() {



//square movement
function moveleft()
{
	var square=document.getElementById("square")
	var position = square.style.left 
	position = position.replace("px","")
	position = position - 10
	position = position + "px"
	square.style.left=position
	collision()
}


function moveright()
{
	var square=document.getElementById("square")
	var position = square.style.left 
	position = position.replace("px","")
	position = Number(position) + 10
	position = position + "px"
	square.style.left=position
	collision()
}

function moveup()
{
	var square=document.getElementById("square")
	var position = square.style.top 
	position = position.replace("px","")
	position = Number(position) - 10
	position = position + "px"
	square.style.top=position
	collision()
}

function movedown()
{
	var square=document.getElementById("square")
	var position = square.style.top 
	position = position.replace("px","")
	position = Number(position) + 10
	position = position + "px"
	square.style.top=position
	collision()
}

//key listeners
document.onkeydown=function(event)
{
	console.log(event)
	if(event.key=="ArrowLeft")
	{
		moveleft()
	}
	if(event.key=="ArrowRight")
	{
		moveright()
	}
	if(event.key=="ArrowUp")
	{
		moveup()
	}
	if(event.key=="ArrowDown")
	{
		movedown()
	}

}	


//circle creation
function creation()
{
	var circle = document.createElement("div")
	circle.id="circle"
	var x = Math.random()*window.innerWidth
	var y = Math.random()*window.innerHeight
	circle.style.top = y + "px"
	circle.style.left = x + "px"
	document.body.append(circle)
}

creation()

//collision detection
function collision()
{	var square=document.getElementById("square")
	var circle = document.getElementById("circle")
	var squarex = Number(square.style.left.replace("px","")) + 25
	var squarey = Number(square.style.top.replace("px",""))	 +25
	var circlex = Number(circle.style.left.replace("px","")) +25	
	var circley = Number(circle.style.top.replace("px",""))  +25
	var distance = Math.pow(Math.pow((squarex - circlex),2) + Math.pow((squarey - circley),2),(1/2))

	if(distance<50)
	{
		circle.remove()
		creation()
	}

}


}