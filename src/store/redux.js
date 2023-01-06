import { configureStore, createSlice } from '@reduxjs/toolkit';

const placeSlice = createSlice({
    name: "places",
    initialState : {
        placeFindPosition :{
            "id": null,
            "name": "",
            "type":"",
            "coordinates": null,
            "icon": null
        },
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
            console.log("action payload :",action.payload[0])
            state.placeFindPosition.id = action.payload[0].id;
            state.placeFindPosition.type = action.payload[0].type;
            state.placeFindPosition.name = action.payload[0].name;
            state.placeFindPosition.coordinates = action.payload[0].coordinates;
            state.placeFindPosition.icon = action.payload[0].icon;
            //console.log("position :",state.userPosition)
            state.placePosition = state.placeFindPosition.coordinates;

            return state;
            
        },
        changeRoute : (state, action) =>{
            state.placePosition = action.payload
        }

    }

});

export const { getUserPosition ,searchPlace,changeRoute } = placeSlice.actions;

export const store = configureStore({
    
    reducer : {
        places : placeSlice.reducer,

    }
})