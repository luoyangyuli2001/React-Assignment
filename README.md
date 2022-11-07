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

+ / - displays discover movies page.
+ /blogs/:id - displays a particular blog.
+ /blogs/:id/comments - detail view of a particular blog and its comments.
+ etc.

## Independent learning (If relevant).

Itemize the technologies/techniques you researched independently and adopted in your project, 
i.e. aspects not covered in the lectures/labs. Include the source code filenames that illustrate these 
(we do not require code excerpts) and provide references to the online resources that helped you (articles/blogs).