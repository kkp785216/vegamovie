import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { activeGenreReducer } from "./Reducers/activeGenre.reducer";
import { genreReducer } from "./Reducers/genre.reducer";
import { videoReducer } from "./Reducers/video.reducer";

const rootRdecer = combineReducers({
    genre: genreReducer,
    active_genre: activeGenreReducer,
    videos: videoReducer
});

const Store = createStore(
    rootRdecer,
    {},
    composeWithDevTools(applyMiddleware(thunk))
);

export default Store;