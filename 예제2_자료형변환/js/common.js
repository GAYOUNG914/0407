let num = 1;//number
let textNum = '안녕하세요';//string
let numberVar = 10;//number
let changeString = String(num);
let changeNumber;
// String(1) : 1 -> '1'
let sum = changeString + 10;
// '1' + 10 -> '110'
console.log(typeof(changeString));
changeNumber = Number(changeString);// '1' -> 1
// console.log(typeof(changeString)+', sum : '+sum);
console.log(typeof(changeNumber));

let inputNum = prompt('숫자를 입력해주세요.');
console.log(typeof(inputNum)+','+inputNum);
console.log(10+Number(inputNum));
