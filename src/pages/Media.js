import React, { useEffect, useState } from 'react'
import '../styles/Movie.scss'
import MovieCard from '../components/MovieCard'
import { videosAction } from '../Redux/Actions/video.action';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams, useNavigate } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosSharpIcon from '@mui/icons-material/ArrowBackIosSharp';

const Home = ({ category }) => {

  const dispatch = useDispatch();
  const videos = useSelector(state => state.videos)
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(searchParams.get('page') ? parseInt(searchParams.get('page')) : 1);
  const { activeGenre } = useSelector(state => state.active_genre)
  const navigate = useNavigate();

  useEffect(() => {
    let page = searchParams.get('page') ? parseInt(searchParams.get('page')) : 1
    dispatch(videosAction(category, page, activeGenre, searchParams.get('q')));
    setPage(searchParams.get('page') ? parseInt(searchParams.get('page')) : 1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeGenre, searchParams.get('q'), searchParams.get('page')]);

  const goToPage = ({ selected }) => {
    if (selected + 1 >= 1 && selected + 1 <= (parseInt(videos.total_pages) >= 500 ? 500 : parseInt(videos.total_pages))) {
      setPage(selected + 1)
      let query = window.location.search.includes('?') ? (window.location.search.includes('page') ? (window.location.search.replace(/page=[0-9]+/, `page=${selected + 1}`)) : (`${window.location.search}&page=${selected + 1}`)) : (`?page=${selected + 1}`)
      navigate(query);
      document.querySelector('.movie').scrollIntoView();
    }
  }

  return (
    <main className="main">
      <div className="movie">
        <div className="movie__wrapper">
          {videos.videos?.map((e, i) => <MovieCard video={e} key={i} />)}
        </div>
        {videos.videos?.length >= 1 && <div className="pagination">
          <ReactPaginate
            breakLabel="..."
            nextLabel={<ArrowForwardIosIcon className='pagination__icon' />}
            onPageChange={goToPage}
            pageRangeDisplayed={1}
            pageCount={parseInt(videos.total_pages) >= 500 ? 500 : parseInt(videos.total_pages)}
            previousLabel={<ArrowBackIosSharpIcon className='pagination__icon' />}
            renderOnZeroPageCount={null}
            marginPagesDisplayed={3}
            forcePage={page - 1}
          />
        </div>}
      </div>
    </main>
  )
}

export default Home