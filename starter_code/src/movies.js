/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = movies => {
  const orderedMovies = movies.slice().sort((a, b) => {
    if (a["year"] === b["year"]) {
      return a["title"].localeCompare(b["title"]);
    }
    return a["year"] - b["year"];
  });
  return orderedMovies;
};
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
const howManyMovies = movies => {
  const spielbergMovies = movies.filter(movie => {
    if (
      movie["director"] === "Steven Spielberg" &&
      movie["genre"].includes("Drama")
    ) {
      return true;
    }
  });
  return spielbergMovies.length;
};
// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = movies => {
  const alphabeticallySortedArr = movies.slice().sort(function(a, b) {
    return a["title"].localeCompare(b["title"]);
  });
  const result = alphabeticallySortedArr.slice(0, 20).map(movie => {
    return movie["title"];
  });
  return result;
};
// Iteration 4: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = movies => {
  let avg;

  if (movies.length === 0) {
    return 0;
  }
  const totalRatings = movies.reduce((accumulator, currentValue) => {
    if (!currentValue.rate) {
      return 0 + accumulator;
    }
    return currentValue["rate"] + accumulator;
  }, 0);
  avg = totalRatings / movies.length;
  return Math.round(avg * 100) / 100;
};
// Iteration 5: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = movies => {
  const dramaMovies = movies.filter(movie => movie["genre"].includes("Drama"));

  if (!dramaMovies.length) {
    return 0;
  }
  const dramaMovieRatings = dramaMovies.reduce((accumulator, currentValue) => {
    return accumulator + currentValue["rate"];
  }, 0);
  return Math.round((dramaMovieRatings / dramaMovies.length) * 100) / 100;
};
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes = movies => {
  const stringConvert = str => {
    const result = str.split(" ");
    if (result.length === 1 && result[0].includes("h")) {
      return parseInt(result[0].split("h")[0]) * 60;
    } else if (result.length === 1 && result[0].includes("m")) {
      return parseInt(result[0]);
    } else {
      return (
        parseInt(result[0].replace(/\D/g, "")) * 60 +
        parseInt(result[1].replace(/\D/g, ""))
      );
    }
  };
  return movies.map(movie => ({
    title: movie.title,
    year: movie.year,
    director: movie.director,
    duration: stringConvert(movie.duration),
    genre: movie.genre,
    rate: movie.rate
  }));
};
// BONUS Iteration: Best yearly rate average - Best yearly rate average
