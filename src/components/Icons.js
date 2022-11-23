import L from "leaflet";
import employementImg from '../img/marker/employment.png'
import parkImg from '../img/marker/parks.png'


export const employementIcon = L.icon({

    iconSize: [33, 44],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
    iconUrl: employementImg,
    shadowAnchor: [4, 62],  // the same for the shadow
    
});

export const parkIcon = L.icon({

    iconSize: [33, 44],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
    iconUrl: parkImg,
    shadowAnchor: [4, 62],  // the same for the shadow
    
});
