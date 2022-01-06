import { compose, createStore } from "redux";
import bookmarksReducer from "../reducers";



const configureStore = () => {
    const store = createStore(bookmarksReducer,window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose);

    return store
}

export default configureStore
