function openVirusWarning(){


let warning=document.createElement("div");


warning.id="virusWarning";


warning.innerHTML=`

<h2>⚠️ WARNING</h2>

<p>
You are about to start the NovaFusion Virus Simulation.
</p>

<p>
This will lock the fake OS.
</p>


<button onclick="startVirus()">
YES
</button>


<button onclick="closeVirusWarning()">
NO
</button>

`;



document.body.appendChild(warning);



}




function closeVirusWarning(){


let warning=document.getElementById("virusWarning");


if(warning){

warning.remove();

}


}







function startVirus(){


closeVirusWarning();



document.body.classList.add("glitch");



let sound=document.getElementById("horrorSound");


if(sound){

sound.play().catch(()=>{});

}





setTimeout(function(){



document.getElementById("desktop").style.display="none";



let horror=document.createElement("div");


horror.id="horror";


horror.style.display="flex";


horror.innerHTML="👹";



document.body.appendChild(horror);



},3000);







setTimeout(function(){


document.getElementById("horror").remove();



showRecovery();



},7000);




}








function showRecovery(){



let recovery=document.createElement("div");


recovery.id="recovery";



recovery.innerHTML=`

<h1>NovaFusion Recovery</h1>

<p>
System locked.
</p>

<p>
Enter recovery code:
</p>


<input id="recoveryCode">


<br>


<button onclick="checkRecovery()">
Unlock
</button>

`;



document.body.appendChild(recovery);



}








function checkRecovery(){



let code=document.getElementById("recoveryCode").value;



if(code==="5404"){



document.getElementById("recovery").remove();



document.getElementById("desktop").style.display="block";


document.body.classList.remove("glitch");



alert("NovaFusion OS restored!");



}

else{


alert("Incorrect recovery code");


}



}
