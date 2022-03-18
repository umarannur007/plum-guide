import React from 'react';

import "./index.scss"
const Booking = () => {
  return (
    <div className={"booking"}>
      <div className="booking__item">
        <label>From/To</label>
        <select name="" id="">
          <option value="0">Select Date</option>
          <option value="0">3 Jan 2020 - Feb 2020</option>
        </select>
      </div>
      <div className="booking__item">
        <label>For</label>
          <select name="" id="">
            <option value="0">Number of Guests</option>
            <option value="0">1 Guest</option>
            <option value="0">2 Guests</option>
            <option value="0">3 Guests</option>
          </select>
      </div>
      <div className="booking__item">
        <span>&#8358; Per night </span>
        <div>345</div>
      </div>
      <div className="booking__item">
        <span>&#8358; Total for 54 nights </span>
        <div>18,630</div>
      </div>
      <div className="booking__item">
        <button>INSTANT BOOKING</button>
      </div>
    </div>
  );
};

export default Booking;