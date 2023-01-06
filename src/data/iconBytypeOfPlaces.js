import {barsIcon,hospitalIcon,hotelIcon,pharamcyIcon, schoolIcon,stationmentIcon,defaultIcon,cyberIcon,restaurentIcon,aeroportIcon,bankIcon, stationServiceIcon} from '../components/Icons'


export const iconBytype = [
    {
        "id": 0,
        "type" : "Hotel",
        "icons" : hotelIcon
    },
    {
        "id": 1,
        "type" : "Bars",
        "icons" : barsIcon
    },
    {
        "id": 2,
        "type" : "Hospital",
        "icons" : hospitalIcon
    },
    {
        "id": 3,
        "type" : "Pharmacy",
        "icons" : pharamcyIcon
    },
    {
        "id": 4,
        "type" : "School",
        "icons" : schoolIcon
    },
    {
        "id": 5,
        "type" : "Stationment",
        "icons" : stationmentIcon
    },
    {
        "id": 6,
        "type" : "Cyber",
        "icons" : cyberIcon
    },
    {
        "id": 7,
        "type" : "Restaurant",
        "icons" : restaurentIcon
    },
    {
        "id": 8,
        "type" : "Aeroport",
        "icons" : aeroportIcon
    },
    {
        "id": 9,
        "type" : "Station service",
        "icons" : stationServiceIcon
    },
    {
        "id": 10,
        "type" : "Banque",
        "icons" : bankIcon
    },
]


export const filterIcon = (types) => {
    const result = iconBytype.filter(icons => icons.type === types)
    if(result.length === 0){
        return defaultIcon
    }else{
        return result[0].icons;
    }
    

}
