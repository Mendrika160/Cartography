
import React, {useState } from "react";
import { MapContainer, TileLayer,LayersControl,Marker,Popup } from "react-leaflet";
//import MarkerClusterGroup from 'react-leaflet-cluster';
import LocationMarker from "./LocationMarker";
import { defaultIcon,parkIcon } from './Icons.js';
import { useSelector } from "react-redux";
import data from '../data/places.json'
import MultipleMarker from "./MultipleMarker";
const Map = () => {

  const [position, setPosition] = useState(null);
  //const places = useSelector((state) => state.places);
  const collapsed = false;
  const pos = [	-18.766947, 46.869107]
  const pos1 = [47.0774719, -21.4550770]
  
  console.log("places :",data.places);
  
  return (
    <div className="container">

      <MapContainer
            className="map__container"
            center={pos}
            zoom={8}
            maxZoom={28}
      >
        
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        
        <LocationMarker
          position={position}
          setPosition={setPosition}
          marker={parkIcon}
        />
      
        <MultipleMarker marker={defaultIcon}/>  
        
          
        
      
      
        <LayersControl 
          position="topright"
          collapsed={collapsed}
        >
        
          <LayersControl.BaseLayer checked name="Basic map" >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
          </LayersControl.BaseLayer>

        </LayersControl>

      </MapContainer>
    </div>
  );
};


export default Map;