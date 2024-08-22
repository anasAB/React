import { createSlice } from "@reduxjs/toolkit";

import { IBook } from "./types";

export interface IInitialBooksState {
    category: string;
    ebooks: IBook[];
    isDataLoading: boolean,
    favoveritBooks: IBook[], // TODO replace it with favoveritBooks
    showFavoriteBooks: boolean
}

const initialState: IInitialBooksState = {
    category: "",
    ebooks: [],
    isDataLoading: false,
    favoveritBooks: [],
    showFavoriteBooks: false
}

export const eBooksSlice = createSlice({
    name: 'eBooks',
    initialState,

    reducers: {

        updateBookSlicerState: (state: IInitialBooksState, action) =>
            // if(state.showFavoriteBooks ){
            //   console.log('## Filter now');

            // }else{
            //   console.log('## No need for filter');

            // }

            ({ ...state, ebooks: [...action.payload] })
        ,

        updateCategory: (state: IInitialBooksState, action) => ({ ...state, category: action.payload }),

        updateLoadingDataStatus: (state: IInitialBooksState, action) => ({ ...state, isDataLoading: action.payload }),

        updateFavoveritBooksList: (state: IInitialBooksState, action) => {
            const test = state.favoveritBooks.find(book => book.id === action.payload.id)

            if (test) {
                return { ...state, favoveritBooks: state.favoveritBooks.filter((book: IBook) => book.id !== action.payload.id) };
            } else {
                return { ...state, favoveritBooks: [...state.favoveritBooks, action.payload] };
            }

        },

        updateShowFavoriteBooks: (state: IInitialBooksState) => ({ ...state, showFavoriteBooks: !state.showFavoriteBooks })


    },
});

// Action creators are generated for each case reducer function
export const { updateBookSlicerState, updateCategory, updateLoadingDataStatus, updateFavoveritBooksList, updateShowFavoriteBooks } = eBooksSlice.actions

export default eBooksSlice.reducer

