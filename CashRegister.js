class CashRegister {
  constructor(discount=0) {
    this._discount = discount;
    this._total    = 0;
    this._items    = [];
    this._last_transaction = null;
  }

  getDiscount() {
    return this._discount;
  }

  getTotal() {
    return this._total;
  }

  getItems() {
    return this._items;
  }

  getLastTransaction() {
    return this._last_transaction;
  }

  setLastTransaction(item) {
    this._last_transaction = item;
  }

  addItems(item, price, quantity=1) {
    let i = 0;
    while(i < quantity) {
      this._items.push(item);
      this._total += price;
      i++;
    }
    this.setLastTransaction({
      item: item,
      price: price,
      quantity: quantity
    });
    return this._items;
  }

  noDiscountMsg() {
    return "There is no discount to apply.";
  }

  applyDiscount() {
    if (this._discount === 0){
      return this.noDiscountMsg();
    } else {
      this._total = this._total - (this._total * parseFloat(this._discount/100));
    }
    return `After the discount, the total comes to $${this._total}`;
  }

  voidLastTransaction() {
    let lastTransaction = this.getLastTransaction();
    // check quantity and remove from items array
    // subtract item total from this.total
    let count = 0;
    while(count < lastTransaction["quantity"]) {
      this._items.pop();
      count += 1;
    }
    this._total -= lastTransaction["quantity"] * lastTransaction["price"];
    return `Your last transaction has been cancelled. Your total is now $${this._total}`;
  }
}

first_transaction = new CashRegister(20);
console.log(first_transaction.getDiscount());
first_transaction.addItems('apple computer', 500, 2);
first_transaction.addItems('toothbrush', 3.00, 5);
first_transaction.addItems('puppies', 20, 3);
console.log(first_transaction.voidLastTransaction());
console.log(first_transaction.applyDiscount());
