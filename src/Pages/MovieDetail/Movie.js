import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Movie.css";

const Movie = () => {
  const { id } = useParams();
  const [currentMovieDetail, setCurrentMovieDetail] = useState();

  const getData = async () => {
    try {
      const response = await axios(
        `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
      );
      console.log("movie", response);
      setCurrentMovieDetail(response?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="movie">
      {/* <div className='movie__intro'>
                <img className="movie__backdrop" src={`https://image.tmdb.org/t/p/original${currentMovieDetail?.backdrop_path}`} alt='moviedetailimage' />
            </div>
            <div className="movie__detail">
                <div className="movie__detailLeft">
                    <div className="movie__posterBox">
                        <img className="movie__poster" src={`https://image.tmdb.org/t/p/original${currentMovieDetail?.poster_path}`} alt="movieImage" />
                    </div>
                </div>
                <div classsName="movie__detailRight">
                    <div className="movie__detailRightTop">
                        <div className='movie__name'>{currentMovieDetail?.original_title}</div>
                        <div className="movie__tagline">{currentMovieDetail?.tagline}</div>
                        <div className="movie__rating">
                            {currentMovieDetail?.vote_average} <i class="fas fa-star" />
                            <span className='movie__voteCount'>{currentMovieDetail?.vote_count} Votes</span>
                        </div>
                    </div>
                    <div className="movie__runtime">
                        {currentMovieDetail?.runtime} mins
                    </div>
                    <div className="movie__releaseDate">
                        {currentMovieDetail?.release_date}
                    </div>
                    <div className="movie__genres">
                        {
                            currentMovieDetail && currentMovieDetail?.genres
                                ?
                                currentMovieDetail?.genres?.map(genre => (
                                    <>
                                        <span className="movie__genre" id={genre.id}>
                                            {genre?.name}
                                        </span>
                                    </>
                                ))
                                :
                                ""
                        }
                    </div>
                    <div className='movie__detailRightBottom'>
                        <div className="synopsisText">Synopsis</div>
                        <div>{currentMovieDetail?.overview}</div>
                    </div>
                </div>
            </div>
            <div className="movie__links">
                <div className="movie__heading">Useful Links</div>
                {
                    currentMovieDetail && currentMovieDetail?.homepage && <a href={currentMovieDetail?.homepage} target="_blank" style={{ textDecoration: "none" }}><p><span className="movie__homeButton movie__Button">Homepage<i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }

                {
                    currentMovieDetail && currentMovieDetail?.imdb_id && <a href={"https://www.imdb.com/title/" + currentMovieDetail?.imdb_id} target="_blank" style={{ textDecoration: "none" }}><p><span className="movie__imdbButton movie__Button">IMDb <i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
            </div>
            <div className="movie__heading">Production Companies</div>
            <div className="movie__production">
                {
                    currentMovieDetail && currentMovieDetail.production_companies && currentMovieDetail.production_companies.map(company => (
                        <>
                            {
                                company?.logo_path
                                &&
                                <span className="productionCompanyImage">
                                    <img className="movie__productionCompany" src ={"https://image.tmdb.org/t/p/original" + company?.logo_path}  alt="movieIamge"/>
                                    <span>{company?.name}</span>
                                </span>
                            }
                        </>
                    ))
                }
            </div> */}

      <iframe
        title={"movie"}
        width="100%"
        style={{
          minHeight: "calc(100vh - 64px)",
          marginTop: "64px",
        }}
        src={`https://vidsrc.to/embed/movie/${currentMovieDetail?.imdb_id}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default Movie;
