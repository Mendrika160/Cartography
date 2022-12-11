import React , { useEffect } from 'react';
import { Marker, Popup , useMap} from 'react-leaflet';


const LocationMarker = ({position,setPosition,marker}) => {

    const map = useMap()

    useEffect(() => {
        map.locate().on("locationfound",(e) => {
            setPosition(e.latlng);
            console.log(e.latlng);
            map.flyTo(e.latlng, map.getZoom());
            
        });
    },[map,setPosition]);
    

    return position === null ? null : (
        <Marker position={position} icon={marker}>
            <Popup>
                You are here. 
            </Popup>
        </Marker>
    );
    

}

export default LocationMarker;