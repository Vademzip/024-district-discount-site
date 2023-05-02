import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {selectResearchedDistricts} from "../ResearchedDistricts/researchedDistricts-slice.js";
import {districtImages} from "../ResearchedDistricts/ResearchedDistricts.jsx";
import {useDrag} from "react-dnd";
import {
  addBuiltDistrict,
  deleteBuiltDistrict,
  deleteLayDistrict,
  selectShowTrashBin,
  toggleTrashBin
} from "../NewDistrict/newDistrictSlice.js";
import {AddNewDistrict, useOnClickOutside} from "../NewDistrict/NewDistrict.jsx";
import deleteIcon from "/public/DeleteIcon.png"
import buildIcon from "../../../public/checked.png";
import {toast} from "react-toastify";

const DistrictImage = styled.img`
  max-width: 64px;

  &:hover {
    cursor: pointer;
  }
`


const MyLayDistrict = ({districtName, districtCount}) => {
  const showTrashBin = useSelector(selectShowTrashBin)
  const [openLayMenu, setOpenLayMenu] = useState(false)
  const districtImageRef = useRef(null)
  const layMenuRef = useRef(null)
  const [{isDragging}, dragRef] = useDrag(() => ({
      type: 'layDistrictMove',
      item: {districtName, districtCount, type: 'layDistrictMove'},
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

  useOnClickOutside(layMenuRef, districtImageRef, () => {
    if (openLayMenu)
      setOpenLayMenu(!openLayMenu)
  })

  const ResearchedDistrictsState = useSelector(selectResearchedDistricts)
  const dispatch = useDispatch()
  const imagePath = districtImages[districtName];
  const [showModal, setShowModal] = useState(false);

  const moveLayDistrictToTrashBin = () => {
    if (districtCount) {
      dispatch(deleteLayDistrict(districtName))
    } else {
      toast.error('🦄 Вы ещё не заложили этот район...', {
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

  const moveLayDistrictToBuiltDistrict = () => {
    if (districtCount) {
      dispatch(addBuiltDistrict(districtName))
      dispatch(deleteLayDistrict(districtName))
    } else {
      toast.error('🦄 Вы ещё не заложили этот район...', {
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
          setOpenLayMenu(!openLayMenu)
        }}/>
      </div>
      <span>{districtCount}</span>
      <AddNewDistrict open={openLayMenu} ref={layMenuRef}>
        <img className={'actionIcons'} src={deleteIcon} onClick={() => {
          moveLayDistrictToTrashBin()
        }} alt={'layDistrict'}/>
        <img className={'actionIcons'} src={buildIcon} onClick={() => {
          moveLayDistrictToBuiltDistrict()
        }
        } alt={'builtDistrict'}/>
      </AddNewDistrict>
    </>
  );
};

export default MyLayDistrict;