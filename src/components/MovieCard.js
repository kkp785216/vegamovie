import React from 'react'
import { Link } from 'react-router-dom'
import DateRangeIcon from '@mui/icons-material/DateRange';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const MovieCard = ({ video }) => {

    const formatDate = (input) => {
        let date = new Date(input);
        return (date.getDay() <= 9 ? "0" + date.getDay() : date.getDay()) + " " + ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][date.getMonth()] + " " + date.getFullYear()
    }

    return (
        <div class="media" color="inherit">
            <span class="MuiBadge-root">
                <span class="MuiBadge-badge MuiBadge-anchorOriginTopRightRectangle MuiBadge-colorPrimary">8.3</span>
            </span>
            <img class="poster" src="https://image.tmdb.org/t/p/w300/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg" alt="Top Gun: Maverick" />
            <b class="title">Top Gun: Maverick</b>
            <span class="subTitle">Movie<span class="subTitle">2022-05-24</span></span>
        </div>
    )
}

export default MovieCard