import React , { useState, useEffect } from 'react';
import { Marker, Popup , useMap} from 'react-leaflet';
//import L from 'leaflet';
import icon from './Constant.js';

const LocationMarker = () => {

    const [position,setPosition] = useState(null);
    const [bbox,setBbox] = useState([]);
    const map = useMap();

    useEffect(() => {
        map.locate().on("locationfound",(e) => {
            setPosition(e.latlng);
            map.flyTo(e.latlng, map.getZoom());
            
            setBbox(e.bounds.toBBoxString().split(","));
        })
    },[map]);

    return position === null ? null : (
        <Marker position={position} icon={icon}>
            <Popup>
                You are here. <br />
                Map bbox: <br />
                <b>Southwest lng</b>: {bbox[0]} <br />
                <b>Southwest lat</b>: {bbox[1]} <br />
                <b>Northeast lng</b>: {bbox[2]} <br />
                <b>Northeast lat</b>: {bbox[3]}
            </Popup>
        </Marker>
    );
    

}

export default LocationMarker;