import React from 'react'
import "./header.css";

const Header = () => {
  return (
    <div className='max-width header'>
      <img src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png' alt='zomato-logo' className='header-logo' />
      <div className='header-right'>
        <div className='header-location-search-container'>
          <div className='location-wrapper'>
            <div className='location-icon-name'>
              <i className='fi fi-rr-marker absolute-center location-icon'></i>
              <div>Banglore</div>
            </div>
            <i className='fi fi-rr-caret-down absolute-center'></i>
          </div>
          <div className='location-search-separator'></div>
          <div className='header-searchbar'>
            <i className='fi fi-rr-search absolute-center search-icon'></i>
            <input placeholder='Search for restaurant, cuisine or a dish' className='search-input' />

          </div>
        </div>
        <div className='profile-wrapper'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPu-WlPnhv802_BbtXLN8seC3L1T3vypk8ng&usqp=CAU' alt='img' className='header-profile-image' />
          <span className='header-username'>Saurabh</span>
          <i class='fi fi-rr-angle-small-down absolute-center profile-options-icon'></i>
        </div>
      </div>
    </div>
  )
}

export default Header
