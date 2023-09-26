import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {selectResearchedDistricts} from "../ResearchedDistricts/researchedDistricts-slice.js";
import {districtImages} from "../ResearchedDistricts/ResearchedDistrictsItem.jsx";
import layIcon from "/public/brickwall.png"
import buildIcon from "/public/checked.png"
import {useDrag} from "react-dnd";
import {addBuiltDistrictsFunc, addLayDistrictsFunc} from "../../components/HomePage.jsx";
import {useTranslation} from "react-i18next";


export const useOnClickOutside = (ref, ref2, handler) => {
    useEffect(() => {
        const listener = event => {
            if (!ref.current || ref.current.contains(event.target)
                || !ref2.current || ref2.current.contains(event.target)) {
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

const DistrictImage = styled.img`
  max-width: 64px;

  &:hover {
    cursor: pointer;
  }
`

export const AddNewDistrict = styled.div`
  position: absolute;
  z-index: 4;
  display: ${props => props.open ? 'block' : 'none'};
  transform: translateX(-25%);
`
const NewDistrict = ({districtName, govPlazaCount, dipQuarterCount}) => {

    const [{isDragging}, dragRef] = useDrag(() => ({
            type: 'newDistrict',
            item: {districtName, type: 'newDistrict'},
            collect: monitor => (
                {
                    isDragging: !!monitor.isDragging()
                }
            )
        })
    )

    const {t, i18n} = useTranslation();
    const ResearchedDistrictsState = useSelector(selectResearchedDistricts)
    const menuRef = useRef(null)
    const districtImageRef = useRef(null)
    const dispatch = useDispatch()
    const isResearched = `is${districtName}Researched`
    const imageName = ResearchedDistrictsState[isResearched] ? districtName : `Unresearched${districtName}`;
    const imagePath = districtImages[imageName];
    const [openMenu, setOpenMenu] = useState(false)


    useOnClickOutside(menuRef, districtImageRef, () => {
            if (openMenu)
                setOpenMenu(!openMenu)
        }
    )


    return (
        <>
            <div>
                <div ref={districtImageRef}>
                    <DistrictImage ref={dragRef} src={imagePath} alt={imageName} onClick={() => {
                        setOpenMenu(!openMenu)
                    }
                    }/>
                </div>
                <AddNewDistrict open={openMenu} ref={menuRef}>
                    <img className={'actionIcons'} src={layIcon} onClick={() => {
                        addLayDistrictsFunc(districtName, govPlazaCount, dipQuarterCount, ResearchedDistrictsState, dispatch, t)
                    }} alt={'layDistrict'}/>
                    <img className={'actionIcons'} src={buildIcon} onClick={() => {
                        addBuiltDistrictsFunc(districtName, govPlazaCount, dipQuarterCount, ResearchedDistrictsState, dispatch, t)
                    }
                    } alt={'builtDistrict'}/>
                </AddNewDistrict>
            </div>
        </>
    );
};

export default NewDistrict;