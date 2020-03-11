////////////////////////////////////////////////////////////////////////////////////
"use strict"
////////////////////////////////////////////////////////////////////////////////////

function Country(name, odds, continent) {
    this.name = name;
    this.odds = odds;
    this.continent = continent;
}
var serbia = new Country("Serbia", 1.75, "EU");

function Person(name, surname, dateOfBirth) {
    this.name = name;
    this.surname = surname;
    this.dateOfBirth = dateOfBirth;
}
var ksenija = new Person("Ksenija", "Mijanovic", 13);

function Player(person, betAmount, country) {
    this.person = person;
    this.betAmount = betAmount;
    this.country = country;
}
var player = new Player(ksenija, "1050.00 eur", serbia);

function Address(country, city, postalCode, streetAndNumber) {
    this.country = country;
    this.city = city;
    this.postalCode = postalCode;
    this.streetAndNumber = streetAndNumber;
}
var address = new Address(serbia, Belgrade, 24000, "Dusanovacka 17");