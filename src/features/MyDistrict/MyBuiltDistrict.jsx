import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {changeDistrictResearch, selectResearchedDistricts} from "../ResearchedDistricts/researchedDistricts-slice.js";
import {districtImages} from "../ResearchedDistricts/ResearchedDistricts.jsx";
import {useDrag} from "react-dnd";
import {selectShowTrashBin, toggleTrashBin} from "../NewDistrict/newDistrictSlice.js";

const DistrictImage = styled.img`
  max-width: 64px;

  &:hover {
    cursor: pointer;
  }
`


const MyBuiltDistrict = ({districtName, districtCount}) => {
    const showTrashBin = useSelector(selectShowTrashBin)
    const [{isDragging}, dragRef] = useDrag(() => ({
            type: 'builtDistrictMove',
            item: {districtName, districtCount, type: 'builtDistrictMove'},
            collect: monitor => (
                {
                    isDragging: !!monitor.isDragging()
                }
            )
        })
    )

    useEffect(() => {
        if (isDragging) {
            dispatch(toggleTrashBin(true));
        } else {
            dispatch(toggleTrashBin(false));
        }
    }, [isDragging]);

    const ResearchedDistrictsState = useSelector(selectResearchedDistricts)
    const dispatch = useDispatch()
    const imagePath = districtImages[districtName];

    return (
        <>
            <DistrictImage ref={dragRef} src={imagePath} alt={districtName}/>
            <span>{districtCount}</span>
        </>
    );
};

export default MyBuiltDistrict;