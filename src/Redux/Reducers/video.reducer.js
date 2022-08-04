import { HOME_VIDEOS_FAIL, HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCCESS } from "../ActionType"

export const videoReducer = (state = {
    videos: [],
    page: 1,
    total_pages: 0,
    total_results: 0,
    category: 'trending',
}, action) => {
    const { type, payload } = action;

    switch (type) {
        case HOME_VIDEOS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case HOME_VIDEOS_SUCCESS:
            return {
                ...state,
                videos: payload.videos,
                page: payload.page,
                total_pages: payload.total_pages,
                total_results: payload.total_results,
                category: payload.category,
                loading: false
            }

        case HOME_VIDEOS_FAIL:
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