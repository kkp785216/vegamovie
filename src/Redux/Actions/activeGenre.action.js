import { ACTIVE_GENRE } from "../ActionType";

export const activeGenreAction = (genre) => async (dispatch) => {
    try{
        dispatch({
            type: ACTIVE_GENRE,
            payload: {
                genre: genre
            }
        })
    } catch {}
}