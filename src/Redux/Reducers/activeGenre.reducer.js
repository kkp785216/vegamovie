import { ACTIVE_GENRE } from "../ActionType";

export const activeGenreReducer = (state={
    activeGenre: []
}, action) => {
    const { type, payload } = action;
    if(type === ACTIVE_GENRE){
        return {
            ...state,
            activeGenre: payload.genre
        }
    }
    else{
        return {
            ...state
        }
    }
}