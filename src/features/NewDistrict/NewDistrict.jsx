import React, {useState} from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {changeDistrictResearch, selectResearchedDistricts} from "../ResearchedDistricts/researchedDistricts-slice.js";
import {districtImages} from "../ResearchedDistricts/ResearchedDistricts.jsx";
import {addBuiltDistrict, addLayDistrict, selectNewDistrictMenuState, toggleMenu} from "./newDistrictSlice.js";

const DistrictImage = styled.img`
  max-width: 64px;

  &:hover {
    cursor: pointer;
  }
`

const NewDistrictMenu = styled.div`
  display: flex;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border: 1px solid black;

  & div {
    padding: 10px;
    outline: 1px solid black;
  }

  & div:hover {
    cursor: pointer;
  }

`
const NewDistrict = ({districtName}) => {
    console.log(districtName)
    const ResearchedDistrictsState = useSelector(selectResearchedDistricts)
    const showModal = useSelector(selectNewDistrictMenuState)
    const dispatch = useDispatch()
    const isResearched = `is${districtName}Researched`
    const imageName = ResearchedDistrictsState[isResearched] ? districtName : `Unresearched${districtName}`;
    const imagePath = districtImages[imageName];

    const handleMenuOpen = () => {
        dispatch(toggleMenu())
    };

    const addBuiltDistricts = (districtName) => {
        return () => {
            dispatch(addBuiltDistrict(districtName))
        }
    }

    const addLayDistricts = (districtName) => {
        return () => {
            dispatch(addLayDistrict(districtName))
        }
    }



    return (
        <>
            <DistrictImage src={imagePath} alt={imageName} onClick={() => {
                handleMenuOpen()
            }
            }/>
            {showModal && <NewDistrictMenu>
                <div onClick={addLayDistricts(districtName)}>Заложить</div>
                <div onClick={addBuiltDistricts(districtName)}>Достроить</div>
            </NewDistrictMenu>}
        </>
    );
};

export default NewDistrict;