import React from 'react'
import Quote from '../quote/Quote'
import './clock.css'

function Clock() {
  return (
    <div className='clock_container'>
        <h1><span className='hour'>00</span>:<span className='min'>00</span> <span className='am/pm'>AM</span></h1>
        <Quote></Quote>
    </div>
  )
}

export default Clock