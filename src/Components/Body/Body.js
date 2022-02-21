import React, { useEffect, useState } from 'react'
import Nav from '../Nav/Nav'
import SingleRide from '../SingleRide/SingleRide'

const Body = ({user, ridedata, states, cities, setCity, setState}) => {
    const[nearestRides, setNearestRides] = useState([]);
    const[actualRides, setActualRides] = useState([]);
    const[menuOption, setMenuOption] = useState(0);

    console.log("body");
    console.log(states);

    function calcNearestRides(data){
        console.log("Nearest Rides");
        let us = user.station_code;
        let nRides = [];
        data.forEach((d) => {
            let nearestStn = d.station_path.reduce((a, b) => { return Math.abs(b - us) < Math.abs(a - us) ? b : a; })
            d.distance = nearestStn - us ;
            nRides.push(d)
        })
        nRides.sort((a,b) => a.distance - b.distance)
        //console.log(nRides)
        setNearestRides(nRides);
    }

    useEffect(()=>{
        calcNearestRides(ridedata);
    },[ridedata])

    useEffect(()=>{
        calcNearestRides(ridedata);
    },[menuOption])

    useEffect(()=>{
        setActualRides(nearestRides);
    },[nearestRides])

    useEffect(()=>{
        console.log("Actual Rides");
        console.log(actualRides);
    },[actualRides])

  return (
    <main>
      <Nav states={states} cities={cities} setCity={setCity} setState={setState}/>
      { actualRides.map((singleride) => 
        <SingleRide key={singleride.id} ride={singleride} menuOption={menuOption}/>
      )}
    </main>
  )
}

export default Body