let x = prompt('x값을 입력해주세요.','숫자');
let y = prompt('y값을 입력해주세요.','숫자');
let xChangeNumber = Number(x);//prompt에서 변환된 string값을 숫자형으로 변환한다.
let yChangeNumber = Number(y);//prompt에서 변환된 string값을 숫자형으로 변환한다.
alert('값이 입력완료 되었습니다. x값은 '+xChangeNumber+' y값은 '+yChangeNumber+'입니다.');

/*if조건문*/
if( xChangeNumber == yChangeNumber ){
  console.log('x는 y와 같습니다.');
}else if( xChangeNumber > yChangeNumber ){
  console.log('x는 y보다 큽니다.');
}else{
  console.log('x는 y보다 작습니다.');
}
