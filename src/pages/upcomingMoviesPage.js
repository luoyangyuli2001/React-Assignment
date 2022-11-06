import React, { useState } from "react";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import PageTemplate from "../components/templateMovieListPage";
import { getUpcomingMovies } from "../api/tmdb-api";
import AddToToWatchIcon from '../components/cardIcons/addToToWatch'
import Pagination from '@mui/material/Pagination';

const UpcomingMoviesPage = () => {
  const [page, setPage] = useState(1);
  const handleChange = (e, p) => {
    setPage(p)
  }
  const { data, error, isLoading, isError }  = useQuery(
    ['upComing', {page}],
    getUpcomingMovies
  );

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  
  const movies = data.results;

  return (
    <>
      <PageTemplate
        title="Upcoming Movies"
        movies={movies}
        action={(movie) => {
          return <AddToToWatchIcon movie={movie} />
        }}
      />   
      <div style={{    
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white",}}
    >
      <div style={{
        position: "fixed",
        bottom: 0,
        zIndex: 200,
        background: "green",
        padding: "10px 80px",
        color: "white",
        width: "100%",
      }}>
        <Pagination 
        style={{
          display: "flex",
          justifyContent: "center",
        }} 
        variant='outlined' 
        count={10}
        page={page}
        onChange={handleChange}
        />
      </div>
    </div>
    </>
  );
};

export default UpcomingMoviesPage;