import React,{useState ,useEffect, useRef} from 'react';
//import mapData from '../data/map.json'
import mapData from '../data/places.json'
import { useDispatch } from 'react-redux'
import {  searchPlace } from '../store/redux'



function SearchInput() {

  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [search,setSearch] = useState([]);
  const [suggestion,setSuggestion] = useState([]);
  const {places} = mapData;
  const hasValue = useRef(false)

  useEffect(() => {
    setSearch(places)
  },[places])

  useEffect(() => {
    if(text.length > 2){
      hasValue.current = true;
    }else{
      hasValue.current = false;
    }
  },[text])
  
  const onChangeHandler = (text) => {
  
    if(text.length > 2){
      hasValue.current = true
      // ig : Perform a global match (find all matches rather than stopping after the first match)
      const regex = new RegExp(`${text}`,'ig');
      const result = search.filter(res => {
        return res.name.match(regex);
      })
      setSuggestion(result);
    }else{
      setSuggestion([])
    }
    
    setText(text);
    
    
  }
  //const test = mapData.places.filter(p => p.name === text);
  const findPlace = () => {
    // find the first match and stop
    const regex = new RegExp(`${text}`,'i');
    const test = mapData.places.filter(p => p.name.match(regex));
    console.log("test",test)
    dispatch(searchPlace(test))
    console.log("first suggestion",suggestion)
    
  }

  const inputBlur = () => {
    setTimeout(() =>{
      setSuggestion([]);
      hasValue.current = false;
    },400)

  }

  const suggestHandler = (val) => {
    setText(val);
    hasValue.current = false;
    
  }
  
  return (

    <>
    
    <div className="row align-items-start">
       <div className="col-xl-9 col-lg-9 mb-3 mb-lg-0">
          <input 
                
                onChange={(e) => onChangeHandler(e.target.value)}
                value={text}
                className="form-control" 
                placeholder="Search..." 
                aria-label="Search" 
                onBlur={inputBlur}
            />
          
            <div className="suggestion">
              {suggestion.map((s) => {
                return <p key={s.id} 
                          className='suggestion-item'
                          onClick={() => suggestHandler(s.name)}
                          >{s.name}</p>
              })}
            </div>
            
        </div>
        <button 
            className=' col-xl-3 col-lg-3 mb-3 mb-lg-0 btn btn-primary btn-search'
            onClick={findPlace}
          >Search</button>
    </div>
     
        
    
      
          
    </>
      
    
  )
}

export default SearchInput