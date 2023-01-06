
import React ,{useState,useEffect}from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import LocationMarker from "./LocationMarker";
import { parkIcon } from './Icons.js';
import { useSelector } from "react-redux/es/exports";
import mapData from '../data/places.json'
import FindPlace from "./FindPlace";
import SearchInput from "./SearchInput";
import Routing from './Routing';
import LayersOverlay from "./LayersOverlay";
import { useDispatch } from "react-redux";
import { changeRoute } from "../store/redux";
import 'leaflet-contextmenu'
import 'leaflet-contextmenu/dist/leaflet.contextmenu.css'



const Map = () => {

  
  const {  placeFindPosition, userPosition ,placePosition } = useSelector((state) => state.places);
  const dispatch = useDispatch();
  const [map,setMap] =useState(null);
  
  
  const [places, setPlaces] = useState([]);

  
  


  
  


  useEffect(() => {
    // Load the places data
    setPlaces(mapData.places);
  
  }, [placePosition,userPosition]);

  
    const goHere =  (e) => {

      const {lat,lng} = e.latlng
      
      const goCoordinates = [parseFloat(lat.toFixed(6)),parseFloat(lng.toFixed(6))]
      dispatch(changeRoute(goCoordinates))
  
    }

  
  return (
    <div className="container">

      
      <SearchInput/>

      <MapContainer
            className="map__container"
            center={[-21.457198,47.090124]}
            zoom={16}
            maxZoom={28}
            ref={setMap}
            
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
        />
      
      {
        placeFindPosition.id && <FindPlace places={placeFindPosition} goHere={goHere}/> 
      }
        
        {placePosition === null  ? null :  <Routing from={userPosition} to={placePosition} /> }  

        <LayersOverlay data={places} goHere={goHere}/>


      </MapContainer>
    </div>
  );
};


export default Map;