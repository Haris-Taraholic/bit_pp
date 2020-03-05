var airlineOne = (function () {
    ///////////////////////////////////////////////////////////////////////CREATING PERSON
    function Persone(name, surname) {
        this.name = name;
        this.surname = surname;
        this.getInfoforPerson = function () {
            return this.name + "\t" + this.surname;
        }
    }

    ///////////////////////////////////////////////////////////////CREATING SEAT
    function Seat(number, category) {
        if (category === undefined) {
            category = "e";
        }
        if (number === undefined) {
            number = 100 * Math.random();
            number.round();
        }
        this.number = number;
        this.category = category;
        this.getInfoforSeat = function () {
            return this.number + "\t" + this.category;
        }
    }

    ////////////////////////////////////////////////////////////CREATING PASSANGER 
    function Passanger(person, seat) {
        this.person = person.getInfoforPerson();
        this.seat = seat.getInfoforSeat();

        this.getInfoforPassanger = function () {

            return this.person + '\t' + this.seat;
        }
    }
    var personOne = new Persone("Bojan", "Zerajic");
    var personTwo = new Persone("Haris", "Taraholic");

    var seatOne = new Seat(22, "e");
    var seatTwo = new Seat(23, "b");

    var passangerOne = new Passanger(personOne, seatOne);
    var passangerTwo = new Passanger(personTwo, seatTwo);

    ////////////////////////////////////////////////////////////////CREATING FLIGTH
    function Flight(relation, date) {
        this.relation = relation;
        this.date = date;
        this.passangers = [];

        this.addPassangers = function (objectPassanger) {
            this.passangers.push(objectPassanger);
        }
        this.getDataFromFligth = function () {
            var passangersString = " ";
            for (var i = 0; i < this.passangers.length; i++) {
                passangersString += "\n" + this.passangers[i].getInfoforPassanger();
            }
            return " " + this.relation + '\t' + this.date + passangersString;
        }
    }

    /////////////////////////////////////////////////////////////////CREATING AIRPORT

    function Airport() {
        this.name = "Nikola Telsa";
        this.fligths = [];
        this.addfligth = function (objectFligth) {
            this.fligths.push(objectFligth);
        }
        this.getInfoFromAirport = function () {
            var flightString = "";
            for (var i = 0; i < this.fligths.length; i++) {
                flightString += "\n" + this.fligths[i].getDataFromFligth() + "\n";
            }
            return this.name + ", total passangers:  2 " + "\n" + '\t' + flightString;
        }
    }
    ////////////////////////////////////////////////

    var fligthOne = new Flight("Belgrade - New York", " 18. 12. 2020.");

    fligthOne.addPassangers(passangerOne);
    fligthOne.addPassangers(passangerTwo)

    ////////////////////////////////////////////////////

    var fligthTwo = new Flight("Belgrade - Istambul", "12.06.2020.")
    fligthTwo.addPassangers(passangerTwo);

    ////////////////////////////////////////////////////
    var nikolaTesla = new Airport();
    nikolaTesla.addfligth(fligthOne);
    nikolaTesla.addfligth(fligthTwo);

    return nikolaTesla.getInfoFromAirport();
})()
console.log(airlineOne);
