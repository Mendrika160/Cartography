import React,{useEffect} from 'react'

import {Marker,Popup,useMap} from 'react-leaflet'


function FindPlace({marker,places}) {
    //const [existPlace,setExistPlace] = useState(false)
    //const places = useSelector((state) => state.places );
    console.log("places findplaces",places)
    const map = useMap();
    useEffect( () => {
        map.flyTo(places.coordinates, 8);

    },[places,map])

    return (
        <>
        <Marker position={places.coordinates} icon={marker}>
            <Popup>{places.name}</Popup>
        </Marker>
            
                
                
        </>
    )
}

export default FindPlace