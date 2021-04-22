/*변수*/
// let x = 1;
// let y = 5;
// let food = '치킨'

// //이중조건문
// if ( x==y ) {
//   aleft('x는 y와 같습니다.');
// }else{
//   alert('x는 y와 다릅니다.')
// }

// //다중조건문
// if( x == y ){
//   console.log('x는 y와 같습니다.');
// }else if( x > y ){
//   console.log('x는 y보다 큽니다.');
// }else{
//   console.log('나머지 예외처리');
// }

// 다중조건문
// if( food == '카레' ){
//   console.log(food+'를 먹습니다.');
// }else if( food == '짬뽕' ){
//   console.log(food+'를 먹습니다.');
// }else if( food == '찜닭' ){
//   console.log(food+'를 먹습니다.');
// }else if( food == '마라탕' ){
//   console.log(food+'를 먹습니다.');
// }else if( food == '피자' ){
//   console.log(food+'를 먹습니다.');
// }else{
//   console.log(food+'은 판매하지 않습니다.')
// }

// if( food == '치킨'){
//   console.log(food+'는 20,000원입니다.')
// }else if( food == '양념치킨'){
//   console. log(food+'는 21,000원입니다.')
// }else if( food == '간장치킨'){
//   console. log(food+'는 21,500원입니다.')
// }

let food = prompt('음식을 주문해주세요.');

if( food == '카레' ){
  console.log(food+'를 주문하셨습니다.');
}else if( food == '짬뽕' ){
  console.log(food+'을 주문하셨습니다.');
}else if( food == '찜닭' ){
  console.log(food+'을 주문하셨습니다.');
}else if( food == '마라탕' ){
  console.log(food+'을 주문하셨습니다.');
}else if( food == '피자' ){
  console.log(food+' 주문하셨습니다.');
}else{
  console.log(food+'은 판매하지 않습니다.');
}
