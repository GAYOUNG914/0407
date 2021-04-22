/*실시간 시간체크하기*/
let date = new Date();
// console.log(date);
let minute = date.getMinutes();//현재 분단위
console.log(minute);
let month = date.getMonth();//현재 월단위
console.log(month+1);
let hour = date.getHours();//현재 시간단위
console.log(hour);
console.log('현재 시간은 : '+hour+'시'+minute+'분 입니다.');


/*오전 오후*/
// if( hour < 12 ){
//   alert('오전입니다.');
// }else if ( hour > 12 ) {
//   alert('오후입니다.');
// }else{
//   alert('정오입니다.');
// }

if( hour > 16 ){
  if( minute > 25 ){
    alert('8교시가 시작되었습니다.');
  }
}
