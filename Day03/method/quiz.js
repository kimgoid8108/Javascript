// const word = window.prompt("단어를 입력하시오");
// console.log(word.toUpperCase());

// 1. 단어를 입력하고 10글자 이상이면
//콘솔로 단어가 깁니다
//아니면 콘솔로 대문자화해서 나타내기

const quiz1 = prompt("단어입력!");

if (quiz1.length > 10) {
  console.log("단어가 깁니다");
} else {
  console.log(quiz1.toUpperCase());
}

// 2. 영어 문장을 입력해서 콘솔로 배열로 나타내기
// ex> i like icecream

const quiz2 = prompt("영어 문장 입력");
console.log(quiz2.split(" "));

// 3. 유저에게 단어를 입력 받고
// 소문자로 입력하면 대문자화 해서 콘솔 나타내기
// 대문자로 입력하면 소문자화 해서 콘솔 나타내기

const quiz3 = prompt("영어 문장 입력");
if (quiz3 == quiz3.toUpperCase()) {
  console.log(quiz3.toLowerCase());
} else {
  console.log(quiz3.toUpperCase());
}

// 4. 유저에게 이메일을 입력받고, @가 포함되면 이메일이 올바릅니다. 아니면 이메일 아닙니다

const email = prompt("이메일 입력");
if (email.includes("@")) {
  console.log("이메일이 올바릅니다.");
} else {
  console.log("이메일이 올바르지 않습니다.");
}
