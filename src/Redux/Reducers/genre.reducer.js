import { ALL_GENRE_SUCCESS, ALL_GENRE_FAIL, ALL_GENRE_REQUEST } from "../ActionType"

export const genreReducer = (state = {
    genre: []
}, action) => {
    const { type, payload } = action;

    switch (type) {
        case ALL_GENRE_REQUEST:
            return {
                ...state,
                loading: true
            }

        case ALL_GENRE_SUCCESS:
            return {
                ...state,
                genre: payload.genre,
                loading: false
            }

        case ALL_GENRE_FAIL:
            return {
                ...state,
                error: payload,
                loading: false
            }

        default:
            return {
                ...state
            }
    }
}