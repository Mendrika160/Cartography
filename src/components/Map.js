
//import React, {useState,useEffect} from "react";
import { MapContainer, TileLayer} from "react-leaflet";
import LocationMarker from "./LocationMarker";

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
        <LocationMarker/>
        </MapContainer>
    </div>
  );
};


export default Map;