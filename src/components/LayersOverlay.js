import React from 'react'
import { LayerGroup, LayersControl,Marker, Popup } from 'react-leaflet';

export const LayersOverlay = ({data}) => {

    const groups = {};
    

    data.forEach(item => {
        if (!groups[item.type]) {
            groups[item.type] = [];
        }
        groups[item.type].push(item);
    });
    console.log("goup",groups)

    const overlays = Object.entries(groups).map((type,i) => (
        
        <LayersControl.Overlay name={type[0]} key={type[0]}>
            <LayerGroup>
                {type[1].map(p => ( 
                    <Marker key={p.id} position={p.coordinates}>
                        <Popup>{p.name}</Popup>
                    </Marker>
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