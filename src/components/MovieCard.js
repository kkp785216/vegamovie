import React from 'react'
import { Link } from 'react-router-dom'
import DateRangeIcon from '@mui/icons-material/DateRange';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const MovieCard = () => {

    const formatDate = (input) => {
        let date = new Date(input);
        return (date.getDay() <= 9 ? "0" + date.getDay() : date.getDay()) + " " + ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][date.getMonth()] + " " + date.getFullYear()
    }

    return (
        <div className='movie__card'>
            <Link to='/' className='movie__card__image'><img src="https://vegamovies.wtf/wp-content/uploads/2022/08/Bullet-Train-2022-165x248.jpg" alt="" /></Link>
            <h3 className='movie__card__title'><Link to='/'>The Gray Man</Link></h3>
            <div className='movie__card__extra'>
                <span className="movie__card__date">
                    <DateRangeIcon />
                    {formatDate('2022-08-04')}
                </span>
                <span className="movie__card__date">
                   <StarBorderIcon/>
                   7/10
                </span>
            </div>
        </div>
    )
}

export default MovieCard