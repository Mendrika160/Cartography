//import { LatLngExpression } from "leaflet";
import { MapContainer, TileLayer } from "react-leaflet";
//import 'leaflet/dist/leaflet.css';
//import MarkerClusterGroup from "react-";
const Map = () => {
  //const defaultPosition: LatLngExpression = [48.864716, 2.349]; // Paris position

  return (
    <div>
      <MapContainer
            className="map__container"
            center={[-18.766947, 46.869107]}
            zoom={12}
            maxZoom={28}
       >
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

       </MapContainer>
    </div>
  );
};


export default Map;