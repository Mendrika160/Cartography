
import React, {useEffect, useState } from "react";
import { MapContainer, TileLayer,LayersControl } from "react-leaflet";
import LocationMarker from "./LocationMarker";
import { defaultIcon,parkIcon } from './Icons.js';
import { useSelector } from "react-redux/es/exports";
//import data from '../data/places.json'
import FindPlace from "./FindPlace";
import RoutingMachine from './RoutingMachine';
const Map = () => {

  const {  placeFindPosition, userPosition ,placePosition } = useSelector((state) => state.places);

  
  const collapsed = false;
  console.log("user position MAP",userPosition)
  console.log("findplacePosition MAP",placeFindPosition)
  console.log("placePosition MAP",placePosition)
  
  
  

  return (
    <div className="container">

      <MapContainer
            className="map__container"
            center={[-21.457198,47.090124]}
            zoom={8}
            maxZoom={28}
      >
        
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <LocationMarker
          marker={parkIcon}
          position={userPosition}
        />
      
        <FindPlace 
          marker={defaultIcon}
        /> 
  
      {placePosition === null ? null :  <RoutingMachine startPosition={userPosition} endPosition={placePosition} /> }      
        

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
          <LayersControl.Overlay>
            
          
      
          </LayersControl.Overlay>
        </LayersControl>

      </MapContainer>
    </div>
  );
};


export default Map;