const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 0);


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
};


// const allInformationAboutWatchingFilm = () => {
//     let name = prompt('Один из последних просмотренных фильмов?', '');

//     let rating = prompt('На сколько его оцените?');
//     personalMovieDB.movies[name] = rating;
// }


let answer = 0;

// while (answer < 2) {
//     let name = nameLastWatchedMovie();

//     if (name === null || name.length === 0 || name.length > 50) {
//         continue;
//     }

//     let rating = ratingLastWatchedMovie();

//     if (rating === null || rating.length === 0 || rating.length > 50) {
//         continue;
//     }
//     personalMovieDB.movies[name] = rating;
//     answer++;
// }

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

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов')
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель')
} else if (personalMovieDB.count > 30) {
    console.log('Вы киноман')
} else {
    console.log('Произошла ошибка')
}



console.log(personalMovieDB);

