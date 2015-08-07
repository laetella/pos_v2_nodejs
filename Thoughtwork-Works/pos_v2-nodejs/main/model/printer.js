var MyDate = require('./date');
var CartItem = require('./cart-item');

function Printer () {
  this.string = "";
}

// Printer.setItems = function (items) {
//   CartItem.setItems(items);
// }
//
// Printer.setPromotions = function (promotions) {
//   CartItem.setPromotions(promotions);
// }
//
Printer.prototype.printString = function (thisCart) {
  this.string += "***<没钱赚商店>收据***\n打印时间："
              + new MyDate().getCurrentDate()
              + "\n----------------------\n";

  for(var resultItem = 0; resultItem < thisCart.resultArray.length; resultItem++) {
    this.string += "名称：" + thisCart.resultArray[resultItem]._item.name
                  + "，数量：" + thisCart.resultArray[resultItem].count + thisCart.resultArray[resultItem]._item.unit
                  + "，单价：" + thisCart.resultArray[resultItem]._item.price.toFixed(2)
                  + "(元)，小计：" + thisCart.resultArray[resultItem].getSubTotal().toFixed(2)
                  + "(元)\n";
  }
  // console.log(thisCart.resultArray);
  this.string += "----------------------\n总计：" + thisCart.calculatePrice().toFixed(2)
              + "(元)\n节省：" + thisCart.savePrice().toFixed(2)
              + "(元)\n**********************";
  return this.string;
}

// module.exports = Printer;
// exports.MyDate = MyDate();
exports.Printer = Printer;
