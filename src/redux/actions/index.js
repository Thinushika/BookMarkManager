import {v1 as uuid} from "uuid";
import { ADD_BOOKMARK, DELETE_BOOKMARK } from "./types";

// action creators to work with action types

// for ADD_BOOKMARK action type
export const addBookMark = ({title, url}) => ({
    type: ADD_BOOKMARK,
    payload: {
        id: uuid(), // Universal unique id generator - to generate random id
        title,
        url
    }
});

// for DELETE_BOOKMARK action type
export const deleteBookMark = id => ({
    type: DELETE_BOOKMARK,
    payload: {
        id: uuid(),
    }
});