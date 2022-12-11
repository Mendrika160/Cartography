import React from 'react'
import {useSelector} from 'react-redux';
import { Marker,Popup } from 'react-leaflet';
//import {MarkerClusterGroup} from 'react-leaflet-markercluster'


export default function FindPlace({marker}) {

    const places = useSelector((state) => state.places);
    
    console.log("places",places)

    return (
    
        places === null ? null : (
        
            <Marker position={places[0].geometry.coordinates} icon={marker}>
                <Popup>
                    You are now here. 
                </Popup>
            </Marker> )

            
    
        
    )

}
