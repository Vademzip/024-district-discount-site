import React, {useState} from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {changeDistrictResearch, selectResearchedDistricts} from "../ResearchedDistricts/researchedDistricts-slice.js";
import {districtImages} from "../ResearchedDistricts/ResearchedDistricts.jsx";
import {addBuiltDistrict, addLayDistrict} from "./MyDistrictSlice.js";

const DistrictImage = styled.img`
  max-width: 64px;

  &:hover {
    cursor: pointer;
  }
`


const MyDistrict = ({districtName, districtCount}) => {
    const ResearchedDistrictsState = useSelector(selectResearchedDistricts)
    const dispatch = useDispatch()
    const imagePath = districtImages[districtName];
    const [showModal, setShowModal] = useState(false);


    return (
        <>
            <DistrictImage src={imagePath} alt={districtName}/>
            <span>{districtCount}</span>
        </>
    );
};

export default MyDistrict;