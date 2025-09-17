// venti
// sales: 0
// menus: 아아 2000, 라떼 3000, 에이드 3800
// sell: 함수 [price가 들어오면 매출에 플러스 하기]

// const venti = {
//   sales: 0,
//   menus: [
//     { name: "아이스 아메리카노", price: 2000 },
//     { name: "아이스 라떼", price: 3000 },
//     { name: "에이드", price: 3800 },
//   ],
//   sell: function (num) {
//     this.sales = this.sales + this.menus[num - 1].price;
//     console.log(
//       `${this.menus[num - 1].name}가 ${
//         this.menus[num - 1].price
//       }원에 판매되었습니다`
//     );
//     console.log(`현재 매출은 ${this.sales}입니다.`);
//   },
// };

// venti.sell(1);
// venti.sell(2);
// venti.sell(3);

// 서브웨이
// 매출: 0
// 메뉴: 서브웨이클럽: 7000 재고: 3, BLT: 7500 재고: 2, 에그마요 5000 재고: 2, 쉬림프 8000 재고: 0
// 판매: 함수 [매출 올리고, 콘솔로 판매내용 알려주고, 재고하나깎아야함, 단 재고가 1개 이상일 경우, 0개면 매출 안올라가고 해당 재고는 품절입니다]
// 재고충당: 함수 [메뉴번호 매개변수 해당 메뉴의 재고가 하나 올라감]

const subway = {
  sales: 0,
  menus: [
    { name: "서브웨이클럽", price: 7000, inventory: 3 },
    { name: "BLT", price: 7500, inventory: 2 },
    { name: "에그마요", price: 5000, inventory: 2 },
    { name: "쉬림프", price: 8000, inventory: 0 },
  ],
  sell: function (num) {
    const inventory = this.menus[num - 1].inventory;
    if (inventory == 0) {
      console.log(`해당 제품 재고가 없습니다.`);
    } else {
      this.sales = this.menus[num - 1].price;
      console.log(`${this.menus[num - 1].name}이 판매 되었습니다.`);
      console.log(`현재 매출은 ${this.sales}원 입니다.`);
    }
  },
  supply: function (num) {
    this.menus[num - 1].inventory = this.menus[num - 1].inventory + 1;
    console.log(`${this.menus[num - 1].name} 추가가 되었습니다`);
    console.log(`현재 재고는 ${this.menus[num - 1].inventory}개 입니다`);
  },
};

subway.sell(1);
subway.supply(1);
