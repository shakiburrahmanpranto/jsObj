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

    if (success <= 1.9) {
      resolve(success);
    } else {
      reject(success);
    }
  });
};

async function loadData() {
  const res = await fetch("");
  const data = await res.json();
  console.log(data);
}
