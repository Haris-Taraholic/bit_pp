"use strict";
(function () {
    const CONTINENTS = Object.freeze({
        EUROPE: 'EU',
        ASIA: 'AS',
        AFRICA: 'AF',
        SOUTH_AMERICA: 'SA',
        NORTH_AMERICA: 'NA',
        AUSTRALIA: 'AU'
    });
    function Country(name, odds, continent) {
        this.name = name;
        this.odds = odds;
        this.continent = continent;
    }
    const rs = new Country('Serbia', 1.2, CONTINENTS.EUROPE);
    function Person(name, surname, dateOfBirth) {
        this.name = name;
        this.surname = surname;
        this.dateOfBirth = new Date(dateOfBirth);
    }
    Person.prototype.personInfo = function () {
        return `${this.name} ${this.surname}, ${2020 - (this.dateOfBirth.getFullYear())} years`;
    }
    Person.prototype.fullData = function () {
        return `${this.name} ${this.surname}  ${this.dateOfBirth}`;
    }
    const bojan = new Person('Bojan', 'Zerajic', '1984-01-21');
    const ksenija = new Person('Ksenija', 'Mijanovic', '1993-05-13');
    const stefan = new Person('Stefan', 'Pavlovic', '1992-02-26');
    const uros = new Person('Uros', 'Opacic', '1994-01-30');

    function Player(person, betAmount, coun) {
        this.person = person;
        this.betAmount = betAmount;
        this.country = (coun.name[0] + coun.name[1]).toUpperCase();
        this.money = this.betAmount * coun.odds;
        this.number = 1;
    }
    Player.prototype.playerInfo = function () {
        return `${this.country}, ${this.money} eur, ${this.person.personInfo()}`;
    }
    const bojanKockar = new Player(bojan, 300, rs);
    const ksenijaKockar = new Player(ksenija, 500, rs);
    const stefanKockar = new Player(stefan, 800, rs);
    const urosKockar = new Player(uros, 450, rs);

    function Address(country, city, postalCode, street, number) {
        this.country = (country.name[0] + country.name[1]).toUpperCase();
        this.city = city;
        this.postalCode = postalCode;
        this.street = street;
        this.number = number;
    }
    Address.prototype.fullAddress = function () {
        return `${this.street} ${this.number}, ${this.postalCode} ${this.city}, ${this.country}`;
    }
    const knezaMilosa = new Address(rs, 'Beograd', 11000, 'Kneza Milosa', 82);
    const sarajevska = new Address(rs, 'Beograd', 11000, 'Sarajevska', 14);

    function BettingPlace(address) {
        this.listOfPlayers = [];
        this.totalAmount = 0;
        this.address = address;
        this.numberOfBets = 0;
    }
    BettingPlace.prototype.addPlayer = function (player) {
        this.listOfPlayers.push(player);
        this.totalAmount += player.betAmount;
        if (player.country === "SE") {
            this.numberOfBets += player.number;
        }
    }
    BettingPlace.prototype.bettingPlaceInfo = function () {
        let playerString = '';
        this.listOfPlayers.forEach(function (player) {
            playerString += player.playerInfo() + '\n\t\t';
        })
        return `${this.address.street}, ${this.address.postalCode} ${this.address.city}, sum of all bets: ${this.totalAmount} eur, 
        ${playerString}`;
    }


    const uplatnoMestoJedan = new BettingPlace(knezaMilosa);
    const uplatnoMestoDva = new BettingPlace(sarajevska);

    uplatnoMestoJedan.addPlayer(bojanKockar);
    uplatnoMestoJedan.addPlayer(ksenijaKockar);
    uplatnoMestoDva.addPlayer(stefanKockar);
    uplatnoMestoDva.addPlayer(urosKockar);

    function BettingHouse(competition) {
        this.competition = competition;
        this.listOfBettingPlaces = [];
        this.numberOfPlayers;
        this.bettingPlace;
    }
    BettingHouse.prototype.addBettingPlace = function (bettingPlace) {
        this.listOfBettingPlaces.push(bettingPlace);
        this.numberOfPlayers += bettingPlace.listOfPlayers.length;
        this.bettingPlace = bettingPlace.numberOfBets;
    }
    BettingHouse.prototype.fullData = function () {
        let bettingPlaceString = '';
        this.listOfBettingPlaces.forEach(function (betPlace) {
            bettingPlaceString += betPlace.bettingPlaceInfo() + '\n\t\t';
        })
        return `${this.competition} , ${this.listOfBettingPlaces.length} betting places, ${this.numberOfPlayers} bets 
        ${bettingPlaceString}
        there are ${this.bettingPlace} bets on Serbia`;
    }


    const soccerBetKladionica = new BettingHouse('Basketball World Cup Winner');


    soccerBetKladionica.addBettingPlace(uplatnoMestoJedan);
    soccerBetKladionica.addBettingPlace(uplatnoMestoDva);

    console.log(soccerBetKladionica.fullData());

})();




