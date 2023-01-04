import React ,{useRef}from 'react'
import {ContextMenu } from 'react-tiny-contextmenu'

export default function Navbar() {
  const theRef = useRef(null)

  const items = [
    {
        children: 'One Button',
    },
    {
        children: (
            <div>
                <button>two</button>
                <button>button</button>
            </div>
    ),
    },

]
const contextMenu = async (e) => {
  console.log(e)
}
  
  return (
    <>
        <header className="py-3 mb-4 border-bottom">
            <div className="container d-flex flex-wrap justify-content-center">
            <div className="nav-logo d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">Test</div>
            </div>
            <button onContextMenu={contextMenu} ref={theRef} >Test</button>
            <ContextMenu target={theRef} items={items}></ContextMenu>
        </header>

    
    
    </>
  )
}
