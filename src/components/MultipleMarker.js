import React from 'react'
import data from '../data/places.json'
import {Marker,Popup} from 'react-leaflet'
import {useSelector} from 'react-redux';
function MultipleMarker({marker}) {

    const places = useSelector((state) => state.places);
    console.log("multiple marker place ",places);
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

export default MultipleMarker