const score = Number(window.prompt("점수를 입력하시오"));
const result = score >= 60 ? "합격입니다" : "불합격입니다";

window.console.log(result);

const num1 = Number(window.prompt("첫번째 숫자를 입력하시오"));
const num2 = Number(window.prompt("두번째 숫자를 입력하시오"));

const result1 = num1 > num2 ? num1 : num2;
window.console.log(`두개 숫자 중 제일 큰 숫자는 ${result1}입니다`);

const number = Number(window.prompt("숫자 입력"));
const result2 = number > 0 ? "양수" : number < 0 ? "음수" : 0;

window.console.log(result2);

const number1 = Number(window.prompt("숫자입력"));
const result3 = number1 % 2 === 0 ? "짝수" : "홀수";

window.console.log(`${result3}입니다`);
