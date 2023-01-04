
import React, { useEffect } from 'react'
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
                            text: 'Start here',
                            index: 0,
                            callback: startHere
                        },
                        {
                            separator: true,
                            index: 1
                        },
                        {
                            text: 'Go here',
                            index: 2,
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