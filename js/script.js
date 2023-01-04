'use strict';

let numberOfFilms;


function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '').trim();

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '').trim();
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

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

// showMyDB(personalMovieDB.privat);

function writeYuorGenres() {
    for (let i = 1; i <= 3; i++) {
        let genre = prompt(`Your favorite genre by number ${i}`).trim();
        personalMovieDB.genres = [...personalMovieDB.genres,genre];
    }
}

writeYuorGenres();



function rememberMyFilms() {
    for (let i = 0; i < personalMovieDB.count; i++) {
        let lastFilm1 = prompt('Last film?', 'Example').trim();
        let ratingFilm1 = +prompt('Rating?', '5').trim();
        // do {
        //     lastFilm1 = prompt('Last film?', 'Example');
        // } while (lastFilm1 === '' || lastFilm1 === null || lastFilm1.length > 50);

        if (lastFilm1 != '' && ratingFilm1 != '' && lastFilm1 != null && ratingFilm1 != null && lastFilm1.length < 50) {
            personalMovieDB.movies[lastFilm1] = ratingFilm1;
        } else {
            i--;
        }
    }
}

// rememberMyFilms();




function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {

    } else {
        console.log('Произошла ошибка');
    }
}

// detectPersonalLevel();
// 40

// console.log(personalMovieDB)





// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// }

// start();


// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//     setMovies: function () {
//         for (let i = 0; i < 2; i++) {
//             let name = prompt('Один из последних просмотренных фильмов?', '');

//             let rating = prompt('На сколько его оцените?');

//             if (name != null && rating != null && name != '' && rating != '' && name.length < 50 && rating.length < 50) {
//                 personalMovieDB.movies[name] = rating;
//                 console.log('done method')
//             } else {
//                 console.log('error method')
//                 i--;
//             }
//         }
//     },
//     detectLevel: function () {
//         if (personalMovieDB.count < 10) {
//             console.log('Просмотрено довольно мало фильмов')
//         } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//             console.log('Вы классический зритель')
//         } else if (personalMovieDB.count > 30) {
//             console.log('Вы киноман')
//         } else {
//             console.log('Произошла ошибка')
//         }
//     },
//     getPersonalInfo: function (hidden) {
//         if (!hidden) console.log(personalMovieDB, 'personalMovieDB');
//     }
// };


// personalMovieDB.setMovies(); 33
// personalMovieDB.detectLevel();
// personalMovieDB.getPersonalInfo(personalMovieDB.privat);




// function writeYourGenres() {
//     for (let i = 0; i < 3; i++) {
//         let genres = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');

//         if (genres != null && genres != '') {
//             personalMovieDB.genres[i] = genres;
//             console.log('genres done')
//         } else {
//             console.log('genres error')
//             i--;
//         }
//     }
// }

// writeYourGenres()

// console.log(persona32lMovieDB);

//Object

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     }
// }

// let counter = 0;

// for (let key in options) {

//     if (typeof (options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Property ${i} is ${options[key][i]} `);
//             counter++;
//         }
//     } else {
//         console.log(`Property ${key} is ${options[key]} `);
//         counter++;
//     }

// }

// console.log('counter = ', counter);
// console.log('counter = ', Object.keys(options).length);


//Array
