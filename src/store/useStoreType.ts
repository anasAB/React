import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { IInitialBooksState } from './eBooksSlice';

// import { IBookCart } from '../E-Books/Slicer/cartSlice';
// import { IBookDetail } from '../E-Books/Slicer/eBookDetialSlice';


export interface RootState {
    eBooks: IInitialBooksState;
    // eBookDetail: IBookDetail;
    // bookCart: IBookCart
}


export const useStoreType: TypedUseSelectorHook<RootState> = useSelector;
