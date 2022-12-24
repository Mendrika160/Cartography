import React,{useState } from 'react';
//import mapData from '../data/map.json'
import mapData from '../data/places.json'
import { useDispatch } from 'react-redux'
import {  searchPlace } from '../store/redux'


function SearchInput() {

  const dispatch = useDispatch();
  const [text, setText] = useState("");

  //filter all places by name (place) 
  const test = mapData.places.filter(p => p.name === text);
  

  const findPlace = () => {
    dispatch(searchPlace(test))
    
  }
  
  return (

    <>
    

      <div className="col-12 col-lg-auto mb-3 mb-lg-0">
          <input 
                
                onChange={(e) => setText(e.target.value)}
                value={text}
                className="form-control" 
                placeholder="Search..." 
                aria-label="Search" 
            />
        </div>
        <button 
            className='col-12 col-lg-auto mb-3 mb-lg-0 btn btn-primary'
            onClick={findPlace}
          >Search</button>
    
      
          
    </>
      
    
  )
}

export default SearchInput