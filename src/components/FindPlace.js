import React,{useEffect} from 'react'

import {Marker,Popup,useMap} from 'react-leaflet'
import {useSelector} from 'react-redux';


function FindPlace({marker,setSearchPosition}) {

    const places = useSelector((state) => state.places);
    const result = places.map( place => { return place.coordinates });
    console.log("ressult : ",result)
    
    
        //setSearchPosition(result);
    

    return (
        <>
            {places.map(place => { 
                
                return(

                    <Marker key={place.id} position={place.coordinates} icon={marker}>
                        <Popup>
                        {place.name}
                        </Popup>

                    </Marker>
                )
            })}
        </>
    )
}

export default FindPlace