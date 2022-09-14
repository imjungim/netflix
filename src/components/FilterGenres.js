import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Badge } from "react-bootstrap";
import { movieAction } from "../redux/actions/movieAction";

const FilterGenres = () => {
  const dispatch = useDispatch();
  const [genreTitle, setGenreTitle] = useState("");
  const { genreList } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(movieAction.getFiltering(undefined, undefined, genreTitle));
  }, [genreTitle]);

  return (
    <div className="filter-genre">
      <div className="filter-name">
        <h5>Genres</h5>
      </div>
      <div className="genreList">
        {genreList?.map((item) => (
          <button
            key={item.id}
            value={item.name}
            onClick={(event) => {
              setGenreTitle(event.target.value);
            }}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterGenres;
