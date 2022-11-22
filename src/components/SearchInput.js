import React,{useState } from 'react';

function SearchInput() {

  const [text, setText] = useState("");
  
  return (

    <div className="col-12 col-lg-auto mb-3 mb-lg-0">
      <input 
            
            onChange={(e) => setText(e.target.value)}
            value={text}
            className="form-control" 
            placeholder="Search..." 
            aria-label="Search" 
        />
        
    </div>
  )
}

export default SearchInput