import React, { useState } from "react";

export default function Home(){
    const [query, setQuery] = useState('');

    const fetchMovies = async() => {
        // Using Fetch()
        // const response = await fetch (`https://www.omdbapi.com/${apikey}/${query}`);

        // Using Axios()
    }

    return (
        <div>
            <h1>Movie Search</h1>
            <input
            type="text"
            placeholder="Search for Movies..." 
            />
            <button>Search</button>
        </div>
    )
}