import React,{useEffect} from 'react'
import data from '../data/places.json'

import {Marker,Popup,useMap} from 'react-leaflet'
import {useSelector} from 'react-redux';


function FindPlace({marker}) {

    const places = useSelector((state) => state.places);
    console.log("multiple marker place ",places);
    const map = useMap();
    useEffect(() => {
        map.locate().on("locationfound",(e) => {
            console.log(e.latlng);
            map.flyTo(e.latlng, map.getZoom());
            
        });
    },[map,places]);

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