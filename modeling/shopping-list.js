"use strict";

(function () {
    console.log("Hi");
}())

var createRanNum = function () {
    var ranNum = 10000 + 90000 * Math.random();
    ranNum = Math.floor(ranNum);
    return ranNum;
}

function Product(name, price, expDate) {
    this.id = createRanNum();
    this.name = name;
    this.price = price;
    this.expDate = new Date(expDate);

    this.getInfo = function () {
        var productString = '';
        var roundedPrice = this.price.toFixed(2);
        for (var i = 0; i < this.name.length; i++) {
            if (i === 0 || i === this.name.length - 1) {
                productString += this.name[i];
            }
        }
        return productString.toUpperCase() + this.id + ", " + this.name + ", " + roundedPrice;
    }
}

var productOne = new Product('Banana', 180.256965, '2020-05-23');
console.log(productOne.getInfo());
var productTwo = new Product('Milk', 99.1425698, '2020-03-17');
console.log(productTwo.getInfo());
var productThree = new Product('Potato', 65.458754, '2020-03-09');
console.log(productThree.getInfo());
var productFour = new Product('Honey', 500.458954, '2050-05-25');
console.log(productFour.getInfo());





function ShoppingBag() {
    this.listOfProducts = [];
    this.addProduct = function (product) {
        var currentDate = new Date();
        if (product.expDate > currentDate) {
            this.listOfProducts.push(product);
        }
    }
    this.getMostExpensive = function () {
        var mostExpProduct = this.listOfProducts[0].name;
        var biggestPrice = this.listOfProducts[0].price;
        for (var i = 0; i < this.listOfProducts.length; i++) {
            if (this.listOfProducts[i].price > biggestPrice) {
                biggestPrice = this.listOfProducts[i].price;
                mostExpProduct = this.listOfProducts[i].name;
            } else {
                continue;
            }
        }
        return mostExpProduct;
    }
    this.calculateTotalPrice = function () {
        var totalPrice = 0;
        for (var i = 0; i < this.listOfProducts.length; i++) {
            totalPrice += this.listOfProducts[i].price;
        }
        return totalPrice.toFixed(2);
    }
}
var shoppingBagOne = new ShoppingBag();
shoppingBagOne.addProduct(productOne);
shoppingBagOne.addProduct(productTwo);
shoppingBagOne.addProduct(productThree);
shoppingBagOne.addProduct(productFour);


function PaymentCard(accountBalance, status, validUntil) {
    this.accountBalance = accountBalance.toFixed(2);
    this.status = status;
    this.validUntil = new Date(validUntil);
}
var paymentCardOne = new PaymentCard(8532.125698, 'active', '2024-05-05');

function checkoutAndBuy(shoppingBag, paymentCard) {
        if (shoppingBag.calculateTotalPrice() <= paymentCard.accountBalance) {
            return "Purchase is successful";
        } else {
            return "The amount that is missing to complete the purchase is: " + ( paymentCard.accountBalance - shoppingBag.calculateTotalPrice());
        }
}
 console.log(
  checkoutAndBuy(shoppingBagOne, paymentCardOne));

