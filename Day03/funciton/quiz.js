// 1. 홀수 짝수를 알려주는 함수를 만들고
// 함수를 이용해서 콘솔로그로 나타내기

// function oddEven(x) {
//   return x % 2 == 1 ? "홀수" : "짝수";
// }

// const a = oddEven(50);
// const b = oddEven(20);
// const c = oddEven(3);

// console.log(a);
// console.log(b);
// console.log(c);

// 2. 어떠한 숫자를 넣었을 때 10보다 크면
// 하트를 돌려주고, 작으면 고양이를 돌려주는 함수를 만들고
// 함수를 이용해서 콘솔로그로 나타내기

// function num(x) {
//   if (x > 10) {
//     return "❤";
//   } else {
//     return "😺";
//   }
// }

// const d = num(11);
// const e = num(8);
// console.log(d);
// console.log(e);

// // 3. 어떠한 아이스크림 맛을 주면,
// // ~~ 맛보다 바.로.너 를 돌려주는 함수를 만들고
// // 함수를 이용해서 콘솔로그로 나타내기

// function icecream(x) {
//   return `${x}맛보다 바.로.너`;
// }

// const f = icecream("민트초코");
// console.log(f);

// 4. x,y 를 주었을 떄 x가 y보다 크면 x의 y제곱으로 돌려주고
// 아니면 오브젝트로 {first:x, second: y} 함수 만들기

// function number(x, y) {
//   if (x > y) {
//     return x ** y;
//   } else {
//     return { first: x, second: y };
//   }
// }

// const a = number(10, 5);
// console.log(a);
// // 5. x, y, z를  주었을 때, 가장 큰 수를 돌려주는 함수 만들기

// function many(x, y, z) {
//   if (x > y) {
//     if (x > z) return x;
//     else return z;
//   } else if (y > x) {
//     if (y > z) return y;
//     else return z;
//   } else {
//   }
// }
// const b = many(5, 10, 15);

// console.log(b);

// // 6. year, month, date를 주었을 때
// // year-month-date로 돌려주는 함수 만들기

// function birth(year, month, date) {
//   return `${year}-${month}-${date}`;
// }

// const c = birth(2000, 5, 20);
// console.log(c);

// 7. burger, side, drink를 매개 변수 넣으면
// 오브젝트로 {main: burger, side: side, drink: drink} 나오도록 하기

function hamBurger(burger, side, drink) {
  return { main: burger, side: side, drink: drink };
}

const a = hamBurger("치즈버거", "감자튀김", "콜라");
console.log(a);

// 8. krw와 nation을 매개변수 넣으면
// nation 이 usa 원화를 달러화로 바꿔서 돌려주고
// nation이 jpy 원화를 엔화로 바꿔서 돌라주고
// nation이 tnd 원하를 바트로 바꿔서 돌려주기
// 그 외는 그냥 원하를 돌려주기

function currency(krw, nation) {
  if (nation == "usa") {
    return krw * 1.38;
  } else if (nation == "jpy") {
    return krw * 0.94;
  } else if (nation == "tnb") {
    return krw * 0.43;
  } else {
    return krw;
  }
}

const b = currency(50000, "tnb");

console.log(b);
