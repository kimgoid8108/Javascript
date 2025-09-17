const calculator = {
  num: 0,
  add: function (x, y) {
    return x + y;
  },
  minus: function (x, y) {
    return x - y;
  },
  multiply: function (x, y) {
    return x * y;
  },
  square: function (x, y) {
    return x ** y;
  },
};

// object 타입으로

// baskinrabbins
// icecream 정의하고 매개변수는 falvor
// flavor 맛 아이스크림이 나왔습니다

const baskinrabbins = {
  icecream: function (flavor) {
    return `${flavor}맛 아이스크림 나왔습니다`;
  },
  coffee: function (shots) {
    return `${shots}샷 추가된 커피 나왔습니다`;
  },
  cake: function (topping) {
    return `${topping}이 추가된 아이스 케이크 나왔습니다`;
  },
};
// coffee 정의하고 매개변수shots
// 샷 shots 번 들어간 커피가 나왔습니다

// cake 정의하고 매개변수 topping
// topping이 추가된 아이스 케이크 나왔습니다

// point 오브젝트 타입인 변수 point 만들고
// x: 0, y: 0, up:함수, down: 함수

const point = {
  x: 0,
  up: function () {
    this.x = this.x + 1;
  },

  down: function () {
    this.x = this.x - 1;
  },
};
