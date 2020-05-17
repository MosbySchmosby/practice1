"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const ans1 = prompt('Один из последних просмотренных фильмов?',''),
      ans2 = prompt('На сколько оцените его?',''),
      ans3 = prompt('Один из последних просмотренных фильмов?',''),
      ans4 = prompt('На сколько оцените его?','');

personalMovieDB.movies[ans1] = ans2;
personalMovieDB.movies[ans3] = ans4;

console.log(personalMovieDB);