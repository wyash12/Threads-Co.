import React from 'react'
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from 'react-router-dom'
import './Navbar.scss'
function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <img src="/img/IN.png" alt='' />
          <KeyboardArrowDownIcon />

          <div className="item">
            <span>INR</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link className='link' to="/products/2">Men</Link>
          </div>
          <div className="item">
            <Link className='link' to="/products/1">Women</Link>
          </div>
          <div className="item">
            <Link className='link' to="/products/3">Kids</Link>
          </div>
        </div>
        <div className="center">
          <Link className='link' to="/">Threads & Co.</Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className='link'>Homepage</Link>
          </div>
          <div className="item">
            <Link className='link'>About</Link>
          </div>
          <div className="item">
            <Link className='link'>Contact</Link>
          </div>
          <div className="item">
            <Link className='link'>Stores</Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div className="cartIcon">
              <ShoppingCartOutlinedIcon />
              <span>0</span>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar