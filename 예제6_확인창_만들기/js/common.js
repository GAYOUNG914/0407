// // confirm
// let checkNum = confirm('회원가입을 하시겠습니까?');
// let checkPeople;
// console.log(checkNum);
// // if( checkNum == true ){
// //   console.log('회원 가입이 완료 되었습니다.');
// // }else{
// //   console.log('회원 가입이 취소 되었습니다.');
// // }
//
// if( checkNum ){
//   checkPeople = confirm('만 20세 이상 입니까?');
//   if(checkPeople){
//     console.log('회원 가입이 완료 되었습니다.');
//   }else{
//     console.log('만 20세 미만은 회원 가입을 할 수 없습니다.');
//   }
// }else{
//   console.log('회원 가입이 취소 되었습니다.');
// }

//confirm
const cash = 1000;
let checkNum = confirm('가게에 입장하시겠습니까?');
let checkPeople;
console.log(checkNum);

if( checkNum ){
  checkPeople = confirm('주문하시겠습니까?');
  if(checkPeople){
    let menu = prompt('메뉴를 입력해주세요,','한글');
    if( menu == '아아메' ){
      let price = prompt('아아메 가격이 얼마입니까?,','숫자');
      if( price > cash ){//비싸다.
        alert('울면서 집으로 돌아갔습니다.');
      }else if( price < cash ){//싸다
        alert('아아메 구매에 성공하였습니다!');
        console.log('축하축하!!');
      }else{
        alert('울면서 돈을 냈습니다.');
      }
    }else{
      alert('해당 메뉴는 없는 메뉴였습니다....')
      console.log('부끄러움을 참지 못하고 집에 돌아갔습니다.');
    }
  }else{
    console.log('용기가 안 나 집에 돌아갔습니다.')
  }
}else{
  console.log('준비가 안되어 집에 돌아갔습니다.')
}
