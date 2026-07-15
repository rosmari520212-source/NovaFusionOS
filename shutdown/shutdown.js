function shutdownOS(){


document.getElementById("powerMenu").style.display="none";


document.getElementById("desktop").style.display="none";



let screen=document.createElement("div");


screen.id="shutdownScreen";


screen.style.display="flex";



screen.innerHTML=`

<h1>NovaFusion OS</h1>

<p>System shutting down...</p>

<div class="loader"></div>

`;



document.body.appendChild(screen);





setTimeout(()=>{


screen.innerHTML=`

<h1>NovaFusion OS is powered off</h1>


<button onclick="powerOn()">

▶ Turn On

</button>

`;



},4000);



}








function powerOn(){


let screen=document.getElementById("shutdownScreen");


screen.remove();



document.getElementById("boot").style.display="flex";



setTimeout(()=>{


document.getElementById("boot").style.display="none";


document.getElementById("login").style.display="flex";



},4000);



}








function restartOS(){


document.getElementById("powerMenu").style.display="none";


document.getElementById("desktop").style.display="none";


document.getElementById("boot").style.display="flex";



setTimeout(()=>{


document.getElementById("boot").style.display="none";


document.getElementById("login").style.display="flex";


},4000);



}








function logoutOS(){


document.getElementById("powerMenu").style.display="none";


document.getElementById("desktop").style.display="none";


document.getElementById("login").style.display="flex";



}
