//practise task 1
//a)))))
setTimeout(() => {
  //onsole.log("hello chandu");
}, 5000);

function displayMessage() {
  setTimeout(() => {
    //console.log('Hello chandu')
  }, 5000);
}

//b)))))

//function delayedGreeting() {
//  const delayedGreeting = "Hello Alice";
//  setTimeout(() => {
//    console.log(delayedGreeting);
//  }, 3000);
//}
//delayedGreeting();

function delayedGreeting(name, delayTime) {
  const message = `Hello ${name}`;
  setTimeout(() => {
    //console.log(message);
  }, delayTime);
}

delayedGreeting("Alice", 3000);

//practise task 2

function tellJoke() {
  console.log("Why dont scientist trust atoms?");
}
const jokeInterval = setInterval(() => {
  tellJoke();
}, 2000);

// after 10 seconds stop telling
setTimeout(() => {
  clearInterval(jokeInterval);
  console.log("No more jokes");
}, 10000);
