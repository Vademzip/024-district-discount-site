import React from 'react';
import NewDistrict from "../features/NewDistrict/NewDistrict.jsx";
import {DistrictsName} from "../constants/constants.js";
import styled from "styled-components";
import {t} from "i18next";

const SetDistrict = styled.div`
  display: flex;
  text-align: center;
  font-size: 24px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 10px;
  @media (max-width: 700px) {
    flex-direction: column;
    align-content: center;
    width: auto;
  }
`
const SetDistrictsBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  @media (max-width: 900px) {
    justify-content: center
  }
`
const SetNewDistrictPanel = ({
                          governmentPlazaCount,
                          diplomaticQuarterCount
                        }) => {
  return (
    <div>
      <SetDistrict>
        <div style={{alignSelf: 'center', height: '100%'}}>{t('table_names.Add new district')}</div>
        <SetDistrictsBlock>
          <NewDistrict govPlazaCount={governmentPlazaCount} dipQuarterCount={diplomaticQuarterCount}
                       districtName={DistrictsName.HolySite}/>
          <NewDistrict govPlazaCount={governmentPlazaCount} dipQuarterCount={diplomaticQuarterCount}
                       districtName={DistrictsName.Campus}/>
          <NewDistrict govPlazaCount={governmentPlazaCount} dipQuarterCount={diplomaticQuarterCount}
                       districtName={DistrictsName.Preserve}/>
          <NewDistrict govPlazaCount={governmentPlazaCount} dipQuarterCount={diplomaticQuarterCount}
                       districtName={DistrictsName.Encampment}/>
          <NewDistrict govPlazaCount={governmentPlazaCount} dipQuarterCount={diplomaticQuarterCount}
                       districtName={DistrictsName.CommercialHub}/>
          <NewDistrict govPlazaCount={governmentPlazaCount} dipQuarterCount={diplomaticQuarterCount}
                       districtName={DistrictsName.EntertainmentComplex}/>
          <NewDistrict govPlazaCount={governmentPlazaCount} dipQuarterCount={diplomaticQuarterCount}
                       districtName={DistrictsName.TheaterSquare}/>
          <NewDistrict govPlazaCount={governmentPlazaCount} dipQuarterCount={diplomaticQuarterCount}
                       districtName={DistrictsName.Harbor}/>
          <NewDistrict govPlazaCount={governmentPlazaCount} dipQuarterCount={diplomaticQuarterCount}
                       districtName={DistrictsName.GovernmentPlaza}/>
          <NewDistrict govPlazaCount={governmentPlazaCount} dipQuarterCount={diplomaticQuarterCount}
                       districtName={DistrictsName.DiplomaticQuarter}/>
          <NewDistrict govPlazaCount={governmentPlazaCount} dipQuarterCount={diplomaticQuarterCount}
                       districtName={DistrictsName.IndustrialZone}/>
          <NewDistrict govPlazaCount={governmentPlazaCount} dipQuarterCount={diplomaticQuarterCount}
                       districtName={DistrictsName.WaterPark}/>
          <NewDistrict govPlazaCount={governmentPlazaCount} dipQuarterCount={diplomaticQuarterCount}
                       districtName={DistrictsName.Aerodrome}/>
        </SetDistrictsBlock>
      </SetDistrict>
    </div>
  );
};

export default SetNewDistrictPanel;