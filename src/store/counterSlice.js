import {createSlice} from '@reduxjs/toolkit';

export const counterSlice = createSlice({ 
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state, action) => {
            console.log('action', action);
            console.log('state', state);
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value = state.value + action.payload

        },
    }
})

// console.log(counterSlice);

export const {increment, decrement, incrementByAmount} = counterSlice.actions; 

export const counterValueSelector = (state) => state.counter.value;  //counterValueSelector from counterSlice reducer 

export default counterSlice.reducer // default export from counterSlice reducer 