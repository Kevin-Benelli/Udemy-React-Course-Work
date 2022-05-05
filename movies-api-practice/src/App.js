import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import Axios from "axios";
import "./App.css";

function App() {
  // const DEFAULT_MOVIES = [
  //   {
  //     id: 1,
  //     title: "Some Dummy Movie",
  //     openingText: "This is the opening text of the movie",
  //     releaseDate: "2021-05-18",
  //   },
  //   {
  //     id: 2,
  //     title: "Some Dummy Movie 2",
  //     openingText: "This is the second opening text of the movie",
  //     releaseDate: "2021-05-19",
  //   },
  // ];
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    const responseData = await Axios.get("https://swapi.dev/api/films");
    const transformedResponse = responseData.data.results.map((movieData) => {
      return {
        id: movieData.episode_id,
        title: movieData.title,
        releaseDate: movieData.release_date,
        openingText: movieData.opening_crawl,
      };
    });
    setMovies(transformedResponse);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  // const fetchMoviesHandler = () => {
  //   console.log("here");

  //   Axios.get("https://swapi.dev/api/films")
  //     .then((response) => {
  //       console.log(response.data.results);

  //       const transformedResponse = response.data.results.map((movieData) => {
  //         return {
  //           id: movieData.episode_id,
  //           title: movieData.title,
  //           releaseDate: movieData.release_date,
  //           openingText: movieData.opening_crawl,
  //         };
  //       });
  //       setDummyMovies(transformedResponse);
  //     })
  //     // .then((data) => {
  //     //   console.log("yoooo: ", data.data.results);
  //     //   setDummyMovies(() => data.data.results);
  //     // })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  // useEffect(() => {
  //   // console.log("here");
  //   // Axios.get("https://swapi.dev/api/people/1/").then((response) => {
  //   //   console.log("yoooo: ", response.data);
  //   //   setDummyMovies(() => response);
  //   // });
  //   // Axios.get("https://swapi.dev/api/people/1/", (response) => {
  //   //   // return response.json;
  //   //   console.log("yoooo: ", response);
  //   // });
  //   // .then((response) => {setDummyMovies(() => response)}).catch((error) => {console.log(error)});
  //   // return () => {};
  // }, []);

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      {/* <section>{dummyMovies.map((movi))}</section> */}
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && <p>We have no movies</p>}
        {isLoading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
