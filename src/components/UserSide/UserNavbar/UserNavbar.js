import React from 'react'
import './UserNavbar.css';
function UserNavbar() {
    return (
        <div className="navbar">
             <div className="left__Navbar">
                 <p>Dashboard</p>
                 <p>Profile</p>
                 <p>My Booking</p>
             </div>
             <div class="right__Navbar">
                 <p>Logout</p>
             </div>
        </div>
    )
}

export default UserNavbar
