// 유저에게 닉네임을 입력 받고 알럿으로 ~~~ 님 환영합니다!
// 만약에 닉네임을 빈문자로 입력하면
// 알럿으로 guest 님 환영합니다!

// const nick = window.prompt("닉네임 입력");
// window.alert(`${nick || "guest"}님 환영합니다`);

// && [and]
//유저에게 화장실 비밀번호 입력을 받고
// 틀리면 아무일도 안일어나고, 맞으면 화장실 문이 열렸습니다!

const password = +window.prompt("비밀번호를 입력하시오");

password == 1215 && window.alert("화장실 문이 열렸습니다");
