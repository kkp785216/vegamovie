import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CancelIcon from '@mui/icons-material/Cancel';
import { activeGenreAction } from '../Redux/Actions/activeGenre.action';

const Filter = () => {

    const { genre } = useSelector(state => state.genre)
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.target.parentElement.classList.toggle('active');
        let itratedGenre = []
        document.querySelectorAll('.filter__genre.active').forEach(e=>{
            itratedGenre.push({id: parseInt(e.getAttribute('genreid')), name: e.getAttribute('genrename')});
        })
        dispatch(activeGenreAction(itratedGenre));
    }

    return (
        <div className="filter">
            <ul>
                {genre?.map((element) => (
                    <li className='filter__genre'  key={element.id} genreid={element.id} genrename={element.name}>
                        <button onClick={(e)=>{handleClick(e)}}>
                            {element.name}
                            <CancelIcon className='filter__removeIcon'/>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Filter