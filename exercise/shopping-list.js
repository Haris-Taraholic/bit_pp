"use strict";

(function () {
    console.log("Hi");
}())

var createRanNum = function () {
    var ranNum = 10000 + 90000 * Math.random();
    ranNum = Math.floor(ranNum);
    return ranNum;
}

var roundedPrice = function (number) {
    return number.toPrecision(2);
}


function Product(name, price, expDate) {
    this.id;
    this.name = name;
    this.price = price;
    this.setId = function () {
        this.id = createRanNum();
    }
    this.getInfo = function () {
        var productString = '';
        for (var i = 0; i < this.name.length; i++);
        if (i === 0 || i === this.name.length - 1) {
            productString +=
        }
    }

}
function ShoppingBag() {
    var listOfProducts = [];
}


