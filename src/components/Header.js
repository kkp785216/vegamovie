import React, { useEffect, useState } from 'react'
import '../styles/Header.scss'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { genreAction } from '../Redux/Actions/genre.action'
import SearchIcon from '@mui/icons-material/Search';
import logo from '../assets/img/logo.png'
import Netflix from '../assets/img/platforms/Netflix.png'
import Prime_Video from '../assets/img/platforms/Prime_Video.jpg'
import DSNP_Hotstar from '../assets/img/platforms/DSNP_Hotstar.png'
import Apple from '../assets/img/platforms/Apple-TV-Logo.png'
import Zee5 from '../assets/img/platforms/Zee5.jpg'
import Sonyliv from '../assets/img/platforms/Sonyliv.png'
import ullu from '../assets/img/platforms/ullu.jpg'
import Altbalaji from '../assets/img/platforms/Altbalaji.jpg'
import Voot from '../assets/img/platforms/Voot.jpg'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {

  const { pathname } = useLocation();

  const dispatch = useDispatch();
  const { genre } = useSelector(state => state.genre)
  useEffect(() => {
    genre?.length <= 0 && dispatch(genreAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const [query, setQeury] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?q=${query}`);
    document.querySelector('.mob__nav__searchBar').classList.remove('active');
  }

  const handleToggleSearch = () => {
    document.querySelector('.mob__nav__searchBar').classList.add('active');
    document.querySelector('.mob__nav__searchBar').className.includes('active') ? document.querySelector('#mobSearch').focus() : document.querySelector('#mobSearch').blur();
  }

  return (
    <header className='header'>
      <Link to='/'><img src={logo} alt="Logo" className="d-block header__logo" /></Link>
      <nav className='nav'>
        <ul>
          <li className={pathname === '/' ? 'active' : ''}><Link to='/'>Home</Link></li>
          <li className={pathname === '/trending' ? 'active' : ''}><Link to='/trending'>Trending</Link></li>
          <li className={pathname === '/popular' ? 'active' : ''}><Link to='/popular'>Popular</Link></li>
          <li className={pathname === '/upcomming' ? 'active' : ''}><Link to='/upcomming'>Upcomming</Link></li>
        </ul>
        <form onSubmit={handleSearch} className='search__form'>
          <input type="text" value={query} onChange={(e) => { setQeury(e.target.value) }} className="nav__search" id="search" placeholder='Search...' />
          <button className='nav__searchBtn' type="submit" disabled={query.length <= 0}><SearchIcon /></button>
        </form>
      </nav>
      <nav className="mob__nav">
        <div className="mob__nav__header">
          <span onClick={() => { document.querySelector('.mob__nav__bar').classList.toggle('active') }} className='mob__nav__toggleBtn'><MenuIcon /></span>
          {/* <MenuIcon /> */}
          <Link to='/'><img src={logo} alt="Logo" className="mob__header__logo" /></Link>
          <span onClick={handleToggleSearch} className='mob__nav__toggleBtn'><SearchIcon /></span>
        </div>
        <div className="mob__nav__bar ">
          <span onClick={() => { document.querySelector('.mob__nav__bar').classList.toggle('active') }} className='mob__nav__toggleBtn'><CloseIcon className='mob__nav__bar__closeBtn' /></span>
          <ul>
            <li className={pathname === '/' ? 'active' : ''}><Link to='/' onClick={() => { document.querySelector('.mob__nav__bar').classList.remove('active') }}>Home</Link></li>
            <li className={pathname === '/trending' ? 'active' : ''}><Link to='/trending' onClick={() => { document.querySelector('.mob__nav__bar').classList.remove('active') }}>Trending</Link></li>
            <li className={pathname === '/popular' ? 'active' : ''}><Link to='/popular' onClick={() => { document.querySelector('.mob__nav__bar').classList.remove('active') }}>Popular</Link></li>
            <li className={pathname === '/upcomming' ? 'active' : ''}><Link to='/upcomming' onClick={() => { document.querySelector('.mob__nav__bar').classList.remove('active') }}>Upcomming</Link></li>
          </ul>
        </div>
        <div className="mob__nav__searchBar">
          <form onSubmit={handleSearch} className='mob__nav__search__form'>
            <input type="text" value={query} onBlur={()=>{document.querySelector('.mob__nav__searchBar').classList.remove('active')}} onChange={(e) => { setQeury(e.target.value) }} id="mobSearch" className="mob__nav__search" placeholder='Search...' />
            <button className='mob__nav__searchBtn' type="submit" disabled={query.length <= 0}><SearchIcon /></button>
          </form>
        </div>
      </nav>
      <div className="platforms hideScrollBar">
        <img src={Netflix} alt="Netflix" />
        <img src={Prime_Video} alt="Prime Video" />
        <img src={DSNP_Hotstar} alt="Hotsar" />
        <img src={Apple} alt="Apple TV" />
        <img src={Zee5} alt="Zee5" />
        <img src={Sonyliv} alt="Sony Liv" />
        <img src={ullu} alt="Ullu" />
        <img src={Altbalaji} alt="Alt Balaji" />
        <img src={Voot} alt="Voot" />
      </div>
    </header>
  )
}

export default Header