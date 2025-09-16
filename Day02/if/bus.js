const age = +window.prompt("나이는?");
const bus = window.prompt(
  "이용할 버스는? 1: 시내버스, 2: 광역버스, 3: 마을버스"
);

if (bus == 1) {
  expense = 1200;
} else if (bus == 2) {
  expense = 2000;
} else if (bus == 3) {
  expense = 1000;
} else {
  expense = 0;
}

if (age <= 7) {
  expense = "무료";
  window.console.log(`${expense} 어린이입니다.`);
} else if (age >= 8 && age <= 19) {
  expense = expense * 0.7;
  window.console.log(`${expense}원 청소년입니다.`);
} else if (age >= 20 && age <= 64) {
  window.console.log(`${expense}원 성인입니다.`);
} else {
  expense = "무료";
  window.console.log(`${expense} 노인입니다.`);
}
