
//import React, {useState,useEffect} from "react";
import { MapContainer, TileLayer,LayersControl} from "react-leaflet";
import LocationMarker from "./LocationMarker";
import { employementIcon, parkIcon } from './Icons.js';

//import myIcon from '../img/marker/employment.png'

const Map = () => {
  //const defaultPosition: LatLngExpression = [48.864716, 2.349]; // Paris position

  

  return (
    <div className="container">
      <MapContainer
            className="map__container"
            center={[	-18.766947, 46.869107]}
            zoom={13}
            maxZoom={28}
      >
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <LayersControl position="topright">
          <LayersControl.Overlay name="Marker with popup">
            <LocationMarker 
              marker={employementIcon}
              latlng={[-18.910947998589823,47.52800527082459]}
            />
          </LayersControl.Overlay>

          <LayersControl.Overlay name="park">
            <LocationMarker 
              marker={parkIcon}
              latlng={[-18.916066615365907,47.52613260435342]}
            />
          </LayersControl.Overlay>
        </LayersControl>
        
        
        
      </MapContainer>
    </div>
  );
};


export default Map;