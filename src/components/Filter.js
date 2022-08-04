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
            <div className="social">
                <div className='social__buttons'>
                    <a href="https://github.com/kkp785216/vegamovie"  target='_block'>Github Repo</a>
                </div>
                <div className='social__buttons'>
                    <a href="https://github.com/kkp785216" target='_block'>Github Profile</a>
                </div>
                <div className='social__buttons'>
                    <a href="mailto://kkp785216@gmail.com">Contact Me</a>
                </div>
            </div>
        </div>
    )
}

export default Filter