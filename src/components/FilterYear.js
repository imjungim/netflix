import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import MultiRangeSlider from "multi-range-slider-react";
import { movieAction } from "../redux/actions/movieAction";

const FilterYear = ({ min, max }) => {
  const dispatch = useDispatch();

  const [minValue, set_minValue] = useState(min);
  const [maxValue, set_maxValue] = useState(max);
  const [close, setClose] = useState(false);

  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };

  useEffect(() => {
    dispatch(movieAction.getFiltering(maxValue, minValue));
  }, [maxValue, minValue]);

  return (
    <div>
      <div className="Filter-area">
        <h5>Year Filter</h5>
        <div>
          From : {minValue} - To : {maxValue}
        </div>
      </div>
      <div className="inputSlider">
        <MultiRangeSlider
          baseClassName="multi-range-slider"
          min={min}
          max={max}
          step={1}
          ruler={false}
          label={false}
          preventWheel={false}
          minValue={minValue}
          maxValue={maxValue}
          onInput={(e) => {
            handleInput(e);
          }}
        />
      </div>
    </div>
  );
};

export default FilterYear;
