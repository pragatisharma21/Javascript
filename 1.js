let arr = [5,6,7,8,9]



let doubledArray = arr.map(num => num * 2);

let sum = doubledArray.reduce((acc, num) => acc + num, 0);

console.log(doubledArray);
console.log(sum);