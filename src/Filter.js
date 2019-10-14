import React, { useState } from 'react';
import { MenuButton, Layover } from 'react-md';
import Selector from './Selector';

const Filter = () => {
    let values = ['Wi-Fi', '24/7 access', 'A/C', 'Parking', 'Video Conferencing','White Board', 'Sound System']
    let MultiSelect = true;

    const [buttonName, setButtonName ] = useState('Fucking Button');
    const [filterSelected, setFilterSelected ] = useState(MultiSelect ? Array(values.length).fill(false) : 0 );

    const changeButtonName = (newName) => {
        setButtonName(newName);
    } 

    const onFilterChange = () => {

    }

    const filterItem = <Selector isMultiSelect={MultiSelect} values={values} callBack={(x) => console.log(x)} title="Testing" buttonName={changeButtonName} selectedArray={filterSelected}/>
    return (<div style={{ textAlign: "center" }}>
        <MenuButton
            id="menu-button-1"
            className="devaka"
            raised
            secondary
            menuItems={filterItem}
            anchor={{
                x: Layover.HorizontalAnchors.INNER_RIGHT,
                y: Layover.HorizontalAnchors.OVERLAP
            }}
            children={<h4>{buttonName}</h4>}
        />
    </div>)
}

export default Filter;