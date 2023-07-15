import React from 'react'
import "./Footer.scss"
function Footer() {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
            <h1>Categories</h1>
            <span>Men</span>
            <span>Women</span>
            <span>Shoes</span>
            <span>Accessories</span>
            <span>New Arrivals</span>
        </div>
        <div className="item">
        <h1>Links</h1>
            <span>FAQ</span>
            <span>Pages</span>
            <span>Stores</span>
            <span>Compare</span>
            <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean 
          sit amet dolor finibus, consequat nulla at, venenatis neque. Donec 
          consequat lacinia augue at faucibus. Fusce a mi eu eros finibus 
          gravida. Maecenas ipsum massa.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean 
          sit amet dolor finibus, consequat nulla at, venenatis neque. Donec 
          consequat lacinia augue at faucibus. Fusce a mi eu eros finibus 
          gravida. Maecenas ipsum massa.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className='logo'>Threads & Co.</span>
          <span className='copyright'>
             &#169;Copyright 2022. All rights reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt=''/>
        </div>
      </div>
    </div>
  )
}

export default Footer