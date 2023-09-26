import React from 'react';
import styled from "styled-components";
import ResearchedDistrictsItem from "../features/ResearchedDistricts/ResearchedDistrictsItem.jsx";
import {DistrictsName} from "../constants/constants.js";
import {t} from "i18next";

export const ResearchedDistricts = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 250px;
  height: 100%;
  text-align: center;
  font-size: 24px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 10px;
  & img {
    height: 64px;
  }
  @media (max-width: 900px) {
    width: 100%;
    height: auto;
  }

  & > div:first-child {
    width: 100%;
  }
`


const ResearchedDistrictPanel = () => {
  return (
    <div>
      <ResearchedDistricts>
        <div>{t('table_names.Researched districts')}</div>
        <ResearchedDistrictsItem districtName={DistrictsName.HolySite}/>
        <ResearchedDistrictsItem districtName={DistrictsName.Campus}/>
        <ResearchedDistrictsItem districtName={DistrictsName.Preserve}/>
        <ResearchedDistrictsItem districtName={DistrictsName.Encampment}/>
        <ResearchedDistrictsItem districtName={DistrictsName.CommercialHub}/>
        <ResearchedDistrictsItem districtName={DistrictsName.EntertainmentComplex}/>
        <ResearchedDistrictsItem districtName={DistrictsName.TheaterSquare}/>
        <ResearchedDistrictsItem districtName={DistrictsName.Harbor}/>
        <ResearchedDistrictsItem districtName={DistrictsName.GovernmentPlaza}/>
        <ResearchedDistrictsItem districtName={DistrictsName.DiplomaticQuarter}/>
        <ResearchedDistrictsItem districtName={DistrictsName.IndustrialZone}/>
        <ResearchedDistrictsItem districtName={DistrictsName.WaterPark}/>
        <ResearchedDistrictsItem districtName={DistrictsName.Aerodrome}/>
      </ResearchedDistricts>
    </div>
  );
};

export default ResearchedDistrictPanel;