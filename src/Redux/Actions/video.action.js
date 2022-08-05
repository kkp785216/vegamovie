import { HOME_VIDEOS_FAIL, HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCCESS } from "../ActionType"
import request from "../../lib/api"

export const videosAction = (category, page, activeGenre, query) => async (dispatch, getState) => {
    try {
        const fetchByCategory = {
            movies: '/discover/movie',
            trending: '/trending/movie/week',
            latest: '/movie/latest',
            popular: '/movie/popular',
            top_rated: '/movie/top_rated',
            upcomming: '/movie/upcoming',
            search: 'search/movie'
        }
        dispatch({
            type: HOME_VIDEOS_REQUEST
        });
        const res = await request(fetchByCategory[category], {
            params: {
                page: page,
                with_genres: activeGenre.map(a=>a.id).toString(),
                include_adult: false,
                query: query ? query : ''
            }
        });

        dispatch({
            type: HOME_VIDEOS_SUCCESS,
            payload: {
                videos: res.data.results,
                page: res.data.page,
                total_pages: res.data.total_pages,
                total_results: res.data.total_results,
                category: activeGenre,
            }
        })

    } catch (error) {
        console.log(error);
        dispatch({
            type: HOME_VIDEOS_FAIL,
            payload: error.message
        });
    }
}