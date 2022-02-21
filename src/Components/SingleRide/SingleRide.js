import React from 'react'
import rideimg from '../../img/root.png'
import './SingleRide.css'

const SingleRide = ({ride}) => {
  
  let date = function(ride) {
    let options = {day: 'numeric', month: 'short',  year: 'numeric'};
    let d = new Date(ride.date).getDate();
    let m = (new Date(ride.date).toLocaleString('en-UK', options)).substring(3,6)
    let y = new Date(ride.date).getFullYear();
    let h = new Date(ride.date).getHours();
    let mi = new Date(ride.date).getMinutes();
    //console.log(""+d+" "+m+" "+y+" "+h+":"+mi);


    //console.log((new Date(ride.date).toLocaleString('en-UK', options)).substring(3,6));    
    return (""+d+" "+m+" "+y+" "+h+":"+mi);
  }

  return (
    <div className='singleRide'>
        <div className='rideMap'>
            <img src={rideimg} alt="ride root"/>
        </div>
        <div className='rideDetails'>
            <div>Ride Id : {ride.id}</div>
            <div>Origin Station : {ride.origin_station_code}</div>
            <div>Station_path : {`[${ride.station_path.toString()}]`}</div>
            <div>Date : { date(ride) }</div>
            <div>Distance: {ride.distance} </div>
        </div>
        <div className='rideCityState'>
          <span>{ride.city}</span>
          <span>{ride.state}</span>
        </div>
    </div>
  )
}

export default SingleRide