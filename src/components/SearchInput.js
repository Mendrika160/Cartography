import React,{useState ,useEffect} from 'react';
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

  useEffect(() => {
    setSearch(places)
  },[places])
  
  const onChangeHandler = (text) => {
  
    if(text.length > 0){
      const regex = new RegExp(`${text}`,'ig');
      const result = search.filter(res => {
        return res.name.match(regex);
      })
      setSuggestion(result);
    }else{
      setSuggestion([])
    }
    
    
    setText(text);
    console.log("suggestion",suggestion);
    
  }

  const findPlace = () => {
    dispatch(searchPlace(test))
    
  }

  const inputBlur = () => {
    setTimeout(() =>{
      setSuggestion([]);
    },100)

  }

  const suggestHandler = (val) => {
    setText(val)
  }
  const test = mapData.places.filter(p => p.name === text);
  return (

    <>
    

      <div className="col-12 col-lg-auto mb-3 mb-lg-0">
          <input 
                
                onChange={(e) => onChangeHandler(e.target.value)}
                value={text}
                className="form-control" 
                placeholder="Search..." 
                aria-label="Search" 
                onBlur={inputBlur}
            />
            <div className='suggestion'>
              {suggestion.map((s) => {
                return <p key={s.id} 
                          className='suggestion-item'
                          onClick={() => suggestHandler(s.name)}
                          >{s.name}</p>
              })}
            </div>
        </div>
        <button 
            className='col-12 col-lg-auto mb-3 mb-lg-0 btn btn-primary'
            onClick={findPlace}
          >Search</button>
    
      
          
    </>
      
    
  )
}

export default SearchInput