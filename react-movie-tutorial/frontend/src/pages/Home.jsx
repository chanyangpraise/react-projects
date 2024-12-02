import MovieCard from "../components/MovieCard";
import { useState } from "react";

function Home() {
  const movies = [
    { id: 1, title: "John Wick", release_date: "2020" },
    { id: 2, title: "Dune", release_date: "2022" },
    { id: 3, title: "The Matrix", release_date: "2024" },
  ];

  return (
    <div className="home">
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
