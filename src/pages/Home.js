import React, { useEffect } from 'react'
import '../styles/Movie.scss'
import MovieCard from '../components/MovieCard'

const Home = () => {

  useEffect(()=>{

  }, []);

  return (
    <main className="main">
      <div className="movie">
        <div className="movie__wrapper">
          {[...new Array(20)].map((e, i) => <MovieCard key={i} />)}
        </div>
      </div>
    </main>
  )
}

export default Home