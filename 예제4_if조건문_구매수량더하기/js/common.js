/*구매수량 더하기*/
/*변수선언*/
let count = 10;
let productText = '스니커즈 신발';
let addCount, changeNumber, totalCount;

/*경고창으로 초기 안내창 노출*/
alert('현재 구매중인 상품 "'+productText+'"의 구매수량은'+count+'개 입니다.');

/*추가 구매수량 입력*/
addCount = prompt('추가 구매수량을 입력해주세요,','숫자만 입력가능');
// console.log(typeof(addCount));로 확인해보면 string데이터임. number데이터로 바꿔줘야한다.
changeNumber = Number(addCount);// 추가된 수량
// console.log(typeof(changeNumber));
totalCount = count + changeNumber;// 총 구매수량
// console.log('최종 구매수량 : '+ totalCount);

/*경고창으로 결괏값 노출*/
alert('현재 구매중인 상품 "'+productText+'"의 추가구매수량은'+changeNumber+'개 이고, 총 구매수량은 '+totalCount+'개 입니다.');
