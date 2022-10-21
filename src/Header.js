import React from 'react'
import './Header.css'


function Header() {
  return (
    <div className='header'>
        <img className='header__icon' src="https://d3ui957tjb5bqd.cloudfront.net/uploads/2015/09/airbnb-2.jpg" alt=''/>

    <div className='header__center'>
      <input type='text' />
    </div>

    <div className='header__right'>
      <p>Become a host</p>
      {/* import icons here. Example language, expand more and avatar icons. */}
      
    </div>
    </div>

    
  )
}

export default Header;
