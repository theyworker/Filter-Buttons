import React from "react";
import "./App.css";
import Filter from "./Filter";
import RangeSelector from './RangeSelector'

const App = () => {
    let values = [
        "Wi-Fi",
        "24/7 access",
        "A/C",
        "Parking",
        "Video Conferencing",
        "White Board",
        "Sound System"
    ]

    let filtersArray = [{
            label: "Duration",
            type: "SINGLE_SELECT",
            value: ["Daily", "Weekly", "Monthly"]
        },
            {
                label: "Amenties",
                type: "MULTIPLE_SELECT",
                value: [
                    "Wi-Fi",
                    "24/7 access",
                    "A/C",
                    "Parking",
                    "Video Conferencing",
                    "White Board",
                    "Sound System"
                ]
            }];

    const assignFilter = (buttonTitle, type, values) => {
        switch (type) {
            case "SINGLE_SELECT": 
            return <Filter values={values} MultiSelect={false} buttonTitle={buttonTitle}/>          
                break;

            case "MULTIPLE_SELECT":
            return <Filter values={values} buttonTitle={buttonTitle} MultiSelect/>           
                break;
        
            default:
                break;
        }
    }
    return (
        <>
           {/* {filtersArray.map((filter,index)=>assignFilter(filter.label, filter.type, filter.value))} */}
           <RangeSelector rangeMin={0} rangeMax={100} selectedMin={15}
           selectedMax={85} units="$"/>
        </>
    );
};

export default App;
