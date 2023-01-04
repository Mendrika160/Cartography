
import React,{useEffect} from 'react'
import CustomMarker from './CustomMarker';
import {useMap} from 'react-leaflet'
import { greenIcon} from './Icons'

function FindPlace({places,goHere,startHere}) {
    
    //const places = useSelector((state) => state.places );
    const map = useMap();
    useEffect( () => {
        map.flyTo(places.coordinates, 8);

    },[places,map])

   

    return (
        <>
        
        <CustomMarker 
                    position={places.coordinates}
                    imgIcon={greenIcon} 
                    textPopup={places.name}
                    goHere={goHere}
                    startHere={startHere}
                />
            
        </>
    )
}

export default FindPlace