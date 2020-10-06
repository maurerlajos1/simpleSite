var btn = document.getElementById("go-button");

function buttonClicked()
{
console.log("button clicked");
//btn.removeEventListener("click", buttonClicked);
//document.getElementById("text").innerHTML =("Ne csináld!");
var costumText = document.getElementsByClassName("m-input");
var resoults = document.getElementById("text");
console.log(costumText);
resoults.innerHTML = "Hello, " +costumText[0].value;
}

btn.addEventListener("click", buttonClicked);

//textareas and getting value of an input



















/*
//arrays

var hobbies = ["pizza","gaming","reading","programming",
"music"];


console.log("I no longer enjoy ",hobbies.pop());

hobbies.push("archery");
console.log(hobbies.shift());
hobbies.unshift("boxing");


if(hobbies.indexOf('reading')> -1){
    console.log("I like reading")
}

if(hobbies.indexOf('sports')=== -1)
{
    console.log("Sports not in array")
}


*/ 