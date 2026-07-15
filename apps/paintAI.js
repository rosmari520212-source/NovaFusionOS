// Nova Paint AI Artist
// Full version with close button and drawing commands


function openPaintAI(){


let old=document.getElementById("paintAI");


if(old){
    old.remove();
}



let ai=document.createElement("div");

ai.id="paintAI";



ai.innerHTML=`

<h2>🤖 Nova AI Artist</h2>


<input id="aiCommand" 
placeholder="Example: blue star top middle">


<br><br>


<button onclick="aiDraw()">
🎨 Draw
</button>


<button onclick="closePaintAI()">
❌ Close
</button>



<p>
Commands:
<br>
blue star top middle
<br>
red circle center
<br>
yellow square bottom right
<br>
green star top left
</p>

`;



document.body.appendChild(ai);



}








function closePaintAI(){


let ai=document.getElementById("paintAI");


if(ai){

ai.remove();

}


}










function aiDraw(){



let command=document
.getElementById("aiCommand")
.value
.toLowerCase();




let canvas=document.getElementById("paintCanvas");



if(!canvas){

alert("Open Nova Paint first!");

return;

}



let ctx=canvas.getContext("2d");





let color="blue";



if(command.includes("red"))
color="red";


if(command.includes("green"))
color="green";


if(command.includes("yellow"))
color="yellow";


if(command.includes("purple"))
color="purple";


if(command.includes("black"))
color="black";







let x=canvas.width/2;

let y=canvas.height/2;






// Positions


if(command.includes("top middle")){

x=canvas.width/2;
y=80;

}


if(command.includes("top left")){

x=100;
y=80;

}


if(command.includes("top right")){

x=700;
y=80;

}


if(command.includes("center")){

x=canvas.width/2;
y=canvas.height/2;

}


if(command.includes("bottom left")){

x=100;
y=420;

}


if(command.includes("bottom right")){

x=700;
y=420;

}









if(command.includes("star")){


drawStar(

ctx,

x,

y,

60,

color

);


}




else if(command.includes("circle")){


ctx.beginPath();


ctx.fillStyle=color;


ctx.arc(

x,

y,

50,

0,

Math.PI*2

);


ctx.fill();


}







else if(command.includes("square")){


ctx.fillStyle=color;


ctx.fillRect(

x-50,

y-50,

100,

100

);


}







else{


alert(
"Nova AI: I don't know that shape yet."
);


}



}









function drawStar(ctx,x,y,size,color){



ctx.fillStyle=color;


ctx.beginPath();



for(let i=0;i<10;i++){


let angle =
Math.PI / 2 +
i * Math.PI / 5;



let radius =
(i % 2 === 0)
?
size
:
size / 2;



let px =
x + Math.cos(angle) * radius;



let py =
y - Math.sin(angle) * radius;



if(i===0){

ctx.moveTo(px,py);

}

else{

ctx.lineTo(px,py);

}


}



ctx.closePath();


ctx.fill();


}