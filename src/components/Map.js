
import React ,{useState,useEffect}from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import LocationMarker from "./LocationMarker";
import { defaultIcon,parkIcon } from './Icons.js';
import { useSelector } from "react-redux/es/exports";
import mapData from '../data/places.json'
import FindPlace from "./FindPlace";
import SearchInput from "./SearchInput";
import Routing from './Routing';
import LayersOverlay from "./LayersOverlay";

const Map = () => {

  const {  placeFindPosition, userPosition ,placePosition } = useSelector((state) => state.places);

  const [places, setPlaces] = useState([]);
  //const {places} = mapData;  

  

  useEffect(() => {
    // Load the places data
    setPlaces(mapData.places);
  }, []);

  /*
  const startHere = (e,control) => {
    control.spliceWaypoints(0,1,e.latlng)
  }
  const goHere = (e,control) => {
    control.spliceWaypoints(control.getWaypoints().lenght -1,1 ,e.latlng)
  }

      contextMenu={true}
            contextMenuWidth={140}
            contextMenuItems={[{
              text :'Start from here',
              callBack: startHere

            },'-',{
              text :'go to here',
              callBack: goHere
            }]}
  */
    const zoomIn = () => {
        console.log("Zoom in")
    }

            
    const zoomOut = () => {
        console.log("Zoom out")
    }

  
  return (
    <div className="container">

      
      <SearchInput/>

      <MapContainer
            className="map__container"
            center={[-21.457198,47.090124]}
            zoom={16}
            maxZoom={28}
            contextmenu={true}
            contextmenuItems={[
              {
              text :'Start from here',
              callback : zoomIn
              },'-',{
              text :'go to here',
              callback : zoomOut
          
            }]}

        

      >
        <div id="loader"></div>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <LocationMarker
          marker={parkIcon}
          position={userPosition}
        />
      
      {
        placeFindPosition.id && <FindPlace places={placeFindPosition} marker={defaultIcon} /> 
      }
        
  
      {placePosition === null ? null :  <Routing from={userPosition} to={placePosition} /> }      
        

        <LayersOverlay data={places}/>


      </MapContainer>
    </div>
  );
};


export default Map;