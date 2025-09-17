const password = prompt("비밀번호 설정 (입력해주세요)");

if (password.length < 4 || password.length > 12) {
  console.log("비밀번호 길이가 맞지 않습니다.");
} else if (
  !password.includes("@") &&
  !password.includes("!") &&
  !password.includes("#")
) {
  console.log("비밀번호에 @, !, # 가 없습니다.");
} else if (!password.startsWith("it")) {
  console.log("비밀번호 시작이 it 아닙니다.");
} else {
  console.log("올바르게 비밀번호를 만들었습니다!");
}
