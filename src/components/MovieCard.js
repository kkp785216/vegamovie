import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = ({ video }) => {

    const formatDate = (input) => {
        let date = new Date(input);
        return (date.getDay() <= 9 ? "0" + date.getDay() : date.getDay()) + " " + ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][date.getMonth()] + " " + date.getFullYear()
    }

    return (
        <Link to={`/movie?id=${video.id}`} title={video.title} className="media" color="inherit">
            <span className="MuiBadge-root">
                <span className="MuiBadge-badge MuiBadge-anchorOriginTopRightRectangle MuiBadge-colorPrimary">{video.vote_average.toFixed(1)}</span>
            </span>
            <img className="media__poster" src={`https://image.tmdb.org/t/p/w300${video.poster_path}`} alt={video.title} />
            <strong className="media__title">{video.title}</strong>
            <span className="media__subTitle">Movie<span className="media__subTitle">{formatDate(video.release_date)}</span></span>
        </Link>
    )
}

export default MovieCard