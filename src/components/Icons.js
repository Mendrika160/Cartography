import L from "leaflet";
import employementImg from '../img/marker/employment.png'
import parkImg from '../img/marker/parks.png'
import eventImg from '../img/marker/event.png'
import defaultImg from '../img/marker/default.png'
import blueImg from '../img/marker/marker-icon-blue.png'
import hotelImg from '../img/marker/hotels.png'
import hospitalImg from '../img/marker/health-medical.png'
import pharmacyImg from '../img/marker/medical.png'
import cyberImg from '../img/marker/internet.png'
import stationmentImg from '../img/marker/transport.png'
import schoolImg from '../img/marker/schools.png'
import barsImg from '../img/marker/bars.png'
import restaurentImg from '../img/marker/restaurants.png'
import aeroportImg from '../img/marker/marqueur-aeroport.png'
import bankImg from '../img/marker/bank.png'
import stationServiceImg from  '../img/marker/electronics.png'

export const greenIcon = new L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  export const aeroportIcon = L.icon({

    iconSize: [43, 44],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
    iconUrl: aeroportImg,
    shadowAnchor: [4, 62],  // the same for the shadow
    
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

// bank icon
export const bankIcon = L.icon({

  iconSize: [53, 60],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: bankImg,
  shadowAnchor: [4, 62],  // the same for the shadow
  
});



// station service icon
export const stationServiceIcon = L.icon({

  iconSize: [33, 44],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: stationServiceImg,
  shadowAnchor: [4, 62],  // the same for the shadow
  
});

// restaurant icon
export const restaurentIcon = L.icon({

  iconSize: [33, 44],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: restaurentImg,
  shadowAnchor: [4, 62],  // the same for the shadow
  
});

// hotel icon
export const hotelIcon = L.icon({

  iconSize: [33, 44],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: hotelImg,
  shadowAnchor: [4, 62],  // the same for the shadow
  
});

// stationnement icon

export const stationmentIcon = L.icon({

  iconSize: [33, 44],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: stationmentImg,
  shadowAnchor: [4, 62],  // the same for the shadow
  
});

//cyber icon 
export const cyberIcon = L.icon({

  iconSize: [33, 44],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: cyberImg,
  shadowAnchor: [4, 62],  // the same for the shadow
  
});

// school icon

export const schoolIcon = L.icon({

  iconSize: [33, 44],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: schoolImg,
  shadowAnchor: [4, 62],  // the same for the shadow
  
});

// hospital icon

export const hospitalIcon = L.icon({

  iconSize: [33, 44],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: hospitalImg,
  shadowAnchor: [4, 62],  // the same for the shadow
  
});

// pharmacy icon
export const pharamcyIcon = L.icon({

  iconSize: [33, 44],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: pharmacyImg,
  shadowAnchor: [4, 62],  // the same for the shadow
  
});

//bar icon

export const barsIcon = L.icon({

  iconSize: [33, 44],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: barsImg,
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
