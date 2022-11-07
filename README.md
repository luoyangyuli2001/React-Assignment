# Assignment 1 - ReactJS app.

Name: Luo Yang

## Overview.

A react movie app. Web App Development CA-1.

### Features.

+ New moive page - Top rated moives
+ New people page - Popular people
+ New people details page - Person details
+ New site header (Drop-down Menu)
+ Sorting (14 sorting options) on discover page
+ New movie rating for movie card
+ User can click the link on person details page to reach the movie details page.
+ Pagination on Top rated movies page and Upcoming movies page.
+ New discover page - Infinite scroll

## Setup requirements.

+ npm install
+ npm start

## API endpoints.

Old
+ Discover list of movies - discover/movie
+ Movie details - movie/:id
+ Get the user reviews for a movie - /movie/:id/reviews
+ Get the images belong to a movie - /movie/:id/images
+ Movie genres - /genre/movie/list
+ Get a list of upcoming movies - /movie/upcoming

New
+ Person details - /person/:id
+ Get the images belong to a person - /person/:id/images
+ Get the top rated movies on TMDB - /movie/top_rated
+ Get the list of popular people on TMDB - /person/popular
+ Get the movies and TV info of a person - /person/:id/combined_credits

## Routing.
Old
+ / - displays discover movies page.
+ /movies/favourite - displays user's favourite movies.
+ /movies/upcoming - displays upcoming movies.
+ /movies/:id - displays a particular movie's detail.
+ /reviews/form - User can write reviews for their favorite movies.
+ /reviews/:id - displays reviews about a movie.

New
+ /movies/top-rated - displays top rated movies.
+ /person/popular - displays popular people
+ /person/:id - displays a particular person's detail.

## Independent learning (If relevant).

### CircularProgress
+ Link: https://mui.com/material-ui/react-progress/#main-content

Movie ratings on TMDB are expressed in the form of a progress bar, which looks interesting. So I included a copy of it in my project - "CircularProgressWithLabel".

Actually, it consists of two "CircularProgess" and a label. One of the progress bars acts as the background, and the other one shows a specific percentage. And the background progress bar needs an opacity attribute.

I also noticed that different rating on TMDB shows different colors. It's easy since we have done similar jobs in react-basic-labs.

### InfiniteScroll
+ Concept of InfiniteScroll - Link: https://www.youtube.com/
+ InfiniteScroll - Link: https://www.youtube.com/watch?v=NZKUirTtxcg

It's a good experience for user if they can keep discovering new things when they scroll to the bottom of the page, just like youtube. When the user scrolls to the bottom, a new list of videos will exist.

### Pagination
+ Link: https://www.youtube.com/watch?v=8v6fYfhvO5E&t=926s

Upcoming movies page and Top rated movies page have pagination.

### Horizontal scroll
+ Link: https://stackoverflow.com/questions/69597992/how-to-implement-horizontal-scrolling-of-tiles-in-mui-gridlist

In person details page, there is a list of movies that the person is acting in. From a UI design point of view, it is better to use horizontal scrolling here. Actually, it's not difficult, just add some css style.


