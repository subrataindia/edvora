import React from 'react'
import './Header.css'

function Header({user}){
  return (
    <header className='header'>
      <h1 className='headerStart'>Edvora</h1>
      <div className='headerEnd'>
        <div className='userName'>
          {user.name}
        </div>
        <div className='userImage'>
          <img src={user.profile_key} alt={user.name}/>
        </div>
      </div>
    </header>
  )
}

export default Header