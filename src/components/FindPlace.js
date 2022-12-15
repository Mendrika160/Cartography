import React,{useEffect} from 'react'

import {Marker,Popup,useMap} from 'react-leaflet'
import {useSelector} from 'react-redux';


function FindPlace({marker}) {

    const places = useSelector((state) => state.places );
    //const result = places.map( place => { return place.coordinates });
    
   

    return (
        <>
            { places.placeFindPosition.map(place => { 
                
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