import { ACTIVE_GENRE } from "../ActionType";

export const activeGenreReducer = (state = {
    activeGenre: []
}, action) => {
    const { type, payload } = action;
    switch (type) {
        case ACTIVE_GENRE:
            return {
                ...state,
                activeGenre: payload.genre
            }
        default:
            return {
                ...state
            }
    }
}