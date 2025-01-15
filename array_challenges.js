
/*

The Dataset: Movie Mania

You are managing a database for a **movie rental platform** called **Movie Mania**. The dataset is an array of objects, where each object represents a movie with the following properties:

- `title` (string): The title of the movie.
- `genre` (string): The genre of the movie (e.g., "Action", "Comedy", "Drama").
- `rating` (number): The average viewer rating (out of 10).
- `rented` (boolean): Whether the movie has been rented.

*/

const movies = [
    { title: "Fast & Furious 10", genre: "Action", rating: 7.5, rented: true },
    { title: "The Notebook", genre: "Drama", rating: 8.0, rented: false },
    { title: "Spider-Man: No Way Home", genre: "Action", rating: 8.7, rented: true },
    { title: "Superbad", genre: "Comedy", rating: 7.0, rented: false },
    { title: "The Dark Knight", genre: "Action", rating: 9.0, rented: true },
    { title: "The Intern", genre: "Comedy", rating: 7.4, rented: false }
  ];
  
  /*
  
  Task 1: Movie Titles and Ratings 🎥 (Simple - `.map`)
  
  Your manager asks you to display a list of all movie titles and their ratings 
  for a promotional email campaign.
  
  Steps:
  1. Use `.map` to create a new array where each item is a string in this format:
     "[title] - Rating: [rating]/10"
  2. Log the resulting array.
  
  Expected Output:
  [
    "Fast & Furious 10 - Rating: 7.5/10",
    "The Notebook - Rating: 8.0/10",
    "Spider-Man: No Way Home - Rating: 8.7/10",
    "Superbad - Rating: 7.0/10",
    "The Dark Knight - Rating: 9.0/10",
    "The Intern - Rating: 7.4/10"
  ]
  */
  
  // ✍️ Solve it here ✍️
  
  
  /*
  Task 2: Find Highly Rated Movies 🌟 (Medium - `.filter`)
  
  Your customers have requested a list of **highly rated movies** 
  (movies with a rating of 8.0 or higher).
  
  Steps:
  1. Use `.filter` to create a new array containing only the movies with a rating >= 8.0.
  2. Log the resulting array.
  
  Expected Output:
  [
    { title: "The Notebook", genre: "Drama", rating: 8.0, rented: false },
    { title: "Spider-Man: No Way Home", genre: "Action", rating: 8.7, rented: true },
    { title: "The Dark Knight", genre: "Action", rating: 9.0, rented: true }
  ]
  */
  
  // ✍️ Solve it here ✍️
  
  
  
  /*
  Task 3: Total Viewer Ratings 📊 (Harder - `.reduce`)
  
  Your team wants to calculate the **total viewer ratings** for all the movies 
  currently **available for rent** (not rented).
  
  Steps:
  1. Use `.filter` to get only the movies where `rented` is `false`.
  2. Use `.reduce` to sum up the `rating` of the filtered movies.
  3. Log the total rating as:
     "The total rating for available movies is: [totalRating]"
  
  Expected Output:
  The total rating for available movies is: 22.4
  */
  
  // ✍️ Solve it here ✍️
  