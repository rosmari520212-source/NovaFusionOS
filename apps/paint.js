// Nova Paint
// Connected with Nova Paint AI Artist


let paintCanvas;
let paintCtx;

let drawing=false;

let lastX=0;
let lastY=0;

let brushColor="#000000";
let brushSize=5;




function openNovaPaint(){



let old=document.getElementById("paintWindow");


if(old){

old.remove();

}






let app=document.createElement("div");


app.id="paintWindow";



app.innerHTML=`

<div class="paintHeader">

<h2>🎨 Nova Paint</h2>


<button onclick="closeNovaPaint()">

X

</button>

</div>





<div class="paintOptions">


<input type="color" id="paintColor">


<input type="range"
id="paintSize"
min="1"
max="50"
value="5">



<button onclick="useEraser()">

🧽 Eraser

</button>



<button onclick="clearPaint()">

🗑 Clear

</button>



<button onclick="savePaint()">

💾 Save

</button>



<button onclick="openPaintAI()">

🤖 Nova AI Artist

</button>



</div>





<canvas id="paintCanvas"
width="800"
height="500">
</canvas>

`;





document.body.appendChild(app);





paintCanvas=document.getElementById("paintCanvas");


paintCtx=paintCanvas.getContext("2d");





paintCtx.fillStyle="white";


paintCtx.fillRect(

0,

0,

paintCanvas.width,

paintCanvas.height

);





document.getElementById("paintColor").onchange=function(){

brushColor=this.value;

};





document.getElementById("paintSize").oninput=function(){

brushSize=this.value;

};







paintCanvas.onmousedown=function(e){


drawing=true;


lastX=e.offsetX;

lastY=e.offsetY;


};








paintCanvas.onmousemove=function(e){


if(!drawing)return;



paintCtx.beginPath();



paintCtx.moveTo(

lastX,

lastY

);



paintCtx.lineTo(

e.offsetX,

e.offsetY

);




paintCtx.strokeStyle=brushColor;


paintCtx.lineWidth=brushSize;


paintCtx.lineCap="round";



paintCtx.stroke();



lastX=e.offsetX;

lastY=e.offsetY;



};








paintCanvas.onmouseup=function(){


drawing=false;


};



}









function useEraser(){


brushColor="white";


}









function clearPaint(){



paintCtx.fillStyle="white";



paintCtx.fillRect(

0,

0,

paintCanvas.width,

paintCanvas.height

);



}









function savePaint(){


let image=document.createElement("a");


image.download="NovaPaint.png";


image.href=paintCanvas.toDataURL();



image.click();



}









function closeNovaPaint(){



let app=document.getElementById("paintWindow");



if(app){

app.remove();

}


}
