import { HOME_VIDEOS_FAIL, HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCCESS } from "../ActionType"
import request from "../../lib/api"

export const getVideosList = (category, page, isFirst) => async (dispatch, getState) => {
    try {
        const fetchByCategory = {
            trending: '/trending/movie/week',
            latest: '/movie/latest',
            popular: '/movie/popular',
            top_rated: '/movie/top_rated',
            upcomming: '/movie/upcoming',
        }
        dispatch({
            type: HOME_VIDEOS_REQUEST
        });
        const res = await request(fetchByCategory.category, {
            params: {
                page: page
            }
        });

        dispatch({
            type: HOME_VIDEOS_SUCCESS,
            payload: {
                videos: res.data.items,
                total_pages: res.data.total_pages,
                total_results: res.data.total_results,
                category: category,
                isFirst: isFirst
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