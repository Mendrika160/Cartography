import { configureStore, createSlice } from '@reduxjs/toolkit';

const placeSlice = createSlice({
    name: "places",
    initialState : {
        placeFindPosition : [],
        userPosition : null,
        placePosition : null
    },

    reducers: {
        getUserPosition : (state, action) => {
            state.userPosition = action.payload;
            //console.log("user position ", state.userPosition);
            return state;
            
        },
        searchPlace : (state, action) => {
            //{ type : "SEARCH_PLACE", payload : "text"}
            action.payload.forEach(result => {
                //console.log("result place ",result)
                state.placeFindPosition.push(result);
                state.placePosition = result.coordinates;
            })
            return state;
            
        }
    }

});

export const { getUserPosition ,searchPlace } = placeSlice.actions;

export const store = configureStore({
    
    reducer : {
        places : placeSlice.reducer,

    }
})