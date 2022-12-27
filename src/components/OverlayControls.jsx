import React from 'react'
import { LayersControl, Marker } from 'react-leaflet';


export default function OverlayControls({data}) {

    const types = [...new Set(data.map(item => item.type))];
    console.log("types",types)

    return (
        <>
            <LayersControl>
                {types.map(type => (
                    <LayersControl.Overlay name={type} key={type}>
                    {data
                        .filter(item => item.type === type)
                        .map(item => (
                        <Marker position={item.coordinates} key={item.id} />
                        ))}
                    </LayersControl.Overlay>
                ))}
        </LayersControl>

        </>
    )
}
