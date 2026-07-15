// NovaFusion OS Core


const Nova = {

version: "1.0",

settings: {

theme: "blue",

wallpaper: "default"

},

apps: {}

};




// STORAGE


function saveNova(){

localStorage.setItem(
"NovaFusion",
JSON.stringify(Nova)
);

}



function loadNova(){

let data = localStorage.getItem(
"NovaFusion"
);


if(data){

Object.assign(
Nova,
JSON.parse(data)
);

}


}


loadNova();






// BOOT SYSTEM WITH SOUND FIX


window.onload = function(){


let bootSound = document.getElementById(
"bootSound"
);



let boot = document.getElementById(
"boot"
);



let loginScreen = document.getElementById(
"login"
);



if(boot){

setTimeout(()=>{


boot.style.display="none";


if(loginScreen){

loginScreen.style.display="flex";

}


},4000);


}





// Sound waits for user click

document.addEventListener(
"click",

function playBootSound(){


if(bootSound){


bootSound.play().catch(()=>{});


}



document.removeEventListener(
"click",
playBootSound
);



}

);



};








// LOGIN


function login(){


let loginScreen =
document.getElementById("login");


let desktop =
document.getElementById("desktop");



if(loginScreen){

loginScreen.style.display="none";

}



if(desktop){

desktop.style.display="block";

}



loadApps();


}








// CLOCK


setInterval(()=>{


let clock =
document.getElementById("clock");



if(clock){

clock.innerHTML =
new Date().toLocaleTimeString();

}



},1000);








// START MENU


function openStart(){


let menu =
document.getElementById("startMenu");



if(!menu){

return;

}



if(menu.style.display==="block"){


menu.style.display="none";


}

else{


menu.style.display="block";


}


}








// APP SYSTEM


function registerApp(
name,
icon,
openFunction
){


Nova.apps[name]={

icon:icon,

open:openFunction

};


saveNova();


}







function loadApps(){


console.log(
"NovaFusion apps loaded"
);


}









// WINDOW SYSTEM


function createWindow(
id,
title,
content
){



let old =
document.getElementById(id);



if(old){

old.remove();

}



let win =
document.createElement("div");



win.id=id;


win.className="novaWindow";



win.innerHTML = `

<div class="windowTop">

${title}

<button onclick="closeWindow('${id}')">

X

</button>

</div>


<div class="windowContent">

${content}

</div>

`;



document.body.appendChild(win);



}







function closeWindow(id){


let win =
document.getElementById(id);



if(win){

win.remove();

}


}









// SETTINGS STORAGE


function setNovaSetting(
name,
value
){


Nova.settings[name]=value;


saveNova();


}









// UPDATER CONNECTION


function openUpdater(){


if(typeof NovaUpdater === "function"){


NovaUpdater();


}

else{


alert(
"Updater not loaded"
);


}


}
