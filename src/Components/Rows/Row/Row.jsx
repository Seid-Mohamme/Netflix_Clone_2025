// Backup
{
  /* <div> */
}
// import { useEffect, useState } from "react";
// import "./Row.css";
// import axios from "axios";
// import movieTrailer from "movie-trailer";
// // import YouTube from "react-youtube";

// const Row = ({ title, fetchUrl, isLargeRow }) => {
//   const [movies, setMovie] = useState([]);
//   const [trailerUrl, settrailerUrl] = useState("");
//   const base_url = "https://image.tmdb.org/t/p/original";
//   useEffect(() => {
//     (async () => {
//       try {
//         console.log(fetchUrl);
//         const request = await axios.get(`${fetchUrl}`);
//         console.log(request);
//         setMovie(request.data.results);
//       } catch (error) {
//         console.log("error", error);
//       }
//     })();
//   }, [fetchUrl]);

//   // const handleClick = (movie) => {
//   //   if (trailerUrl) {
//   //     settrailerUrl("");
//   //   } else {
//   //     movieTrailer(movie?.title || movie?.name || movie?.original_name).then(
//   //       (url) => {
//   //         console.log(url);
//   //         const urlParams = new URLSearchParams(new URL(url).search);
//   //         console.log(urlParams);
//   //         console.log(urlParams.get("#"));
//   //         settrailerUrl(urlParams.get("#"));
//   //       }
//   //     );
//   //   }
//   // };
//   // const opts = {
//   //   height: "390",
//   //   widgth: "100%",
//   //   playerVars: {
//   //     autoplay: 1,
//   //   },
//   // };
//   return (
//     <div className="row">
//       <h2>{title}</h2>
//       <div className="row_posters">
//         {movies.map((movie, index) => (
//           <img
//             onClick={() => handleClick(movie)}
//             key={index}
//             src={`${base_url}${
//               isLargeRow ? movie.poster_path : movie.backdrop_path
//             }`}
//             alt={movie.name}
//             className={`row_poster ${isLargeRow && "row_posterLarge"}`}
//           />
//         ))}
//       </div>

//       {/* <div style={{ padding: "40px" }}>
//     {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
//   </div> */}
//     </div>
//   );
// };
// </div>
// export default Row;
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
    //   Instance.get(fetchUrl).then((res) => setMovies(res.data.results));
    // }, [fetchUrl]);

    // const playTrailer = (mov) => {
    //   if (trailerUrl) {
    //     setTrailerUrl("");
    //     // setSelectedMovies("");
    //   } else {
    //     movieTrailer(mov.original_title || mov.title).then((data) => {
    //       const urlParms = new URLSearchParams(new URL(data).search);
    //       setTrailerUrl(urlParms.get("v"));
    //       // setSelectedMovies(mov.title);
    //     });
    //   }
    // };

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
