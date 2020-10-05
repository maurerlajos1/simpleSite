var btn = document.getElementById("go-button");

function buttonClicked()
{
console.log("button clicked");
btn.removeEventListener("click", buttonClicked);
document.getElementById("text").innerHTML =("Ne csináld!");
console.log(document.getElementById("text").innerHTML);
}





btn.addEventListener("click", buttonClicked);