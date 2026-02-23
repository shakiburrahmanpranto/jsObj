const num = [14, 12, 15, 30, 19];

const oddNumbers = [];

for (let i = 0; i < num.length; i++) {
  console.log(num[i]);
  num[i] % 2 === 1 && oddNumbers.push(num[i]);
}
console.log(oddNumbers);
