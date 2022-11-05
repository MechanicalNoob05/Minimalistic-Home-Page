import './quote.css'
import React, { useState, useEffect } from 'react'

function Quote() {
  const [quote , setquote] = useState({
    anime:null,
    character:null,
    quote:null
  })
  const fetchquote = async () =>{
    return await fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json())
  }
  useEffect(async()=>{
    setquote(await fetchquote());
  },[]);
  return (
    <div className='quote_container'>
        <p className='quote'>{quote.quote}</p>
        <p className='quote_author'>{quote.character}</p>
    </div>
  )
}

export default Quote