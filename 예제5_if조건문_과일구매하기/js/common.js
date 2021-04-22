/*과일 구매하기*/
// 변수선언
const myPrice = 10000;
let fruitX = prompt('사과의 가격을 입력해주세요,',' 숫자');
let fruitY = prompt('배의 가격을 입력해주세요,',' 숫자');
let total = Number(fruitX) + Number(fruitY);// 과일 가격의 합계
// 가격 확인창
alert('사과의 가격은 '+fruitX+'원이고 배의 가격은 '+fruitY+'원 입니다. 총 지불금액은 '+total+'원 입니다.');

// 보유금액과 지불금액을 비교
if( total > myPrice ){//비싸다.
  alert('싸게 주세요!!! 너무 비싸요!!');
}else if( total < myPrice ){//싸다
  alert('두개 다 주세요!!');
}else{
  alert('가격이 올랐어요? 싸게 주세요~');
}
