import { configureStore, createSlice } from '@reduxjs/toolkit';
const placeSlice = createSlice({
    name: "places",
    initialState : null,

    reducers: {
        searchPlace : (state, action) => {
            //{ type : "SEARCH_PLACE", payload : "text"}
            state = action.payload;
            console.log("state", state);
            return state;
            
        }
    }

});

export const { searchPlace } = placeSlice.actions;

export const store = configureStore({
    reducer : {
        places : placeSlice.reducer
    }
})