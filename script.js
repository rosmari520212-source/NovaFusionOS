window.onload=function(){


let boot=document.getElementById("bootSound");


boot.play().catch(()=>{

console.log("Boot sound waiting");

});



setTimeout(function(){


document.getElementById("boot").style.display="none";


document.getElementById("login").style.display="flex";



},4000);



};








function login(){


document.getElementById("login").style.display="none";


document.getElementById("desktop").style.display="block";


}










// CLOCK


setInterval(function(){


let time=new Date();


document.getElementById("clock").innerHTML=
time.toLocaleTimeString();



},1000);











// START MENU


document.getElementById("startButton").onclick=function(){


let menu=document.getElementById("startMenu");



if(menu.style.display==="block"){


menu.style.display="none";


}

else{


menu.style.display="block";


}


};








// NOVA PAINT START


function launchPaint(){


if(typeof openNovaPaint==="function"){

openNovaPaint();

}


}