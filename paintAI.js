// Nova Paint AI Artist
// With Close Button


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



<br>


<button onclick="aiDraw()">

Draw

</button>



<button onclick="closePaintAI()">

Close

</button>




<p>

Examples:

<br>

blue star top middle

<br>

red circle center

<br>

yellow square bottom right

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



if(command.includes("red")) color="red";

if(command.includes("green")) color="green";

if(command.includes("yellow")) color="yellow";

if(command.includes("purple")) color="purple";







let x=canvas.width/2;

let y=canvas.height/2;





if(command.includes("top middle")){

x=400;
y=80;

}


else if(command.includes("top left")){

x=100;
y=80;

}


else if(command.includes("top right")){

x=700;
y=80;

}


else if(command.includes("bottom left")){

x=100;
y=400;

}


else if(command.includes("bottom right")){

x=700;
y=400;

}







if(command.includes("star")){


drawStar(ctx,x,y,50,color);


}



else if(command.includes("circle")){


ctx.fillStyle=color;


ctx.beginPath();


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

x-40,

y-40,

80,

80

);


}



else{


alert("Nova AI does not know this shape yet.");

}



}








function drawStar(ctx,x,y,size,color){



ctx.fillStyle=color;


ctx.beginPath();



for(let i=0;i<10;i++){


let angle=Math.PI/2+i*Math.PI/5;


let radius=i%2===0 ? size : size/2;



let px=x+Math.cos(angle)*radius;


let py=y-Math.sin(angle)*radius;



if(i===0)

ctx.moveTo(px,py);

else

ctx.lineTo(px,py);



}



ctx.closePath();


ctx.fill();



}