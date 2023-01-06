
import React from 'react'
import { Marker, Popup } from 'react-leaflet';
import 'leaflet-contextmenu';
import 'leaflet-contextmenu/dist/leaflet.contextmenu.css'


const CustomMarker = ({position,imgIcon,textPopup,startHere,goHere}) => {
    
   

    return (
        <>
                <Marker
                    position={position}
                    icon={imgIcon}
                    contextmenu={true}
                    contextmenuItems={ [
                    
                        {
                            text: 'Go here',
                            index: 0,
                            callback: goHere

                        }
                    ]}
                >
                        <Popup>{textPopup}</Popup>
                </Marker>
        </>
    )
}

export default CustomMarker