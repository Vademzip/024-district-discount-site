import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {changeDistrictResearch, selectResearchedDistricts} from "../ResearchedDistricts/researchedDistricts-slice.js";
import {districtImages} from "../ResearchedDistricts/ResearchedDistricts.jsx";
import {addBuiltDistrict, addLayDistrict} from "./MyDistrictSlice.js";
import {useDrag} from "react-dnd";

const DistrictImage = styled.img`
  max-width: 64px;

  &:hover {
    cursor: pointer;
  }
`


const MyLayDistrict = ({districtName, districtCount, showTrashBin}) => {

    const [{isDragging}, dragRef] = useDrag(() => ({
            type: 'layDistrictMove',
            item: {districtName, districtCount, type : 'layDistrictMove'},
            collect: monitor => (
                {
                    isDragging: !!monitor.isDragging()
                }
            )
        })
    )

    useEffect(() => {
        if (isDragging) {
            showTrashBin(true);
        } else {
            showTrashBin(false);
        }
    }, [isDragging]);

    const ResearchedDistrictsState = useSelector(selectResearchedDistricts)
    const dispatch = useDispatch()
    const imagePath = districtImages[districtName];
    const [showModal, setShowModal] = useState(false);


    return (
        <>
            <DistrictImage ref={dragRef} src={imagePath} alt={districtName}/>
            <span>{districtCount}</span>
        </>
    );
};

export default MyLayDistrict;