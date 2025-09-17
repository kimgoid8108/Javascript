// const dog = "bulldog";
// const a = dog.toUpperCase();
// console.log(a);

// const cat = "cheese";
// const b = cat.replaceAll("e", "😀");
// console.log(b);

// const coffee = "americano";
// const c = coffee.includes("v");
// console.log(c);

const coffee = "americano";

coffee[0]; //역할: 0번째 있는 글자
coffee.length(); //역할: 몇글자임?     리턴: 9
coffee.includes("i"); //역할: 포함여부, 리턴: true
coffee.startsWith("m"); //역할: 시작여부 리턴 false
coffee.endswith("o"); //역할: 끝여부 리떤: true
coffee.indexOf("r"); // 역할: 몇번째 있는지 묻기, 리떤: true

coffee.slice(0, 4); //역할: 시짝부터 끝까지 짤라서 줌 리턴:amer
coffee.replace("a", "k"); //역할: a를 k로 바꿔줌 리턴:kmericano
coffee.replaceAll("a", "k"); //역할: 모든 a를 k로 바꿔줌 kmerickno
coffee.split("i"); //역할: i 기준으로 찢어짐    ["amer", "cano"]
" x ".trim(); //역할: 공백 제거   리턴: "x"
coffee.repeat(3); //역할: americanoamericanoamericano
coffee.toUpperCase(); //역할: 대문자화 하기
coffee.toLowerCase(); //역할: 소문자화 하기
