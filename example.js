// function functionName (parameters){
//     function body
//     return
// }

// var returnedValue = functionName(parameters value)

function getAverage( assognment1, assognment2, assognment3){
 const total = assognment1 + assognment2 + assognment3;
 const  average = total / 3;
 return average;



}

const assognment1Marks = 60;
const assognment2Marks = 59;
const assognment3Marks = 54;

var myAverage = getAverage(assognment1Marks , assognment2Marks , assognment3Marks);
console.log('my average so far: ' , myAverage);