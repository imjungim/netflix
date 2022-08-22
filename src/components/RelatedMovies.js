import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { Badge } from "react-bootstrap";

const RelatedMovies = ({item}) => {
  console.log("ITEM!!",item)
  return (
    <div
      className="card"
      style={{
        backgroundImage:
          "url(" +
          `https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/1heBUD8o0sgdqLWyeXkylR2POKb.jpg` +
          ")",
        width: "400px",
        height: "250px",
      }} 
    >
      <div className="overlay">
        <h3>item</h3>
        <div>
          {/* {item.genre_ids.map((id) => (
            <Badge bg="danger">
              {genreList.find((item)=>item.id === id).name}
            </Badge>
          ))} */}
          <Badge bg='danger'>ttest</Badge>
        </div>
        <div>
          <span>average</span>
          <span>adult</span>
        </div>
      </div>
    </div>
  )
}

export default RelatedMovies