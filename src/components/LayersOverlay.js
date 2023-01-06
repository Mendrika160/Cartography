import React,{useEffect} from 'react'
import { LayerGroup, LayersControl } from 'react-leaflet';
import CustomMarker from './CustomMarker';
import { blueIcon } from './Icons';
import { filterIcon, iconBytype } from '../data/iconBytypeOfPlaces';

export const LayersOverlay = ({data,goHere}) => {

    const groups = {};
    

    data.forEach(item => {
        if (!groups[item.type]) {
            groups[item.type] = [];
        }
        groups[item.type].push(item);
    });
    
    const test = iconBytype[0].icon;
    const result = iconBytype.find(theIcon =>  theIcon.type === "Hotel").icons
    
    useEffect(() => {
    
        console.log("bleu icon",blueIcon)
        console.log("result icon",result);
        const tester = filterIcon("Hotel");
        console.log("tester",tester)
    },[])
    
    const overlays = Object.entries(groups).map((type) => (
        
        <LayersControl.Overlay name={type[0]} key={type[0]}>
            {console.log(type[0])}
            <LayerGroup>
                {type[1].map(p => ( 
                    
                    <CustomMarker
                    imgIcon={filterIcon(type[0])}
                    key={p.id}
                    position={p.coordinates}
                    textPopup={p.name}
                    goHere={goHere}
                    


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