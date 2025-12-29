import React, { useEffect, useState } from 'react'
import Input from './components/Input'
import MoviesCard from './components/MoviesCard'

export default function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  async function fetchMovies() {
    let API = null;
    if (search) {
      API = `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${search}`;
    } else {
      API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

    }
    const response = await fetch(API)
    const data = await response.json();
    setMovies(data.results)
  }


  useEffect(
    () => {
      fetchMovies()
    },
    [search]
  )




  return (
    <div className='container-xxl p-4'>
      <Input search={search} setSearch={setSearch} type="text" placeText="Search Movies......" myclassName="w-75 rounded-4 bg-light" />
      <MoviesCard movies={movies} />
    </div>
  )
}
