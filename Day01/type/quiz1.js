window.console.log("첫번째 퀴즈 ");

const one_side = Number(window.prompt("한 변의 값을 입력하시오"));
window.console.log(one_side * one_side);

window.console.log("두번째 퀴즈 ");
const triangle = Number(window.prompt("밑변의 값을 입력하시오"));
const triangle1 = Number(window.prompt("높이의 값을 입력하시오"));

window.console.log((triangle * triangle1) / 2);

window.console.log("세번째 퀴즈");
const won = Number(window.prompt("환전할 금액의 값을 입력하시오"));
window.console.log(`${won}원은 ${won / 9.41}엔 입니다!`);

window.console.log("네번째 퀴즈");
const min = Number(window.prompt("몇분인지 입력하시오"));

window.console.log(`분: ${min} -> 초: ${min * 60}`);
