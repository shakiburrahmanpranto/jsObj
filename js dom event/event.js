//console.log("this is a separate js file");
//<button onclick="console.log(76)">Another button</button>

//system 1 directly by html

//system 2
//<button onclick="makeRed()">Make red</button>
function makeRed() {
  document.body.style.backgroundColor = "red";
}

//system 3
//<button id="green_button">Make green</button>
const makeGreenButton = document.getElementById("green_button");
makeGreenButton.onclick = makeGreen;

function makeGreen() {
  document.body.style.backgroundColor = "green";
}

// <button id="gray_button">Make gray</button>
const makeGrayButton = document.getElementById("gray_button");
makeGrayButton.onclick = makeGray;

function makeGray() {
  document.body.style.backgroundColor = "gray";
}

//system 3 another
//<button id="purple_button">Make purple</button>
const purpleButton = document.getElementById("purple_button");
purpleButton.onclick = function () {
  document.body.style.backgroundColor = "purple";
};

//option 4
// <button id="blue_button">Make blue</button>
const blueButton = document.getElementById("blue_button");
blueButton.addEventListener("click", makeBlue);

function makeBlue() {
  document.body.style.backgroundColor = "blue";
}

//opt 4 optional
//<button id="yellow_button">Make Yellow</button>

const yellowButton = document.getElementById("yellow_button");
yellowButton.addEventListener("click", function makeYellow() {
  document.body.style.backgroundColor = "yellow";
});

//opt 4 final
//document.getElementById('').addEventListener('click' , function(){})
document
  .getElementById("goldenrod_button")
  .addEventListener("click", function () {
    document.body.style.backgroundColor = "goldenrod";
  });
