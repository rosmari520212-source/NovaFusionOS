// NovaFusion OS Updater


const novaVersion = "1.0";


function checkNovaUpdates(){


fetch("updates/version.json")

.then(response => response.json())

.then(data => {



if(data.version !== novaVersion){


showUpdateWindow(data);


}

else{


console.log(
"NovaFusion is up to date"
);


}



})


.catch(error=>{


console.log(
"Update check failed",
error
);


});


}







function showUpdateWindow(update){


let box=document.createElement("div");


box.id="updateWindow";



box.innerHTML=`

<h2>⬆️ NovaFusion Update</h2>


<p>
New version available:
${update.version}
</p>


<p>
${update.updateMessage}
</p>


<button onclick="installNovaUpdate()">

Install Update

</button>



<button onclick="closeUpdateWindow()">

Later

</button>


`;



document.body.appendChild(box);


}







function installNovaUpdate(){


alert(
"NovaFusion update installed!"
);


location.reload();


}







function closeUpdateWindow(){


document.getElementById(
"updateWindow"
).remove();


}





window.addEventListener(
"load",
()=>{

checkNovaUpdates();

}
);
