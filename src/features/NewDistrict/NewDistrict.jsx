import React from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {selectResearchedDistricts} from "../ResearchedDistricts/researchedDistricts-slice.js";
import {districtImages} from "../ResearchedDistricts/ResearchedDistricts.jsx";
import {addBuiltDistrict, addLayDistrict, selectNewDistrictMenuState, toggleMenu} from "./newDistrictSlice.js";
import layIcon from "/public/brickwall.png"
import buildIcon from "/public/checked.png"


const DistrictImage = styled.img`
  max-width: 64px;

  &:hover {
    cursor: pointer;
  }
`


const NewDistrict = ({districtName}) => {

    const district = districtName
    const ResearchedDistrictsState = useSelector(selectResearchedDistricts)
    const showModal = useSelector(selectNewDistrictMenuState)
    const dispatch = useDispatch()
    const isResearched = `is${districtName}Researched`
    const imageName = ResearchedDistrictsState[isResearched] ? districtName : `Unresearched${districtName}`;
    const imagePath = districtImages[imageName];

    const handleMenuOpen = () => {
        dispatch(toggleMenu())
    };

    const addBuiltDistricts = (district) => {
            ResearchedDistrictsState[isResearched] && dispatch(addBuiltDistrict(district))
    }

    const addLayDistricts = (district) => {
          ResearchedDistrictsState[isResearched] && dispatch(addLayDistrict(district))
    }



    return (
      <div>
          <DistrictImage src={imagePath} alt={imageName} onClick={() => {
              handleMenuOpen()
          }
          }/>
            <img className={'actionIcons'} src={layIcon}  onClick={() => {
              addLayDistricts(districtName)
            }}/>
            <img className={'actionIcons'} src={buildIcon} onClick={() => {
              addBuiltDistricts(districtName)
            }
            }/>
      </div>
    );
};

export default NewDistrict;