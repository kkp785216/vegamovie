import React, { useEffect } from 'react'
import '../styles/Header.scss'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { genreAction } from '../Redux/Actions/genre.action'
import SearchIcon from '@mui/icons-material/Search';
import Filter from './Filter'

const Header = () => {

  const dispatch = useDispatch();
  const { genre } = useSelector(state => state.genre)
  useEffect(() => {
    genre?.length <= 0 && dispatch(genreAction());
  }, [dispatch, genre]);

  return (
    <header className='header'>
      <Link to='/'><img src="logo.png" alt="Logo" className="d-block header__logo" /></Link>
      <nav className='nav'>
        <ul>
          <li className='active'><Link to='/'>Home</Link></li>
          <li><Link to='/'>Latest</Link></li>
          <li><Link to='/'>Popular</Link></li>
          <li><Link to='/'>Top Rated</Link></li>
          <li><Link to='/'>Upcomming</Link></li>
          {/* <li>
            <Link to='/'>Genre</Link>
            <ul>
              {genre?.map((element) => (
                <li key={element.id}><Link to='/'>{element.name}</Link></li>
              ))}
            </ul>
          </li> */}
        </ul>
        <form className='search__form'>
          <input type="text" className="nav__search" placeholder='Search...' />
          <button className='nav__searchBtn' type="submit"><SearchIcon /></button>
        </form>
      </nav>
      <div className="platforms">
        <img src="assets\img\platforms\Netflix.png" alt="Netflix" />
        <img src="assets\img\platforms\Prime_Video.jpg" alt="Prime Video" />
        <img src="assets\img\platforms\DSNP_Hotstar.png" alt="Hotsar" />
        <img src="assets\img\platforms\Apple-TV-Logo.png" alt="Apple TV" />
        <img src="assets\img\platforms\Zee5.jpg" alt="Zee5" />
        <img src="assets\img\platforms\Sonyliv.png" alt="Sony Liv" />
        <img src="assets\img\platforms\ullu.jpg" alt="Ullu" />
        <img src="assets\img\platforms\Altbalaji.jpg" alt="Alt Balaji" />
        <img src="assets\img\platforms\Voot.jpg" alt="Voot" />
      </div>
      <Filter />
    </header>
  )
}

export default Header