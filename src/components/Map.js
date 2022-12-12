
import React, {useEffect, useState } from "react";
import { MapContainer, TileLayer,LayersControl } from "react-leaflet";
import LocationMarker from "./LocationMarker";
import { defaultIcon,parkIcon } from './Icons.js';

//import data from '../data/places.json'
import FindPlace from "./FindPlace";
import RoutingMachine from './RoutingMachine';
const Map = () => {

  const [position, setPosition] = useState(null);
  const [searchPosition,setSearchPosition] = useState(null);
  //const places = useSelector((state) => state.places);
  const collapsed = false;
  
  
  
  console.log("position :",position);
  /*
  useEffect(() => {
    
    if(searchPosition !== null){
      pos.current = searchPosition;
    }
    
  },[searchPosition,position]);
  */
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
          position={position}
          setPosition={setPosition}
          marker={parkIcon}
        />
      
        <FindPlace 
          marker={defaultIcon}
          searchPosition={searchPosition}
          setSearchPosition={setSearchPosition}
        
        /> 
  
      
        

        <RoutingMachine 
          firstPosition={position}
          secondPosition={searchPosition}
          />
      
        

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