const cash = 1000;
let checkNum = confirm('가게에 입장하시겠습니까?');
let checkPeople;
console.log(checkNum);

if( checkNum ){
  checkPeople = confirm('주문하시겠습니까?');
  if(checkPeople){
    let menu = prompt('메뉴를 입력해주세요,','여기에 한글입력');
    if( menu == '아아메' ){
      let price = prompt('아아메 가격이 얼마입니까?,','여기에 숫자입력');
      if( price > cash ){//비싸다.
        alert('울면서 집으로 돌아갔습니다.');
      }else if( price <= cash ){//싸다
        alert('아아메 구매에 성공하였습니다!');
        alert('소심이가 춤을 춥니다!');
        let answer = confirm('따라 추시겠습니까?');
        if(answer){
          alert('부끄러워진 소심이가 혼자 집에 갔습니다.')
          console.log('카페에서 춤은 좀..')
        }else{
          alert('의기소침해진 소심이가 집에 갔습니다.')
          console.log('친구가 기쁠 때 같이 기뻐해줍시다.')
        }
      }else{
        alert('울면서 돈을 냈습니다.');
        console.log('엉엉');
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
