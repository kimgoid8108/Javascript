const movie_type = window.prompt(
  "어떤 영화의 종류를 원하시나요? 1: 일반 12,000원, 2: 3D 15,000원, 3: IMAX 18,000원"
);
const age = +window.prompt("나이는 어떻게 되시나요?");
const snack_type = window.prompt(
  "스낵은 어떤걸로 드릴까요? 1: 팝콘 5,000원 2: 음료 2,000원 3. 없음 0원"
);
const seat_type = window.prompt(
  "좌석은 어떻게 도와드릴까요? 1: 일반 0원, 2: 프리미엄 5,000원, 3: VIP 10,000원"
);

const movie = {
  1: 12000,
  2: 15000,
  3: 18000,
};

const snack = {
  1: 5000,
  2: 2000,
};

const seat = {
  1: 0,
  2: 5000,
  3: 10000,
};
