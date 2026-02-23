const person = "pranto0";

try {
  console.log("i will play cricket");
  //console.log(num);
  //console.log("i will play");

  if (person === "pranto") {
    console.log("correct name");
  } else {
    //console.log("wrong name");
    throw "wrong name";
  }
} catch (error) {
  console.error(error);
} finally {
  console.log("i will play");
}
