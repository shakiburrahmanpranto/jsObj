// compile time error
// syntax error
//console.log(1

// run time error
// reference error
//console.log(x);

const sum = () => {
  const result = 10 + 21;
  return result;
};
//console.log(result);

function myFunction() {
  let y = 5;
  //console.log(y);
}
//console.log(y);
myFunction();

const person = {
  name: "John",
};
//console.log(person);

//console.log("jhfkhsa");
//console.error("jhfkhsa");

const person1 = {
  name: "hero",
};
//console.warn(person1);
//console.dir("hdkfh"); //directory
//console.dir(person1);
//console.table(person1);
//
//const array = [189, 34, 404, 943];
//console.table(array);

const num1 = 20;
const num2 = "13";
//console.log(num1, num2);
const result = num1 + num2;
//console.log(result);

for (let index = 0; index < 10; index++) {
  // adding debugger
  //debugger;
  const element = index;
  console.log(element);
}
