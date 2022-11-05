import React, { useState } from 'react'
import Quote from '../quote/Quote'
import './clock.css'
import Moment from 'moment'

function Clock() {
  const options = {
    timeZone:"Asia/Kolkata",
    hour12 : true,
    hour:  "numeric",
    minute: "numeric",seconds:"numeric"
 }
  let time = new Date().toLocaleTimeString("en-US",options);
  const [currentTime, setCurrentTime] = useState(time);
  const updateTime = () => {
    let time = new Date().toLocaleTimeString("en-US",options);
    setCurrentTime(time);
  }
  setInterval(updateTime,1000);

  let date = Moment().format('DD-MM-YYYY');

  return (
    <div className='clock_container'>
        <h1>{currentTime}</h1>
        <h2>{date}</h2>
        <Quote></Quote>
    </div>
  )
}

export default Clock