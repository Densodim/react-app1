import {createSlice} from '@reduxjs/toolkit';

export const chapterSlice = createSlice({ 
    name: 'chapter',
    initialState: {
        card: {}
    },
    reducers: {
        like: (state, action) => {
            // console.log('like action', action.payload);
            // console.log('state', state);
            state.card[action.payload] = !state.card[action.payload];

        },
        dislike: (state, action) => {
            
        }
    }
})

export const {like, dislike} = chapterSlice.actions;

export const cardSelector = (state) => state.chapter.card;

export default chapterSlice.reducer;