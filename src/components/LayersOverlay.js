import React from 'react'
import { LayerGroup, LayersControl } from 'react-leaflet';
import CustomMarker from './CustomMarker';
import { blueIcon } from './Icons';
export const LayersOverlay = ({data,goHere,startHere}) => {

    const groups = {};
    

    data.forEach(item => {
        if (!groups[item.type]) {
            groups[item.type] = [];
        }
        groups[item.type].push(item);
    });
    

    const overlays = Object.entries(groups).map((type,i) => (
        
        <LayersControl.Overlay name={type[0]} key={type[0]}>
            <LayerGroup>
                {type[1].map(p => ( 
                    <CustomMarker
                    imgIcon={blueIcon} 
                    key={p.id}
                    position={p.coordinates}
                    textPopup={p.name}
                    goHere={goHere}
                    startHere={startHere}


                    />
                    
                ))}
            </LayerGroup>
        
        </LayersControl.Overlay>
        ));
    
        return (
            <LayersControl>
            {overlays}
            </LayersControl>
        );

}

export default LayersOverlay;