import React , { useEffect } from 'react';
import { Marker, Popup , useMap} from 'react-leaflet';
import { useDispatch } from 'react-redux';
import { getUserPosition } from '../store/redux';

const LocationMarker = ({position,marker}) => {

    const dispatch = useDispatch();
    const map = useMap();

    useEffect(() => {
        map.locate().on("locationfound",(e) => {
            dispatch(getUserPosition([e.latlng.lat,e.latlng.lng]));
            map.flyTo(e.latlng, 8,map.getZoom());
            
        });
    },[map,dispatch]);
    
    return position === null ? null : (
        <Marker  position={position} icon={marker}>
            <Popup>
                You are here. 
            </Popup>
        </Marker>
    );
    

}

export default LocationMarker;