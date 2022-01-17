let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let name = prompt('Один из последних просмотренных фильмов?', '');

        let rating = prompt('На сколько его оцените?');

        if (name != null && rating != null && name != '' && rating != '' && name.length < 50 && rating.length < 50) {
            personalMovieDB.movies[name] = rating;
            console.log('done')
        } else {
            console.log('error')
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов')
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель')
    } else if (personalMovieDB.count > 30) {
        console.log('Вы киноман')
    } else {
        console.log('Произошла ошибка')
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) console.log(personalMovieDB);
}

showMyDB(personalMovieDB.privat);


function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        let genres = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');

        if (genres != null && genres != '') {
            personalMovieDB.genres[i] = genres;
            console.log('genres done')
        } else {
            console.log('genres error')
            i--;
        }
    }
}

writeYourGenres()

console.log(personalMovieDB);

