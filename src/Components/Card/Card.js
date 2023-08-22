import React, { useEffect, useState } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { Link } from 'react-router-dom';
import './Card.css'

const Card = ({ movie }) => {
    const [isLoading, setIsloading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsloading(false)
        }, 1500)
    }, [])

    return (
        <>
            {
                isLoading
                    ?
                    <div className='cards'>
                        <SkeletonTheme color="#202020" highlightColor='#444'>
                            <Skeleton height={300} duration={2} />
                        </SkeletonTheme>
                    </div>
                    :
                    <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none", color: "white" }}>
                        <div className="cards">
                            <img className="cards__img" src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""}`} alt='moviePoster' />
                            <div className="cards__overlay">
                                <div className="card__title">{movie?.original_title}</div>
                                <div className="card__runtime">
                                    {movie?.release_date}
                                    <span className="card__rating">{movie?.vote_average}<i className='fas fa-star' /></span>
                                </div>
                                <div className="card__description">
                                    {movie?.overview?.slice(0, 118) + "..."}
                                </div>
                            </div>
                        </div>
                    </Link>
            }
        </>
    )
}

export default Card
