// // map, filter, some, every
// // 1. 대문자화 하기
// const quiz1 = (x) => x.toUpperCase();

// const result1 = coffee.map(quiz1);
// console.log(result1);

// // 2. e가 들어가는것만 살리기
// const quiz2 = (x) => x.includes("e");

// const result2 = coffee.filter(quiz2);
// console.log(result2);

// // 3. mo or no가 있는지 확인하기

// const quiz3 = (x) => x.includes("mo") || x.includes("no");

// const result3 = coffee.some(quiz3);
// console.log(result3);

// const coffee = ["americano", "latte", "mocha", "flat whtie"];

// // find ㅊ서번째로 찾은 애만 돌려줌
// const quiz4 = coffee.find((v) => v.length <= 5);

// // find 첛번째로 찾은 애의 번째 돌려줌
// const quiz5 = coffee.findIndex((v) => v.length <= 5);

// console.log(quiz4);
// console.log(quiz5);

// const words = ["ice", "cream", "cake", "jmt"];
// const quiz6 = words.join(" "); // ice cream cake jmt

// const arr = [1, 2, 3, 4, 5];

// const quiz7 = arr.reduce((a, c) => a + c); // a: acc , c: crr
// console.log(quiz7);

const coffee = ["americano", "latte", "mocha", "flatwhtie"];

// 총문자의 길이 몇임?
const quiz8 = coffee.map((v) => v.length).reduce((a, c) => a + c);

console.log(quiz8);
