const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', 0);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
};

const lastWatchedMovie = () => {
    return prompt('Один из последних просмотренных фильмов?', 0);
}

const nameLastWatchedMovie = () => {
    return prompt('Один из последних просмотренных фильмов?', 'Название');
}

const ratingLastWatchedMovie = () => {
    return prompt('На сколько его оцените?', 0);
}


const allInformationAboutWatchingFilm = () => {
    let name = nameLastWatchedMovie();
    let rating = ratingLastWatchedMovie();
    personalMovieDB.movies[name] = rating;
}

allInformationAboutWatchingFilm();
allInformationAboutWatchingFilm();

console.log(personalMovieDB);

