const quiz1 = (x) => {
  return x * 2;
};

const quiz2 = (x) => {
  return x - 500;
};

const quiz3 = (x, y) => {
  return x > y ? x : y;
};

const quiz4 = (str) => {
  return str.length;
};

const quiz5 = (str) => {
  if (str.length > 10) {
    return "문자의 길이가 길어요";
  } else {
    return "길이가 적당해요";
  }
};

const quiz6 = (str) => {
  return `${str}을 하다니 완전 럭키비키잖아💛`;
};

const quiz7 = (x, y) => {
  return x ** y;
};

const quiz8 = (str) => {
  if (str.includes("a") || str.includes("b")) {
    return "a,b 포함";
  } else {
    return "a,b 미포함";
  }
};

console.log(quiz8("doule"));

const quiz9 = (x) => {
  return [x * 1, x * 2, x * 3, x * 4, x * 5, x * 6, x * 7, x * 8, x * 9];
};

const quiz10 = (str, x) => {
  return str.slice(0, x + 1);
};

console.log(quiz10("dleerrr", 5));
