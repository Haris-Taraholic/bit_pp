"use strict";

var a = (function () {
    console.log('Hi!\n');


    function Genre(name) {
        this.name = name;
        this.getData = function (name) {
            var shortForGenre = '';
            for (var i = 0; i < this.name.length; i++) {
                if (i === 0 || i === this.name.length - 1) {
                    shortForGenre += this.name[i];
                }
            }

            return shortForGenre;
        }
    }

    var genreOne = new Genre('Action');
    var genreTwo = new Genre('Comedy');
    var genreThree = new Genre('Drama');
    var genreFour = new Genre('Thriller');



    function Movie(title, length, genres) {
        this.title = title;
        this.genre = genres.getData();
        this.length = length;

        this.getMovieLength = function () {
            return this.length;
        }

        this.getData = function () {
            return this.title + ', ' + this.length + 'min, ' + this.genre;
        }
    }
    var movieOne = new Movie("The Shawshank Redemption", 130, genreOne);
    var movieTwo = new Movie("War for the Planet of the Apes", 140, genreTwo);
    var movieThree = new Movie("The Dark Tower", 95, genreThree);
    var movieFour = new Movie("Deadpool", 108, genreFour);



    function Program(date) {
        this.date = date;
        this.listOfMovies = [];
        this.totalNumberofMovies;

        this.addMovie = function (movie) {
            this.listOfMovies.push(movie);
            this.totalNumberofMovies = this.listOfMovies.length;
        }

        this.getNumberOfMovies = function () {
            return this.totalNumberofMovies;
        }

        this.getData = function () {
            var proDuration = 0;
            var moviesString = '';
            for (var i = 0; i < this.listOfMovies.length; i++) {
                moviesString += "\t\t" + this.listOfMovies[i].getData() + '\n';
                proDuration += this.listOfMovies[i].getMovieLength();
            }
            return this.date + ",  program duration " + proDuration + "min \n" + moviesString;
        }

    }
    var programOne = new Program('12.12.2020.');
    programOne.addMovie(movieOne);
    programOne.addMovie(movieTwo);
    programOne.addMovie(movieThree);

    var programTwo = new Program('13.12.2020.');
    programTwo.addMovie(movieFour);

    function Festival(name) {
        this.name = name;
        this.listOfPrograms = [];

        this.addProgram = function (program) {
            this.listOfPrograms.push(program);
        }
        this.getData = function () {
            var festivalString = '';
            var totNumOfMoviesInAllPrograms = 0;
            for (var i = 0; i < this.listOfPrograms.length; i++) {
                festivalString += this.listOfPrograms[i].getData() + "\n";
                totNumOfMoviesInAllPrograms += this.listOfPrograms[i].getNumberOfMovies();
            }

            return this.name + " has " + totNumOfMoviesInAllPrograms + " movie titles \n" + festivalString;
        }
    }

    var festivalOne = new Festival("Weekend festival");
    festivalOne.addProgram(programOne);
    festivalOne.addProgram(programTwo);

    return festivalOne.getData();


}());



console.log(a);
