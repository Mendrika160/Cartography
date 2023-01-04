import L from "leaflet";
import employementImg from '../img/marker/employment.png'
import parkImg from '../img/marker/parks.png'
import eventImg from '../img/marker/event.png'
import defaultImg from '../img/marker/default.png'
import blueImg from '../img/marker/marker-icon-blue.png'


export const greenIcon = new L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  export const redIcon = new L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  export const blueIcon = new L.icon({
    iconUrl:blueImg ,
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

export const defaultIcon = L.icon({
    iconUrl: defaultImg,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
    shadowAnchor: [4, 62],  // the same for the shadow
    
});
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

export const eventIcon = L.icon({

    iconSize: [33, 44],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
    iconUrl: eventImg,
    shadowAnchor: [4, 62],  // the same for the shadow
    
});
