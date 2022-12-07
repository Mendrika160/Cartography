
import React, {useState } from "react";
import { MapContainer, TileLayer,LayersControl} from "react-leaflet";
import LocationMarker from "./LocationMarker";
import { defaultIcon } from './Icons.js';

const Map = () => {

  
  const collapsed = false;
  const [position, setPosition] = useState(null)

  return (
    <div className="container">

      <MapContainer
            className="map__container"
            center={position || [	-18.766947, 46.869107]}
            zoom={15}
            maxZoom={28}
      >
        
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        <LocationMarker
              position={position}
              marker={defaultIcon}
              setPosition={setPosition}
              
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