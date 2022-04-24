import { types } from "../types/types";

export const setBooks = (books) =>({
    type: types.SET_BOOK,
    payload: books,
});