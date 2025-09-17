const pizzaschool = {
  sales: 0,
  menus: [
    { name: "치즈피자", price: 7000, inventory: 3 },
    { name: "페퍼로니 피자", price: 8000, inventory: 2 },
    { name: "포테이토 피자", price: 7500, inventory: 1 },
  ],
  order: function (menuNumber) {
    if (this.menus[menuNumber - 1].inventory > 0) {
      console.log(`${this.menus[menuNumber - 1].name}는 품절입니다.`);
    } else {
      this.order = this.menus[menuNumber - 1].price;
      console.log(`${this.menus[menuNumber - 1].name}가 판매 되었습니다.`);
      console.log(`현재 매출은 ${this.order}원 입니다.`);
    }
  },
  restock: function (menuNumber) {
    this.menus[menuNumber - 1].inventory =
      this.menus[menuNumber - 1].inventory + 1;
    console.log(`${this.menus[menuNumber - 1].name} 재고가 충당 되었습니다.`);
    console.log(`현재 재고: ${this.menus[menuNumber - 1].inventory}개`);
  },
  add: function (name, price, stock) {
    if (typeof name != "string" || name == "" || price < 0 || inventory < 0) {
      console.log("올바르지 않은 데이터 입니다.");
    } else {
      this.menus.push({ name: name, price: pirce, inventory: inventory });
    }
  },
};

pizzaschool.order(2);
pizzaschool.restock(3);
pizzaschool.add("파인애플 피자", 9000, 3);
