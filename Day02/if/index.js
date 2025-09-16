// const num = +window.prompt("숫자입력");
// if (num > 0) {
//   window.console.log(`${num}은 0보다 큽니다.`);
// } else if (num == 0) {
//   window.console.log(`0입니다`);
// } else {
//   window.console.log(`${num}은 0보다 작습니다.`);
// }
// window.console.log("프로그램 끝");

// 유저에게 영어 점수를 입력 받고 90점 이상이면 A, 80점 이상이면 B, 70점 이상이면 C, 60이상이면 D, 50이상 E, 그 외에는 F

// const score = +window.prompt("영어 점수 입력");
// if (score >= 90) {
//   window.console.log("A입니다.");
// } else if (score >= 80) {
//   window.console.log("B입니다.");
// } else if (score >= 70) {
//   window.console.log("C입니다.");
// } else if (score >= 60) {
//   window.console.log("D입니다.");
// } else if (score >= 50) {
//   window.console.log("E입니다.");
// } else {
//   window.console.log("F입니다.");
// }

// 유저에게 숫자 정수를 입력 받고 양의 홀수, 양의 짝수, 0, 음의 홀수, 음의 짝수 출력하기
const num = +window.prompt("숫자를 입력하시오");

if (num > 0 && num % 2 == 1) {
  window.console.log("양의 홀수");
} else if (num > 0 && num % 2 == 0) {
  window.console.log("양의 짝수");
} else if (num < 0 && num % 2 == -1) {
  window.console.log("음의 홀수");
} else if (num < 0 && num % 2 == 0) {
  window.console.log("음의 짝수");
} else {
  window.console.log("0");
}
