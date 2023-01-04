import React , { useEffect } from 'react';
import { useMap} from 'react-leaflet';
import { useDispatch } from 'react-redux';
import { getUserPosition } from '../store/redux';
import CustomMarker from './CustomMarker'
import {redIcon,defaultIcon} from './Icons'


const LocationMarker = ({position,goHere,startHere}) => {
    
    const dispatch = useDispatch();
    
    
    const map = useMap();

    
    useEffect(() => {
        map.locate().on("locationfound",(e) => {
            dispatch(getUserPosition([e.latlng.lat,e.latlng.lng]));
            map.flyTo(e.latlng,map.getZoom());
            
        });

        
    },[map,dispatch]);

    const test = async (e) => {
        const {lat,lng} = e.latlng


        console.log("test kely lat:",lat.toFixed(6));
        console.log("test kely lng:",lng.toFixed(6));
    }

    return (
        <>
            {
            position === null ? null : 
                <CustomMarker 
                    position={position}
                    textPopup='You are here'
                    imgIcon={redIcon}
                    goHere={goHere}
                    startHere={startHere}
                />
            }
        </>
    )
}


export default LocationMarker;


    
    