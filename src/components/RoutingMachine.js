import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
//import "lrm-graphhopper"

const createRoutineMachineLayer = ({startPosition,endPosition}) => {

    console.log("RLM end",endPosition)
    console.log("RLM start",startPosition)
    const instance = L.Routing.control({
        waypoints: [
           // L.latLng(-18.9005824,47.5234304),
           // L.latLng(-21.457198,47.090124)
           L.latLng(startPosition[0],startPosition[1]),
           L.latLng(endPosition[0],endPosition[1])
        
        ],
        //router : L.Routing.graphHopper("6274a802-82a1-457d-9f15-285f0002a36a"),
        lineOptions: {
            styles: [{ color: "#6FA1EC", weight: 4 }]
        },
            show: false,
            addWaypoints: false,
            routeWhileDragging: true,
            draggableWaypoints: true,
            fitSelectedRoutes: true,
            showAlternatives: true,
            altLineOptions : {
                styles : [
                    {color : 'black', opacity : 0.15, weight : 9},
                    {color : 'white', opacity : 0.15, weight : 6},
                    {color : 'blue', opacity : 0.15, weight : 2},
                ]
            }
        });

        return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
