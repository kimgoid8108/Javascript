// 기본 타입: String, Number, Boolean, Undefined, Null(없음)
// 참조 타입: Object

const coffee = {
  name: "아메리카노",
  price: 3000,
  bean: "스페셜원두",
};

// car object type (name, brand, price, color)

//key 중복 안됨
// value 중복되고 아무 타입 가능

const car = {
  name: "아이오닉 5",
  brand: "현대",
  price: 47400000,
  color: "흰색",
};

// console.log(car);

// console.log(car.color); // dot 접근
// console.log(car["color"]); // bracket 접근
// console.log(car.carpacity); // 존재하지 않으면, undefined

// car.options = "날개"; // 추가

// delete car.price; // 삭제
// car.color = "민트색"; // 업데이트

const course = {
  students: 13,
  subject: "자바스크립트",
  time: "19:00 ~ 22:00",
  teacher: {
    name: "이영철",
    age: 26,
    mbti: "infp",
  },
};

console.log(course.teacher.name);
