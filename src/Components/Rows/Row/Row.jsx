import { useEffect, useState } from "react";
import axios from "../../../Utils/axios";
import styles from "./row.module.css";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

function Row({ title, fetchUrl, isSmall, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  // const [seclectedmovie, setSelectedMovies] = useState("");
  const BaseUrl = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    (async () => {
      try {
        console.log(fetchUrl);
        const request = await axios.get(fetchUrl);
        console.log(request);
        setMovies(request.data.results);
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, [fetchUrl]);

  const PlayTrailer = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name).then(
        (url) => {
          console.log(url);
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log(urlParams);
          console.log(urlParams.get("v"));
          setTrailerUrl(urlParams.get("v"));
        }
      );
    }
  };

  const opts = {
    height: "360px",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className={styles.single_row_container}>
      <div className={styles.banner_title}>
        <h1>{title}</h1>
      </div>
      <div
        className={`${styles.movie_row} ${
          isSmall ? styles.isSmall : styles.isLarge
        }`}
      >
        {movies?.map((singleMovie, i) => (
          <div key={singleMovie.id}>
            <img
              src={BaseUrl + singleMovie.poster_path}
              alt={singleMovie.title}
              onClick={() => PlayTrailer(singleMovie)}
            />
          </div>
        ))}
      </div>
      <div className={styles.YouTube_trailer}>
        {/* {trailerUrl && <h1>Trailer of አልዩ አምባ ---{seclectedmovie}--- </h1>} */}
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
}
export default Row;
