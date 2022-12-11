import { configureStore, createSlice } from '@reduxjs/toolkit';

const placeSlice = createSlice({
    name: "places",
    initialState : [],

    reducers: {
        searchPlace : (state, action) => {
            //{ type : "SEARCH_PLACE", payload : "text"}
            state = action.payload;
            console.log("redux",state);
            //console.log("state", state[0].type);
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