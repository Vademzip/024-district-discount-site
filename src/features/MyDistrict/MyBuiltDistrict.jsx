import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {selectResearchedDistricts} from "../ResearchedDistricts/researchedDistricts-slice.js";
import {districtImages} from "../ResearchedDistricts/ResearchedDistricts.jsx";
import {useDrag} from "react-dnd";
import {
  addLayDistrict,
  deleteBuiltDistrict,
  selectShowTrashBin,
  toggleTrashBin
} from "../NewDistrict/newDistrictSlice.js";
import {AddNewDistrict, useOnClickOutside} from "../NewDistrict/NewDistrict.jsx";
import deleteIcon from "../../../public/DeleteIcon.png";
import layIcon from "/public/brickwall.png"
import {toast} from "react-toastify";

const DistrictImage = styled.img`
  max-width: 64px;

  &:hover {
    cursor: pointer;
  }
`


const MyBuiltDistrict = ({districtName, districtCount}) => {
  const showTrashBin = useSelector(selectShowTrashBin)
  const [openBuiltMenu, setOpenBuiltMenu] = useState(false)
  const districtImageRef = useRef(null)
  const builtMenuRef = useRef(null)
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

  useOnClickOutside(builtMenuRef, districtImageRef, () => {
    if (openBuiltMenu)
      setOpenBuiltMenu(!openBuiltMenu)
  })

  const ResearchedDistrictsState = useSelector(selectResearchedDistricts)
  const dispatch = useDispatch()
  const imagePath = districtImages[districtName];

  const moveBuiltDistrictToTrashBin = () => {
    if (districtCount) {
      dispatch(deleteBuiltDistrict(districtName))
    } else {
      toast.error('🦄 Вы ещё не построили этот район...', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  const moveBuiltDistrictToLayDistrict = () => {
    if (districtCount) {
      dispatch(addLayDistrict(districtName))
      dispatch(deleteBuiltDistrict(districtName))
    } else {
      toast.error('🦄 Вы ещё не построили этот район...', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  return (
    <>
      <div ref={districtImageRef}>
        <DistrictImage ref={dragRef} src={imagePath} alt={districtName} onClick={() => {
          setOpenBuiltMenu(!openBuiltMenu)
        }
        }/>
      </div>
      <span>{districtCount}</span>
      <AddNewDistrict open={openBuiltMenu} ref={builtMenuRef}>
        <img className={'actionIcons'} src={deleteIcon} onClick={() => {
          moveBuiltDistrictToTrashBin()
        }
        } alt={'builtDistrict'}/>
        <img className={'actionIcons'} src={layIcon} onClick={() => {
          moveBuiltDistrictToLayDistrict()
        }} alt={'layDistrict'}/>

      </AddNewDistrict>
    </>
  );
};

export default MyBuiltDistrict;