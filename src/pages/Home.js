import React, { useEffect, useState } from 'react'
import '../styles/Movie.scss'
import MovieCard from '../components/MovieCard'
import { videosAction } from '../Redux/Actions/video.action';
import { useDispatch, useSelector } from 'react-redux';

const Home = ({category}) => {

  const dispatch = useDispatch();
  const videos = useSelector(state=>state.videos)
  const [page, setPage] = useState(1);
  const {activeGenre} = useSelector(state=>state.active_genre)

  useEffect(()=>{
      dispatch(videosAction(category, page, activeGenre));
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, activeGenre]);

  return (
    <main className="main">
      <div className="movie">
        <div className="movie__wrapper">
          {videos.videos?.map((e, i) => <MovieCard video={e} key={i} />)}
        </div>
        <div className="pagination">
          <button>Prev</button>
          <button>Next</button>
        </div>
      </div>
    </main>
  )
}

export default Home