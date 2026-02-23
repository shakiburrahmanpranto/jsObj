console.log(1);
console.log(2);
//setTimeout(() => {
//  console.log(3);
//});
//console.log(3);
//setTimeout(() => {
//  console.log(3);
//}, 5000);
console.log(4);
console.log(5);

let num = 0;
const clock = setInterval(() => {
  num++;

  //clearInterval(clock);

  if (num > 5) {
    clearInterval(clock);
  }

  console.log(clock, num);
}, 4000);
