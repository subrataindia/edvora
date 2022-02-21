import React, { useEffect, useState } from 'react'
import Header from './Components/Header/Header'  
import './App.css'
import Body from './Components/Body/Body'

const App = () => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [ridedata, setRideData] = useState([]);
  const [city, setCity] = useState();
  const [state, setState] = useState();

  const ride = [
    {
      id: '001',
      origin_station_code: 23,
      station_path: [23, 42, 45, 48, 56, 60, 77, 81, 93],
      destination_station_code: 93,
      date: 1644924365,
      map_url: "url",
      state: "Maharashtra",
      city: "Panvel"
    },
    {
      id: '002',
      origin_station_code: 20,
      station_path: [20, 39, 40, 42, 54, 63, 72, 88, 98],
      destination_station_code: 98,
      date: 1644924365,
      map_url: "url",
      state: "Maharashtra",
      city: "Panvel"
    },
    {
      id: '003',
      origin_station_code: 13,
      station_path: [13, 25, 41, 48, 59, 64, 75, 81, 91],
      destination_station_code: 91,
      date: 1644924365,
      map_url: "url",
      state: "Odisha",
      city: "Rayagada"
    }
  ]

  const getUniqueStates = (data) =>{
    let states = [];
    for(let i=0; i< data.length; i++){
      if(states.indexOf(data[i].state) !== -1) continue;
      states.push(data[i].state);
    }
    //console.log(states);
    setStates(states);
  }

  const getUniqueCities = (data) =>{
    let cities = [];
    for(let i=0; i< data.length; i++){
      if(cities.indexOf(data[i].city) !== -1) continue;
      cities.push(data[i].city);
    }
    //console.log(cities);
    setCities(cities);
  }

  const getUniqueCitiesByState = (data) =>{
    let cities = [];
    for(let i=0; i< data.length; i++){
      if(cities.indexOf(data[i].city) !== -1) continue;
      if(state != 0 && data[i].state == state) cities.push(data[i].city);
    }
    //console.log(cities);
    setCities(cities);
  }  

  const user = {
    station_code: 40,
    name: "Dhruv Singh",
    profile_key: "https://yt3.ggpht.com/ytc/AKedOLSBM0vycNGd7SBe2xQ8IGG_JYyAosmxuVNzgwhN=s900-c-k-c0x00ffffff-no-rj",
  }

  function handleDataChange(data,state=0,city=0){
    if(state != 0){
      let filteredData = data.filter(d => (d.state).toLowerCase().includes(state.toLowerCase()));
      setRideData(filteredData);
      console.log("state not zero");
    }
    if(city != 0){
      setRideData(data.filter(d => (d.city).toLowerCase().includes(city.toLowerCase())));
      console.log("city not zero");
    }
    if(state==0 && city==0) {
      setRideData(data);
      console.log("state zero and city zero");
      console.log(data);
      return;
    }
    
  }
  useEffect(()=>{
    getUniqueStates(ride);
    getUniqueCities(ride);
    handleDataChange(ride);
    //console.log(states);
  },[])

  useEffect(() => {
    console.log("city changed")
    handleDataChange(ride,state,city);
  },[city])

  useEffect(()=>{
    getUniqueCitiesByState(ride);
    console.log("state changed")
    handleDataChange(ride,state,city);
  },[state])
  return (
    <>
        <Header user = {user}/>
        <Body user = {user} ridedata={ridedata} states={states} cities={cities} setCity={setCity} setState={setState}/>
    </>
  )
}


export default App