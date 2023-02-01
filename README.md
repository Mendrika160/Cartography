# Cartography
### Before launching this project, replace the above data with locations in your country that is in `src/data/places.json`  
```javascript 
{
    "places": [
        {
            "id": 1,
            "type": "Hotel",
            "name": "Zomatel",
            "coordinates": [-21.454799,47.086746]
        },
        {
            "id": 2,
            "type": "Cyber",
            "name": "301-Cyber",
            "coordinates": [-21.457198,47.090124]
        },

        {
            "id": 3,
            "type":"Hotel",
            "name": "Tombotsoa Hotel",
            "coordinates": [-21.450248,47.087712]
        },
        {
            "id": 4,
            "type": "Restaurant",
            "name": "Baby food",
            "coordinates": [-21.441847,47.092636]
        },

    ]

}
``` 
## Use this command line to run this project  
* npm install  
* npm start  



## Fonctionality  
1 Search a place by name (ex : Zomatel ,...) We use  Geojson here(you can find this data in  src/data/map.json)  
2 make the route from my current position to the place found.  
3 Can Change route when right click on marker 

## Demo 
[https://cartography-mada.onrender.com](https://cartography-mada.onrender.com)
