import React from "react";
import { useWatchlist } from "../context/WatchlistContext";

export default function MovieCard({movie}){

    const { addToWatchlist } = useWatchlist();

    return (
        <div className="col-md-4 movie-card">
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
            <img src={movie.Poster} alt={`${movie.Title} Poster`} />
            <button onClick={() => addToWatchlist(movie)}>Add to Watchlist</button>
        </div>
    )
}