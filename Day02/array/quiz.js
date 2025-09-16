const classroom = [
  { name: "A", capacity: 20, students: 18, lecture: "java" },
  { name: "B", capacity: 20, students: 19, lecture: "python" },
  { name: "C", capacity: 20, students: 20, lecture: "javascript" },
];
// 유저에게 듣고 싶은 과목을 물어봄
// 만약에 수용인원 가능하면, 학생수를 늘리고 콘솔로그 클래스룸 결과보여주기
// 만약에 수용인원 불가능하면, 알럿으로 불가! 콘솔로그 클래스룸 결과보여주기

const wish = window.prompt("과목 선택 (java, python, javascript)");

if (classroom[0].lecture == wish) {
  classroom[0].students = classroom[0].students + 1;
} else if (classroom[1].lecture == wish) {
  classroom[1].students = classroom[1].students + 1;
} else if (classroom[2].lecture == wish) {
  alert("불가!");
} else {
  console.log("없는과목입니다.");
}

console.log(classroom);
