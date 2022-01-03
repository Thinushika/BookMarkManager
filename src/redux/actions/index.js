import uuidv4 from 'uuidv4'
import { ADD_BOOKMARK, DELETE_BOOKMARK } from "./types";

// action creators to work with action types

// for ADD_BOOKMARK action type
export const addBookMark = ({title, url}) => ({
    type: ADD_BOOKMARK,
    payload: {
        id: uuidv4(), // Universal unique id generator - to generate random id
        title,
        url
    }
});

// for DELETE_BOOKMARK action type
export const deleteBookMark = id => ({
    type: DELETE_BOOKMARK,
    payload: {
        id: uuidv4(),
    }
});