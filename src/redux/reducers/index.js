import { ADD_BOOKMARK, DELETE_BOOKMARK } from "../actions/types";


// reducer that work with action type
function bookmarksReducer( state = [], action) {
    switch (action.type){
        case ADD_BOOKMARK:
            return [...state, action.payload];
        case DELETE_BOOKMARK:
            return state.filter(bookmark => bookmark.id !== action.payload.id);
        default:
            return state;
    }
}

export default bookmarksReducer
