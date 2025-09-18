const arr = [1, 3, 5, 7, 9];

// arr
// push, pop, shift, unshift
// map: 안에 있는 요소를 바꾸는 함수
// filter: 안에 있ㄲ는 요소를 조건에 의하여 걸르기

const bigger = (x) => {
  return x >= 5;
};
const test = arr.filter(bigger);

// 3이상 7이하만 살리기
const test1 = (x) => {
  return x >= 3 && x <= 7;
};

const result = arr.filter(test1);
console.log(result);

// some, every

// 1. 요소 중에 5 있니?
const num1 = (x) => {
  return x == 5;
};

const a = arr.some(num1);
console.log(a);

// 2. 요소 중에 짝수 있니?
const num2 = (x) => {
  return x % 2 == 0;
};

const b = arr.some(num2);
console.log(b);
