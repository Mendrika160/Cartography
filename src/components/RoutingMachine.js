import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import "lrm-graphhopper"

const createRoutineMachineLayer = ({firstPosition,secondPosition}) => {

    alert("position",firstPosition);
    const instance = L.Routing.control({
        waypoints: [
            L.latLng(-18.9005824,47.5234304),
            L.latLng(-21.457198,47.090124)
        
        ],
        router : L.Routing.graphHopper("6274a802-82a1-457d-9f15-285f0002a36a"),
        lineOptions: {
            styles: [{ color: "#6FA1EC", weight: 4 }]
        },
            show: false,
            addWaypoints: false,
            routeWhileDragging: true,
            draggableWaypoints: true,
            fitSelectedRoutes: true,
            showAlternatives: false
        });

        return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
