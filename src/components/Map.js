
import React, {useState } from "react";
import { MapContainer, TileLayer,LayersControl, Marker,Popup } from "react-leaflet";
import LocationMarker from "./LocationMarker";
import { defaultIcon, employementIcon, parkIcon } from './Icons.js';



const Map = () => {
  
  const collapsed = false;
  const [position, setPosition] = useState(null)
  
  return (
    <div className="container">
      <MapContainer
            className="map__container"
            center={[	-18.766947, 46.869107]}
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

          <LayersControl.BaseLayer name="Street" >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
          </LayersControl.BaseLayer>
          
          <LayersControl.Overlay name="Marker with popup">
            
            <Marker position={[-18.910947998589823,47.52800527082459]} icon={employementIcon}>
              <Popup>
                  You are here. 
              </Popup>
            </Marker>
          </LayersControl.Overlay>

          <LayersControl.Overlay name="park">
            <Marker position={[-18.916066615365907,47.52613260435342]} icon={parkIcon}>
              <Popup>
                  You are here. 
              </Popup>
            </Marker>
          </LayersControl.Overlay>

        </LayersControl>

      </MapContainer>
    </div>
  );
};


export default Map;