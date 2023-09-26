import React, {useCallback} from 'react';
import styled from "styled-components";
import MyBuiltDistrict from "../features/MyDistrict/MyBuiltDistrict.jsx";
import MyLayDistrict from "../features/MyDistrict/MyLayDistrict.jsx";
import {useDrop} from "react-dnd";
import {addBuiltDistrictsFunc, addLayDistrictsFunc} from "./HomePage.jsx";
import {t} from "i18next";
import {useDispatch} from "react-redux";
import {
  addBuiltDistrict,
  addLayDistrict,
  deleteBuiltDistrict,
  deleteLayDistrict
} from "../features/NewDistrict/newDistrictSlice.js";
import {toast} from "react-toastify";

const MyDistrictsList = styled.div`
  text-align: center;
  font-size: 24px;
  width: 324px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 900px) {
    width: auto;
    height: auto;
  }

  & > div:first-child {
    width: 100%;

`
const MyDistrictsBlock = ({
                            AllDistricts,
                            governmentPlazaCount,
                            diplomaticQuarterCount,
                            ResearchedDistrictsState
                          }) => {

  const builtDistricts = Object.entries(AllDistricts.builtDistrict.districts).map(([districtName, districtCount]) => (

    <div key={districtName}>
      <MyBuiltDistrict districtName={districtName} districtCount={districtCount}/>
    </div>
  ));
  const layDistricts = Object.entries(AllDistricts.layDistrict.districts).map(([districtName, districtCount]) => (
    <div key={districtName}>
      <MyLayDistrict districtName={districtName} districtCount={districtCount}/>
    </div>
  ));
  const dispatch = useDispatch()
  const districtCount = useCallback((isLayDistrict, districtName) => {
      if (isLayDistrict)
        return AllDistricts.layDistrict.districts[districtName]
      else
        return AllDistricts.builtDistrict.districts[districtName]
  },[AllDistricts])
  const moveLayDistrictToBuiltDistrict = (district, dispatch) => {
    if (districtCount(true, district)) {
      dispatch(addBuiltDistrict(district))
      dispatch(deleteLayDistrict(district))
    } else {
      toast.error(`${t('toast_notification.not_layed_district')}`, {
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

  const moveBuiltDistrictToLayDistrict = (district, dispatch) => {
    if (districtCount(false, district)) {
      dispatch(addLayDistrict(district))
      dispatch(deleteBuiltDistrict(district))
    } else {
      toast.error(`${t('toast_notification.not_finished_district')}`, {
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


  const [{isOverLayDistrict}, layDistrictDropRef] = useDrop({
    accept: ['newDistrict', 'builtDistrictMove'],
    drop: ({districtName, type, districtCount}) => {
      if (type === 'newDistrict')
        addLayDistrictsFunc(districtName, governmentPlazaCount, diplomaticQuarterCount, ResearchedDistrictsState, dispatch, t)
      if (type === "builtDistrictMove")
        moveBuiltDistrictToLayDistrict(districtName, dispatch, districtCount)
    },
    collect: (monitor) => ({
      isOverLayDistrict: monitor.isOver()
    })
  })

  const [{isOverBuiltDistrict}, builtDistrictDropRef] = useDrop({
    accept: ['newDistrict', 'layDistrictMove'],
    drop: ({districtName, type}) => {
      if (type === 'newDistrict')
        addBuiltDistrictsFunc(districtName, governmentPlazaCount, diplomaticQuarterCount, ResearchedDistrictsState, dispatch, t)
      if (type === 'layDistrictMove')
        moveLayDistrictToBuiltDistrict(districtName, dispatch)
    },
    collect: (monitor) => ({
      isOverBuiltDistrict: monitor.isOver()
    })
  })

  return (
    <div className={'myDistrict'}>
      <MyDistrictsList ref={layDistrictDropRef}
                       className={`${isOverLayDistrict ? 'activeCategory' : ''}`}>
        <div>{t('table_names.Unfinished districts')}</div>
        {layDistricts}
      </MyDistrictsList>
      <MyDistrictsList ref={builtDistrictDropRef}
                       className={`${isOverBuiltDistrict ? 'activeCategory' : ''}`}>
        <div>{t('table_names.Built districts')}</div>
        {builtDistricts}
      </MyDistrictsList>
    </div>
  );
};

export default MyDistrictsBlock;