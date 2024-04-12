import {configureStore} from '@reduxjs/toolkit';
import counterSlice from './counterSlice';
import charterSlice from './charterSlice';
import cardSlice from './cardSlice';



export const store = configureStore({
    reducer: {
        counter: counterSlice,
        chapter: charterSlice,
        card: cardSlice,
    }
});
