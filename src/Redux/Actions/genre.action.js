import { ALL_GENRE_SUCCESS, ALL_GENRE_FAIL, ALL_GENRE_REQUEST } from "../ActionType"
import request from "../../lib/api"

export const genreAction = () => async (dispatch) => {
    try {
        dispatch({
            type: ALL_GENRE_REQUEST
        });
        const res = await request("/genre/movie/list", {});

        dispatch({
            type: ALL_GENRE_SUCCESS,
            payload: {
                genre : res.data.genres
            }
        })

    } catch (error) {
        console.log(error);
        dispatch({
            type: ALL_GENRE_FAIL,
            payload: error.message
        });
    }
}