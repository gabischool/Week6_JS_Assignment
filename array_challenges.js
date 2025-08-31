const titlesAndRatings = movies.map(function(movie){
  var t = String(movie.title);
  var r = Number(movie.rating);
  return t + ' - ' + r.toFixed(1);
});
console.log('Formatted:', titlesAndRatings);

const highRated = movies.filter(function(movie){
  return Number(movie.rating) >= 8.0;
});
console.log('High rated (>=8.0):', highRated);
