import React from 'react'
import '../styles/SingleMedia.scss'
import DateRangeIcon from '@mui/icons-material/DateRange';

const SingleMedia = () => {
    return (
        <div className='sinigleMedia'>
            <main className="sinigleMedia__main">
                <div className="breadcrumb"></div>
                <img src="https://image.tmdb.org/t/p/w1280/p1F51Lvj3sMopG948F5HsBbl43C.jpg" width="100%" alt="" />
                <h1 className="sinigleMedia__main__heading">
                    Download FIR (2022) WEB-DL Hindi [ORG-Dubbed] Full Movie 480p [450MB] | 720p [1.3GB] | 1080p [2.7GB] | 2160p 4K
                </h1>
                <span className="sinigleMedia__date">
                    <DateRangeIcon className='sinigleMedia__date__icon' />
                    JULY 31, 2022
                </span>
                <div className="sinigleMedia__genre__list">
                    <a href="/category/action" genreid="28">Action</a>
                    <a href="/category/action" genreid="878">Science Fiction</a>
                    <a href="/category/action" genreid="14">Fantasy</a>
                </div>
                <div className="singleMedis__hr"></div>
                <p className="sinigleMedia__description" style={{ marginBottom: '27px' }}>
                    Dangerously ill with a rare blood disorder, and determined to save others suffering his same fate, Dr. Michael Morbius attempts a desperate gamble. What at first appears to be a radical success soon reveals itself to be a remedy potentially worse than the disease.
                </p>
                <p className='sinigleMedia__description'><span style={{ color: '#339966' }}><strong><a style={{ color: '#339966' }} href="/">Vegamovies.nl</a></strong></span> is the best online platform for downloading <span style={{ color: '#339966' }}><strong><a style={{ color: '#339966' }} href="/category/Hindi-movies/">Hollywood</a></strong></span> and <strong><a href="/category/bollywood/"><span style={{ color: '#339966' }}>Bollywood Movies</span></a></strong>. We provide direct <strong>G-Drive</strong> download link for fast and secure downloading. Click on the download button below and follow the steps to start download.</p>
                <h5 className="sinigleMedia__date__highlightTitle">
                    All Details About (2022) Full Movie 480p, 720p, 1080p, 2160p 4K ~ Vegamovies.nl
                </h5>
                <h3 style={{ color: '#fff', marginBottom: '17px' }}>Movie Info:</h3>
                <div className="singleMedis__movie__info">
                    <span><strong>Movie Name:</strong> The misticka land</span>
                    <span><strong>Language:</strong> The misticka land</span>
                    <span><strong>Released Year:</strong> The misticka land</span>
                </div>
            </main>
            <aside className="singleMedia__aside"></aside>
        </div>
    )
}

export default SingleMedia