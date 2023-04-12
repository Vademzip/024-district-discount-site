import React from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {selectResearchedDistricts} from "../ResearchedDistricts/researchedDistricts-slice.js";
import {districtImages} from "../ResearchedDistricts/ResearchedDistricts.jsx";
import {
  addBuiltDistrict,
  addLayDistrict,
  selectDiplomaticQuarterCount,
  selectGovernmentPlazaCount,
  selectNewDistrictMenuState,
  toggleMenu
} from "./newDistrictSlice.js";
import layIcon from "/public/brickwall.png"
import buildIcon from "/public/checked.png"
import {toast} from "react-toastify";


const DistrictImage = styled.img`
  max-width: 64px;

  &:hover {
    cursor: pointer;
  }
`




const NewDistrict = ({districtName}) => {

  const district = districtName
  const govPlazaCount = useSelector(selectGovernmentPlazaCount)
  const dipQuarterCount = useSelector(selectDiplomaticQuarterCount)
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
    if (district === 'GovernmentPlaza') {
      if (govPlazaCount > 0){
        toast.error('🦄 Вы уже заложили или построили правительственную площадь..', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        return
      }
    }
    if (district === 'DiplomaticQuarter') {
      if (dipQuarterCount > 0){
        toast.error('🦄 Вы уже заложили или построили дипломатический квартал..', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        return
      }
    }
    ResearchedDistrictsState[isResearched]
      ? dispatch(addBuiltDistrict(district))
      : toast.error('🦄 Вы ещё не открыли данный район..', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
  }

  const addLayDistricts = (district) => {
    if (district === 'GovernmentPlaza') {
      if (govPlazaCount > 0){
        toast.error('🦄 Вы уже заложили или построили правительственную площадь..', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        return
      }
    }
    if (district === 'DiplomaticQuarter') {
      if (dipQuarterCount > 0){
        toast.error('🦄 Вы уже заложили или построили дипломатический квартал..', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        return
      }
    }
    ResearchedDistrictsState[isResearched]
      ? dispatch(addLayDistrict(district))
      : toast.error('🦄 Вы ещё не открыли данный район..', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
  }


  return (
    <div>
      <DistrictImage src={imagePath} alt={imageName} onClick={() => {
        handleMenuOpen()
      }
      }/>
      <img className={'actionIcons'} src={layIcon} onClick={() => {
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