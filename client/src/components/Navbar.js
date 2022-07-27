import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';

export default function Navbar() {

    return (
        <div className='Navbar'>
            <div> <img className="leftimg" src="../Images/logo.PNG" alt="" /></div>

            <Link to='/addpost'><img className='rightimg' src="../Images/camera.jpg" alt="" /></Link>

        </div>

    )
}
