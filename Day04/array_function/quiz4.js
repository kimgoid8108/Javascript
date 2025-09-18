const fruits = [
  "watermelon",
  "apple",
  "melon",
  "grape",
  "banana",
  "peach",
  "kiwi",
  "pineapple",
  "strawberry",
  "orange",
  "plum",
];

// 1. 6글자 이상만 과일 남기기
const quiz1 = (x) => {
  return x.length >= 6;
};

const result1 = fruits.filter(quiz1);
console.log(result1);

// 2. 알파벳 m이 들어가면 없애기
const quiz2 = (x) => {
  return !x.includes("m");
};

const result2 = fruits.filter(quiz2);
console.log(result2);

// 3. a, e, i, o, u로 시작하는 과일은 살려주기
const live = fruits.filter((x) =>
  ["a", "e", "i", "o", "u"].some((v) => x.startsWith(v))
);

console.log(live);

//  a, p 로 시작해서 e 끝나는 찾기
const result = fruits
  .filter((x) => ["a", "p"].some((v) => x.startsWith(v)))
  .filter((x) => x.endsWith["e"]);

console.log(result);

// i, e를 포함하고 문자 길이가 4글자 이상인 애들만 찾고, 대문자화 하기
const quiz5 = fruits
  .filter((v) => v.includes("i") || v.includes("e"))
  .filter((v) => v.length >= 4)
  .map((v) => v.toUpperCase());

console.log(quiz5);
