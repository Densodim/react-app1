import {configureStore} from '@reduxjs/toolkit';
import counterSlice from './counterSlice';
import charterSlice from './charterSlice';


export const store = configureStore({
    reducer: {
        counter: counterSlice,
        chapter: charterSlice,
    }
});
