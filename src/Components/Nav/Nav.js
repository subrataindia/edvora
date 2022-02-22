import React, { useState, useEffect, useContext } from 'react'
import './Nav.css'
import { HiMenuAlt2 } from "react-icons/hi"
import FilterModal from '../FilterModal/FilterModal'

const Nav = () => {
  const [filterModalDisplay, setFilterModalDisplay] = useState(false);

  const handleFilterModalDisplay = () => {
    filterModalDisplay ? setFilterModalDisplay(false) : setFilterModalDisplay(true);
  }

  useEffect(() =>{
    handleFilterModalDisplay();
  },[])

  return (
      <>
        { filterModalDisplay || <FilterModal/>}
        <nav>
        <ul>
            <li>Nearest rides</li>
            <li>Upcomming rides</li>
            <li>Past rides</li>
        </ul>
        <div className='filterMenu' onClick={handleFilterModalDisplay}>
            <HiMenuAlt2 />
            Filters
        </div>
      </nav>
      
    </>
  )
}

export default Nav