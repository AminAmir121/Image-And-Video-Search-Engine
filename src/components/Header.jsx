import React from 'react'
import ToggleSelector from './ToggleSelector'
import { useRef, useState } from 'react'
import {useDispatch} from "react-redux"
import {Fetching, setUserSearch} from './store/store'

const Header = ({type, setType}) => {

  
  const dispatch = useDispatch();
  const query = useRef();


  const Enter  = (event)=>{
    if (event.key === 'Enter') {
      const search  = query.current.value;
      dispatch(setUserSearch(search));
      dispatch(Fetching({query : search , type})) 
      query.current.value = " ";
    }
  }
  

  return (
    <div className='head'>
        <div className="logo">
            <img src="./Pexels logo.png" alt="" />
        </div>

        <div className="input">
            <input type="search" id='UserInp' placeholder='Search Images & Videos!' ref={query} onKeyDown={Enter} />
            <ToggleSelector type={type} setType={setType}  ></ToggleSelector>
        </div>

    </div>
  )
}

export default Header