import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {selectResearchedDistricts} from "../ResearchedDistricts/researchedDistricts-slice.js";
import {districtImages} from "../ResearchedDistricts/ResearchedDistricts.jsx";
import {
    addBuiltDistrict,
    addLayDistrict,
    selectDiplomaticQuarterCount,
    selectGovernmentPlazaCount,
} from "./newDistrictSlice.js";
import layIcon from "/public/brickwall.png"
import buildIcon from "/public/checked.png"
import {toast} from "react-toastify";
import {useDrag} from "react-dnd";
import {DistrictTypes} from "../../types/districtTypes.js";
import {addBuiltDistrictsFunc, addLayDistrictsFunc} from "../../components/main.jsx";


const DistrictImage = styled.img`
  max-width: 64px;

  &:hover {
    cursor: pointer;
  }
`

const AddNewDistrict = styled.div`
  position: absolute;
  display: ${props => props.open ? 'block' : 'none'};
  transform: translateX(-25%);
`
const NewDistrict = ({districtName, govPlazaCount, dipQuarterCount}) => {

    const [{isDragging}, dragRef] = useDrag(() => ({
            type: 'newDistrict',
            item: {districtName, type : 'newDistrict'},
            collect: monitor => (
                {
                    isDragging: !!monitor.isDragging()
                }
            )
        })
    )


    const ResearchedDistrictsState = useSelector(selectResearchedDistricts)
    const menuRef = useRef(null)
    const dispatch = useDispatch()
    const isResearched = `is${districtName}Researched`
    const imageName = ResearchedDistrictsState[isResearched] ? districtName : `Unresearched${districtName}`;
    const imagePath = districtImages[imageName];
    const [openMenu, setOpenMenu] = useState(false)

    const useOnClickOutside = (ref, handler) => {
        useEffect(() => {
            const listener = event => {
                if (!ref.current || ref.current.contains(event.target)) {
                    return;
                }
                handler(event);
            };
            document.addEventListener('mousedown', listener);
            return () => {
                document.removeEventListener('mousedown', listener);
            };
        }, [ref, handler]);
    };
    useOnClickOutside(menuRef, () => {
            if (openMenu)
                setOpenMenu(false)
        }
    )


    return (
        <>
            <div>
                <DistrictImage ref={dragRef} src={imagePath} alt={imageName} onClick={() => {
                    setOpenMenu(!openMenu)
                }
                }/>
                <AddNewDistrict open={openMenu} ref={menuRef}>
                    <img className={'actionIcons'} src={layIcon} onClick={() => {
                        addLayDistrictsFunc(districtName, govPlazaCount,dipQuarterCount, ResearchedDistrictsState, dispatch)
                    }}/>
                    <img className={'actionIcons'} src={buildIcon} onClick={() => {
                        addBuiltDistrictsFunc(districtName, govPlazaCount,dipQuarterCount, ResearchedDistrictsState, dispatch)
                    }
                    }/>
                </AddNewDistrict>
            </div>
        </>
    );
};

export default NewDistrict;