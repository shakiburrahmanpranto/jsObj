//const myLoader = () => {
//  return new Promise((resolve, reject) => {
//    const success = true;
//    if (success) {
//      resolve(0.3);
//    } else {
//      reject(0.7);
//    }
//  });
//};

const myLoader = () => {
  return new Promise((resolve, reject) => {
    const success = Math.random();
    if (success <= 0.5) {
      resolve(success);
    } else {
      reject(success);
    }
  });
};
myLoader()
  .then((data) => console.log("resolve data", data))

  .catch((err) => console.log("rejected data", err));

async function loadData() {
  const res = await fetch("");
  const data = await res.json();
  console.log(data);
}
loadData();
