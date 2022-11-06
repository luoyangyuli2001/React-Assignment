import React, { useEffect, useState } from "react";
import PageTemplate from '../components/templateDiscoverPage';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'

const HomePage = () => {
  const [moviesData, setMoviesData] = useState([])
  const [page, setPage] = useState(1);

  useEffect(() => {
      fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${page}`
      )
      .then(response => response.json())
      .then(json => {
        setMoviesData(prev => [...prev, ...json.results]);
      })
    }, [page]);

  const handleScroll = () => {
    if(window.innerHeight + document.documentElement.scrollTop + 1 >= document
      .documentElement.scrollHeight) {
        setPage(prev => prev + 1)
      }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <PageTemplate
      title="Discover Movies"
      movies={moviesData}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />
      }}
    />
  );
};
export default HomePage;