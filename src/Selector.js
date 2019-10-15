import React, { useState } from 'react';
import { Button } from 'react-md';
import PropTypes from 'prop-types';

const Selector = ({
    title, isMultiSelect, values, callBack, selectedArray , selectedValue , buttonName
}) => {
    const [selected, setSelected] = useState(
        isMultiSelect ? 
        selectedArray : selectedValue
    );
    
    const generateButtons = (val, index) => {
        if (isMultiSelect) {
            return selected[index] ? (
                <Button primary flat onClick={()=> onChange(index)} key={index}>
                    {val}
                </Button>
            ) : (
                    <Button secondary flat onClick={()=> onChange(index)} key={index}>
                        {val}
                    </Button>
                );
        }
        return index === selected ? (
            <Button primary flat onClick={() => onChange(index)} key={index}>
                {val}
            </Button>
        ) : (
                <Button flat onClick={() => onChange(index)} key={index}>
                    {val}
                </Button>
            );

    };
    const onChange = (index) => {
        if (isMultiSelect) {
            const temp = selected;
            temp[index] = !temp[index];
            setSelected([...temp]);
            console.log(selected);
            
            buttonName(`${values[index]},...`)
        } else {
            setSelected(index);
            buttonName(values[index])
        }
        callBack(selected);
    };

    return <div>
        <h2>{title}</h2>
        {values.map((val, index) => generateButtons(val, index))}
    </div>;
};

Selector.prototype = {
    isMultiSelect: PropTypes.bool,
    values: PropTypes.array,
    callBack: PropTypes.func,
};

export default Selector;
