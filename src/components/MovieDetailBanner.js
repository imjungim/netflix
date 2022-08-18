import React from 'react'

const MovieDetailBanner = () => {
  return (
    <div 
    className='MovieDetailBanner'
    style={{
      backgroundImage:
        "url(" +
        `https://images.hdqwalls.com/download/polygonal-abstract-red-dark-background-eo-1280x1024.jpg` +
        ")",
    }}>
      <div>
        <h1>NETFLIX</h1>
        <ul>
          <li>
            Home
          </li>
          <li>title</li>
        </ul>
      </div>
    </div>
  )
}

export default MovieDetailBanner