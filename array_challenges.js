// Movie Mania Dataset
const movies = [
  { title: "Fast & Furious 10", genre: "Action", rating: 7.5, rented: true },
  { title: "The Notebook", genre: "Drama", rating: 8.0, rented: false },
  { title: "Spider-Man: No Way Home", genre: "Action", rating: 8.7, rented: true },
  { title: "Superbad", genre: "Comedy", rating: 7.0, rented: false },
  { title: "The Dark Knight", genre: "Action", rating: 9.0, rented: true },
  { title: "The Intern", genre: "Comedy", rating: 7.4, rented: false }
];

// 🎥 Task 1: Movie Titles and Ratings
const movieTitlesAndRatings = movies.map(movie => {
  return `${movie.title} - Rating: ${movie.rating}/10`;
});

console.log("🎬 Movie Titles and Ratings:");
console.log(movieTitlesAndRatings);

// 🌟 Task 2: Find Highly Rated Movies
const highlyRatedMovies = movies.filter(movie => movie.rating >= 8.0);

console.log("\n🌟 Highly Rated Movies (8.0+):");
console.log(highlyRatedMovies);
