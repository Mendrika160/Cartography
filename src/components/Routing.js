import { useEffect } from "react";
import L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import { useMap } from "react-leaflet";


L.Marker.prototype.options.icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png"
});

const Routing = ({ from, to }) => {
  const map = useMap();


  useEffect(() => {
    if (!map) return;

    const routingControl = L.Routing.control({
      waypoints: [
        L.latLng(parseFloat(from[0]), parseFloat(from[1])),
        L.latLng(parseFloat(to[0]),parseFloat(to[1]))
      ],
      createMarker : () => { return null },
      collapsible: true,
      
      lineOptions: {
        styles: [{ color: "#6FA1EC", weight: 4 }]
      },
      show: true,
      showAlternatives: true,
      addWaypoints: true,
      fitSelectedRoutes: true
    }).addTo(map);

    //return () => map.removeControl(routingControl);
  }, [map, from,to]);

  return null;
};

export default Routing;
