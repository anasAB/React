import { configureStore } from '@reduxjs/toolkit'

import { eBooksSlice } from './eBooksSlice'




export const store = configureStore({
    reducer: {
        eBooks: eBooksSlice.reducer,
        // eBookDetail: eBookDetialSlice.reducer,
        // bookCart: eBookCart.reducer
    },
})