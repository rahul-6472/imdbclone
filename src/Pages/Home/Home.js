import React, {useState, useEffect} from 'react';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Home.css';
import MovieList from '../../Components/MovieList/MovieList';
import Header from '../../Components/Header/Header';
import PageMetaData from '../../Components/pageMetaData/pageMetaData';

const Home = () => {
    const [popularMovies,setPopularMovies] = useState([])
    const getPopularMovies = async () => {
       try {
        const response = await axios("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
        setPopularMovies(response?.data?.results)
       } catch (error) {
        console.error(error)
       }
    }
    
    useEffect(()=> {
        getPopularMovies()
    },[])

    return (
        <>
            <PageMetaData 
                title="movies"
                description="watch movies online for free"
            />
            <Header />
            <div className="poster">
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {
                        popularMovies?.map((movie) => (
                            <Link style={{textDecoration:"none", color:"white"}} to={`/movie/${movie.id}`}>
                                <div className="posterImage">
                                    <img src={`https://image.tmdb.org/t/p/original${movie && movie?.backdrop_path}`} alt="movieimage"/>
                                </div>
                                <div className="posterImage__overlay">
                                    <div className="posterImage__title">{movie?.original_title }</div>
                                    <div className="posterImage__runtime">
                                        {movie?.release_date}
                                        <span className="posterImage__rating">
                                            {movie?.vote_average}
                                            <i className="fas fa-star" />
                                        </span>
                                    </div>
                                    <div className='posterImage__description'>
                                        {movie?.overview}
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </Carousel>
                <MovieList/>
            </div>
        </>
    )
}

export default Home