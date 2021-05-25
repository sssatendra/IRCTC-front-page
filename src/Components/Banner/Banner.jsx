import React from 'react';
import BookingForm from "./BookingForm"
import "./Banner.css"

function Banner() {
    return (
        <div className="banner">
            <div className="banner__left">
            <BookingForm />
            </div>
            <div className="banner__right">
            <h1>INDIAN RAILWAYS</h1>
            <h3>Safety | Security | Punctuality </h3>
            </div>
        </div>
    )
}

export default Banner
