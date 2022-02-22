import React, { useContext, useEffect, useState } from 'react'
import Nav from '../Nav/Nav'
import SingleRide from '../SingleRide/SingleRide'
import DataContext from '../../Components/Context/DataContext/DataContext'

const Body = () => {

    const {user, ridedata, states, cities, setCity, setState, menuOption, actualRides} = useContext(DataContext);
    return (
      <main>
        <Nav/>
        { actualRides.map((singleride) => 
          <SingleRide key={singleride.id} ride={singleride} menuOption={menuOption}/>
        )}
      </main>
    )
}

export default Body