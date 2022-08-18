import React from 'react'

const MovieCard = ({ item }) => {
  return (
    <div
    className='card'
    style={{backgroundImage : 
      "url(" + `https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/${item.poster_path}`+ ")",
      width:'300px',height:'200px'}}
  >
    MovieCard
    </div>
  )
}

export default MovieCard