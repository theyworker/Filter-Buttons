import React, { useState } from "react";
import { MenuButton, Layover, Button } from "react-md";
import Selector from "./Selector";

const Filter = ({ values, MultiSelect, buttonTitle }) => {
  const [buttonName, setButtonName] = useState(buttonTitle);
  const [filterSelected, setFilterSelected] = useState(
    MultiSelect ? Array(values.length).fill(false) : 0
  );

  const changeButtonName = newName => {
    setButtonName(newName);
  };

  const onFilterChange = newVal => {
    setFilterSelected(newVal);
  };

  const filterItem = (
    <>
      <Selector
        isMultiSelect={MultiSelect}
        values={values}
        callBack={onFilterChange}
        title="Testing"
        buttonName={changeButtonName}
        selectedArray={filterSelected}
      />{" "}
      <Button>Clear All</Button>
      <Button>Apply</Button>
    </>
  );
  return (
    <div style={{ textAlign: "center" }}>
      <MenuButton
        id="menu-button-1"
        className="devaka"
        raised
        secondary
        menuItems={filterItem}
        anchor={{
          x: Layover.HorizontalAnchors.CENTER,
          y: Layover.VerticalAnchors.BOTTOM
        }}
        children={<h4>{buttonName}</h4>}
      />
    </div>
  );
};

export default Filter;
