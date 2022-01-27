"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
console.log(numberOfFilms);

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

let num = 0;

do {
	 const a = prompt("Один из последних просмотренных фильмов?"),
  b = prompt("На сколько оцените его?");
  num++;


if (a != null && b != null && a != '' && b != '' && a.length < 50) {
  personalMovieDB[a] = b;
}
else{
   console.log('Error');
  num--;
 }
}
 while( num < 1);

if (personalMovieDB.count < 10) {
  console.log("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log("Вы классический зритель");
  } else if (personalMovieDB.count >= 30) {
  console.log("Вы киноман");
  } else {
  console.log("Произошла ошибка");
}

