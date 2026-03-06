import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    sharedData: '',
};

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setSharedData: (state, action) => {
            state.sharedData = action.payload;
        },
        clearSharedData: (state) => {
            state.sharedData = '';
        },
    },
});

export const { setSharedData, clearSharedData } = dataSlice.actions;

export default dataSlice.reducer;
