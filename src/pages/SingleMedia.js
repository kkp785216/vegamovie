import React, { useState, useEffect } from 'react'
import '../styles/SingleMedia.scss'
import DateRangeIcon from '@mui/icons-material/DateRange';
import request from '../lib/api'
import { useSearchParams, Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const SingleMedia = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [details, setDetails] = useState(null)
    const [screenshotsCount, setScreenshotsCount] = useState(5);
    const [images, setImages] = useState(null)
    const [credits, setCredits] = useState(null)

    useEffect(() => {
        request(`/movie/${searchParams.get('id')}`)
            .then(data => {
                setDetails(data.data);
                setScreenshotsCount(5);
                request(`/movie/${searchParams.get('id')}/images`)
                    .then(data => { setImages(data.data) });
                request(`movie/${searchParams.get('id')}/credits`)
                    .then(data => { setCredits(data.data) });
            });
    }, [searchParams.get('id')]);

    const formatDate = (input) => {
        let date = new Date(input);
        return (date.getDay() <= 9 ? "0" + date.getDay() : date.getDay()) + " " + ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][date.getMonth()] + " " + date.getFullYear()
    }

    const formatDuration = (input) => {
        return input < 60 ? `${input} minute}` : `${Math.ceil(input / 60)} hour ${input % 60} minute`
    }

    return (
        <div className='sinigleMedia'>
            <main className="sinigleMedia__main">
                {details && <>
                    <div className="breadcrumb"></div>
                    <img className='sinigleMedia__main__poster' src={`https://image.tmdb.org/t/p/w1280${details.backdrop_path}`} width="100%" alt={details.title} />
                    <h1 className="sinigleMedia__main__heading" title={details.title}>
                        {details.title}
                    </h1>
                    <span className="sinigleMedia__date">
                        <DateRangeIcon className='sinigleMedia__date__icon' />
                        {formatDate(details.release_date)}
                    </span>
                    <div className="sinigleMedia__genre__list">
                        {details.genres.map((e, i) => (
                            <Link to={`/category/${e.name.toLowerCase().replace(' ', '-')}`} key={i} genreid="28">{e.name}</Link>
                        ))}
                    </div>
                    <div className="sinigleMedia__credits__list">
                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={12}
                            slidesPerView={9}
                            preloadImages={false}
                            grabCursor={true}
                            autoplay={{ delay: 1500, disableOnInteraction: false, pauseOnMouseEnter: true }}
                            breakpoints={{
                                350: {
                                    slidesPerView: 3
                                },
                                450: {
                                    slidesPerView: 4
                                },
                                500: {
                                    slidesPerView: 5
                                },
                                550: {
                                    slidesPerView: 6
                                },
                                600: {
                                    slidesPerView: 7
                                },
                                650: {
                                    slidesPerView: 8
                                },

                            }}
                        >
                            {credits?.cast?.map((e, i) => (
                                <SwiperSlide key={i}>
                                    <div className="sinigleMedia__credits__list__wrapper" title={e.original_name}>
                                        <div className="sinigleMedia__credits__img">
                                            <img src={`https://image.tmdb.org/t/p/w300${e.profile_path}`} alt="" />
                                        </div>
                                        <span className='sinigleMedia__credits__title'>{e.original_name}</span>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <a href={`https://www.imdb.com/title/${details.imdb_id}`} target="_blank" className="sinigleMedia__imdb">
                        <PlayCircleOutlineIcon />
                        <span>Watch on IMDB<OpenInNewIcon fontSize='11' /></span>
                    </a>
                    <div className="singleMedis__hr"></div>
                    <p className="sinigleMedia__description" style={{ marginBottom: '27px' }}>
                        {details.overview}
                    </p>
                    <p className='sinigleMedia__description'><span style={{ color: '#339966' }}><strong><a style={{ color: '#339966' }} href="/">Vegamovies.nl</a></strong></span> is the best online platform for downloading <span style={{ color: '#339966' }}><strong><a style={{ color: '#339966' }} href="/category/Hindi-movies/">Hollywood</a></strong></span> and <strong><a href="/category/bollywood/"><span style={{ color: '#339966' }}>Bollywood Movies</span></a></strong>. We provide direct <strong>G-Drive</strong> download link for fast and secure downloading. Click on the download button below and follow the steps to start download.</p>
                    <h5 className="sinigleMedia__date__highlightTitle">
                        All Details About ({new Date(details.release_date).getFullYear()}) '{details.title}' {details.tagline} ~ Vegamovies
                    </h5>
                    <h3 style={{ color: '#fff', marginBottom: '17px' }}>Movie Info:</h3>
                    <div className="singleMedis__movie__info">
                        <span><strong>Movie Name:</strong> {details.title}</span>
                        <span><strong>Language:</strong> {details.spoken_languages.map(e => e.english_name)?.join(', ')}</span>
                        <span><strong>Released Year:</strong> {new Date(details.release_date).getFullYear()}</span>
                        <span><strong>Duration:</strong> {formatDuration(parseInt(details.runtime))}</span>
                        <span><strong>Rating:</strong> {details.vote_average.toFixed(1)}</span>
                        <span><strong>Rates:</strong> {details.vote_count}</span>
                        <span><strong>Status:</strong> {details.status}</span>
                    </div>
                    <h2 className="sinigleMedia__date__highlightTitle__screenshot">Screenshots:</h2>
                    {images?.backdrops?.concat().splice(0, screenshotsCount).map((e, i) => (
                        <img className='singleMedia__screenshots' key={i} src={`https://image.tmdb.org/t/p/w1280${e.file_path}`} alt="" />
                    ))}
                    {images && screenshotsCount < images.backdrops?.length &&
                        <button className="singleMedia__screenshots__seeMoreBtn" onClick={() => { setScreenshotsCount(screenshotsCount + 5) }}>See more</button>
                    }
                </>}
            </main>
            {/* <aside className="singleMedia__aside"></aside> */}
        </div>
    )
}

export default SingleMedia