import React from 'react'
import { Home } from '@material-ui/icons';
import "./Header.css";

function Header() {
    var currentdate = new Date();
    var datetime = "Last Sync: " + currentdate.getDay() + "/" + currentdate.getMonth() + "/" + currentdate.getFullYear() + " @ " + currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();

    return (
        <div className="header">
            <div className="header__left">
                <img src="https://www.irctc.co.in/nget/assets/images/secondry-logo.png" alt=""/>
            </div>
            <div className="header__mid"> 
                <div className="header__midtop">
                   <h4>Login</h4> 
                   <h4>Register</h4> 
                   <h4>Agent Login</h4> 
                   <h4>Contact Us</h4> 
                   <h4>Ask Disha</h4> 
                   <h4>Alerts</h4> 
                   <h4>{datetime}</h4> 
                </div>
                <div className="header__midbottom">
                <Home />
                <h4>IRCTC Exclusive</h4>
                <h4>Trains</h4>
                <h4>Buses</h4>
                <h4>Flights</h4>
                <h4>Hotels</h4>
                <h4>Holiday</h4>
                <h4>Loyalty Meal</h4>
                <h4>Promotions</h4>
                </div>
            </div>
            <div className="header__right">
                <img src="https://www.irctc.co.in/nget/assets/images/logo.png" alt=""/>
            </div>
        </div>
    )
}

export default Header
