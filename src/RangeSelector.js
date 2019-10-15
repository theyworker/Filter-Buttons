import React, { useState } from "react";
import { Slider, Switch } from "antd";
import "antd/dist/antd.css";
import { Button, TextField } from "react-md";

const RangeSelector = ({
  rangeMin,
  rangeMax,
  selectedMin,
  selectedMax,
  units,
  callback
}) => {
  const [min, setMin] = useState(selectedMin);
  const [max, setMax] = useState(selectedMax);

  const defaultVal = [min, max];

  const handleChange = x => {
    if (validate(x)) {
      setMin(x[0]);
      setMax(x[1]);
    }
  };
  const onMinChange = val => {
    if (val >= rangeMin && val <= max) {
      setMin(Number(val));
    }
  };

  const onMaxChange = val => {
    if (val <= rangeMax && val >= min) {
      setMax(Number(val));
    }
  };

  const validate = values => {
    let tempmin = values[0];
    let tempmax = values[1];

    return tempmin < tempmax && tempmin >= rangeMin && tempmax <= rangeMax;
  };

  const afterChangeHandler = (val) => {
    callback(val)
  }

  return (
    <div>
      <Slider
        range
        min={rangeMin}
        max={rangeMax}
        defaultValue={defaultVal}
        onAfterChange={afterChangeHandler}
        value={defaultVal}
        onChange={handleChange}
      />
      <TextField
        placeholder="Minimum"
        leftIcon={<p>{units}</p>}
        defaultValue={min}
        value={min}
        onChange={onMinChange}
        type="number"
        className="md-cell md-cell--bottom"
      />
      <TextField
        placeholder="Maximum"
        defaultValue={max}
        leftIcon={<p>{units}</p>}
        value={max}
        onChange={onMaxChange}
        type="number"
        className="md-cell md-cell--bottom"
      />
      <Button>Clear All</Button>
      <Button>Apply</Button>
    </div>
  );
};

export default RangeSelector;
