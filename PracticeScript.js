"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// const ans1 = prompt('Один из последних просмотренных фильмов?',''),
//       ans2 = prompt('На сколько оцените его?',''),
//       ans3 = prompt('Один из последних просмотренных фильмов?',''),
//       ans4 = prompt('На сколько оцените его?','');

// personalMovieDB.movies[ans1] = ans2;
// personalMovieDB.movies[ans3] = ans4;

// for (let i = 0; i < 2; i++) {
//     const ans1 = prompt('Один из последних просмотренных фильмов?',''),
//           ans2 = prompt('На сколько оцените его?','');

//     if (ans1 != null && ans2 != null && ans1 != '' && ans2 != '' && ans1.length < 50) {
//         personalMovieDB.movies[ans1] = ans2;
//         console.log('DONE');
//     } else {
//         console.log('error!');
//         i--;
//     }
// }

// let x =0;
// while (x < 2) {
//     const ans1 = prompt('Один из последних просмотренных фильмов?',''),
//           ans2 = prompt('На сколько оцените его?','');

//     if (ans1 != null && ans2 != null && ans1 != '' && ans2 != '' && ans1.length < 50) {
//         personalMovieDB.movies[ans1] = ans2;
//         console.log('DONE');
//     } else {
//         console.log('error!');
//         x--;
//     }
//     x++;
// }

let x =0;
do {
    const ans1 = prompt('Один из последних просмотренных фильмов?',''),
          ans2 = prompt('На сколько оцените его?','');

    if (ans1 != null && ans2 != null && ans1 != '' && ans2 != '' && ans1.length < 50) {
        personalMovieDB.movies[ans1] = ans2;
        console.log('DONE');
    } else {
        console.log('error!');
        x--;
    }
    x++;
} while (x < 2);

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}
console.log(personalMovieDB);
