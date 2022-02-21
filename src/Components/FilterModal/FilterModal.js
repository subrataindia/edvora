import React, { useContext } from 'react'
import './FilterModal.css'

const FilterModal = ({states, cities, setState, setCity}) => {

    // console.log("filtermodal");
    // console.log(cities);


    const handleStateChange = (event) => {
        // console.log(event.target.value);
        setState(event.target.value);
    }

    const handleCityChange = (event) => {
        // console.log(event.target.value);
        setCity(event.target.value);
    }    

  return (
    <div className='filterModal'>
        <div className='filterTitle'>
            Filters
        </div>
        <hr/>
        <div>
            <select id="state" onChange={handleStateChange}>
                <option value="0">State</option>
                {
                    states.map((s) => <option key={s} value={s}>{s}</option>)
                }
            </select>
        </div>
        <div>
            <select id="city" onChange={handleCityChange}>
                <option value="0">City</option>
                {
                    cities.map((c) => <option key={c} value={c}>{c}</option>)
                }
            </select>
        </div>
    </div>
  )
}

export default FilterModal