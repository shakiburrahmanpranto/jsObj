console.log("this is an event");

const blueButton = document.getElementById("make_blue");
//console.log(blueButton);
blueButton.addEventListener("click", makeBlue);
function makeBlue() {
  document.body.style.backgroundColor = "blue";
}

const greenButton = document.getElementById("make_green");
greenButton.addEventListener("click", function makeGreen() {
  document.body.style.backgroundColor = "green";
});
