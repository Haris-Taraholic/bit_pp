function Ganre() {
    this.name = "AN";
}

//////////////////////////////////////////////////////////////////////////////
function Movie(title, length) {
    this.title = title;
    this.ganre = ganre.name;
    this.length = length;
    this.getDataMovie = function () {
        return this.title + ", " + this.length + ", " + this.ganre;
    }
}

////
var movieOne = new Movie("Spider-Man: Homecoming-man", "133min");
var movieTwo = new Movie("War for the Planet of the Apes", "140min")
/////////////////////////////////////////////////////////////////////////////


console.log(movieOne.getDataMovie());
console.log(movieTwo.getDataMovie());

