import React from 'react';
import styled from "styled-components";
import {addBuiltDistrict, addLayDistrict} from "./newDistrictSlice.js";
import {useDispatch} from "react-redux";


const NewDistrictMenuComponent = styled.div`
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


const NewDistrictMenu = ({districtName}) => {
    const dispatch = useDispatch()

    const addBuiltDistricts = (districtName) => {
        dispatch(addBuiltDistrict(districtName))
    }

    const addLayDistricts = (districtName) => {
        dispatch(addLayDistrict(districtName))
    }

    return (
        <div>
            <NewDistrictMenuComponent>
                <div onClick={() => {
                    addLayDistricts(districtName)
                }}>Заложить</div>
                <div onClick={() => {
                    addBuiltDistricts(districtName)
                }}>Достроить</div>
            </NewDistrictMenuComponent>
        </div>
    );
};

export default NewDistrictMenu;