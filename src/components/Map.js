
import React ,{useState,useEffect,useRef}from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import LocationMarker from "./LocationMarker";
import { defaultIcon,parkIcon } from './Icons.js';
import { useSelector } from "react-redux/es/exports";
import mapData from '../data/places.json'
import FindPlace from "./FindPlace";
import SearchInput from "./SearchInput";
import Routing from './Routing';
import LayersOverlay from "./LayersOverlay";
import 'leaflet-contextmenu'
import 'leaflet-contextmenu/dist/leaflet.contextmenu.css'


const Map = () => {

  const {  placeFindPosition, userPosition ,placePosition } = useSelector((state) => state.places);

  const [places, setPlaces] = useState([]);
  const [routingFrom,setRoutingFrom] = useState(null)
  const [routingTo,setRoutingTo] = useState(null)

/*
  const pos = [-18.9038592,47.5234304]
  const ctest = [-18.90671749834,47.526752080539]
  const c2 = [-18.906717, 47.526752]
  */
  useEffect(() => {
    // Load the places data
    setPlaces(mapData.places);
    setRoutingFrom(userPosition)
    setRoutingTo(placePosition)
  }, [routingFrom,routingTo,placePosition,userPosition]);
  console.log("routing from", routingFrom)
  console.log('routing to ', routingTo)
    const startHere =  (e) => {
      const {lat,lng} = e.latlng
      const startCoordinates = [parseFloat(lat.toFixed(6)),parseFloat(lng.toFixed(6))]
      setRoutingFrom(startCoordinates)
      console.log("start Here", startCoordinates)
      console.log("routingFrom",routingFrom)
    }

            
    const goHere =  (e) => {
      const {lat,lng} = e.latlng

      
        const goCoordinates = [parseFloat(lat.toFixed(6)),parseFloat(lng.toFixed(6))]
        setRoutingTo(goCoordinates)
      
      
      
        
        console.log("routingTo",routingTo)
    }

  
  return (
    <div className="container">

      
      <SearchInput/>

      <MapContainer
            className="map__container"
            center={[-21.457198,47.090124]}
            zoom={16}
            maxZoom={28}
            
      >
        <div id="loader"></div>
        
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <LocationMarker
          marker={parkIcon}
          position={userPosition}
          goHere={goHere}
          startHere={startHere}
        />
      
      {
        placeFindPosition.id && <FindPlace 
                                    places={placeFindPosition} 
                                    goHere={goHere}
                                    startHere={startHere}
                                    /> 
      }
        
  
      {routingTo === null  ? null :  <Routing from={routingFrom} to={routingTo} /> }      
        

        <LayersOverlay 
          data={places} 
          goHere={goHere}
          startHere={startHere}/>


      </MapContainer>
    </div>
  );
};


export default Map;