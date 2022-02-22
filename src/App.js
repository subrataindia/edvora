import React, { useContext, useEffect, useState } from 'react'
import Header from './Components/Header/Header'  
import './App.css'
import Body from './Components/Body/Body'
import DataContext, { DataProvider } from './Components/Context/DataContext/DataContext'

const App = () => {
  return (
    <>
      <DataProvider>
        <Header/>
        <Body/>
      </DataProvider>
    </>
  )
}


export default App