import React, {useEffect, useState} from 'react';
import HolySite from "/public/Holy_Site.webp"
import styled from "styled-components";
import ResearchedDistrictsItem from "../features/ResearchedDistricts/ResearchedDistricts.jsx";
import NewDistrict from "../features/NewDistrict/NewDistrict.jsx";
import {useSelector} from "react-redux";
import {selectAllDistricts} from "../features/NewDistrict/newDistrictSlice.js";
import MyDistrict from "../features/MyDistrict/MyDistrict.jsx";
import {
  selectCountOfResearchedDistricts,
  selectResearchedDistricts
} from "../features/ResearchedDistricts/researchedDistricts-slice.js";

const GridContainer = styled.div`
  display: flex;
`

export const DistrictsName = {
  HolySite: 'HolySite',
  Campus: 'Campus',
  Preserve: 'Preserve',
  GovernmentPlaza: 'GovernmentPlaza',
  TheaterSquare: 'TheaterSquare',
  Encampment: 'Encampment',
  CommercialHub: 'CommercialHub',
  Harbor: 'Harbor',
  DiplomaticQuarter: 'DiplomaticQuarter',
  IndustrialZone: 'IndustrialZone',
  WaterPark: 'WaterPark',
  Aerodrome: 'Aerodrome'
}

const DistrictImage = styled.img`
  max-width: 64px;

  &:hover {
    cursor: pointer;
  }

`

const ResearchedDistricts = styled.div`
  text-align: center;
  font-size: 24px;
  width: 324px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 10px;
`

const SetDistrict = styled.div`
  text-align: center;
  font-size: 24px;
  width: 324px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 10px;
`
const MyDistrictsList = styled.div`
  max-height: 250px;
  text-align: center;
  font-size: 24px;
  width: 324px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`


const Main = () => {
  const ResearchedDistrictsState = useSelector(selectResearchedDistricts)
  const [discountDistrictArray, setDiscountDistrictArray] = useState([]);

  const AllDistricts = useSelector(selectAllDistricts)
  for (const builtDistrictName in AllDistricts.builtDistrict.districts) {
    const builtDistrictCount = AllDistricts.builtDistrict.districts[builtDistrictName];
  }
  const builtDistricts = Object.entries(AllDistricts.builtDistrict.districts).map(([districtName, districtCount]) => (
    <div key={districtName}>
      <MyDistrict districtName={districtName} districtCount={districtCount}/>
    </div>
  ));
  const layDistricts = Object.entries(AllDistricts.layDistrict.districts).map(([districtName, districtCount]) => (
    <div key={districtName}>
      <MyDistrict districtName={districtName} districtCount={districtCount}/>
    </div>
  ));

  const researchedDistrictsCount = useSelector(selectCountOfResearchedDistricts)
  const builtDistrictsCount = AllDistricts.builtDistrict.count
  const layDistrictsCount = AllDistricts.layDistrict.count

  useEffect(() => {
    const tempArray = [];
    for (const key in AllDistricts.builtDistrict.districts) {
      const nameOfDistrict = `is${key}Researched`
      if (builtDistrictsCount >= researchedDistrictsCount)
        if (ResearchedDistrictsState[nameOfDistrict])
          if (builtDistrictsCount / researchedDistrictsCount > (AllDistricts.builtDistrict.districts[key] + AllDistricts.layDistrict.districts[key])) {
            tempArray.push(key)
          }
    }
    setDiscountDistrictArray(tempArray)
  }, [ResearchedDistrictsState, AllDistricts])

  /*
    const districtDiv = []

    useEffect(() => {
      districtDiv.push(discountDistrictArray.map(item => <div>{item}</div>))
    }, [discountDistrictArray])
  */


  /* const handleCalc = () => {
     const ruleOne = builtDistrictsCount >= researchedDistrictsCount
     const ruleTwo = (builtDistrictsCount / researchedDistrictsCount) >= (AllDistricts.builtDistrict.districts.Encampment + AllDistricts.layDistrict.districts.Encampment)
     console.log('Построенно районов: ' + builtDistrictsCount)
     console.log('Изучено районов: ' + researchedDistrictsCount)
     console.log('Построенно военников: ' + (AllDistricts.builtDistrict.districts.Encampment + AllDistricts.layDistrict.districts.Encampment))
     console.log(ruleTwo)
   }*/


  return (
    <>
      <GridContainer>
        <div>
          <ResearchedDistricts>
            <div>Изученные районы</div>
            <ResearchedDistrictsItem districtName={DistrictsName.HolySite}/>
            <ResearchedDistrictsItem districtName={DistrictsName.Campus}/>
            <ResearchedDistrictsItem districtName={DistrictsName.Preserve}/>
            <ResearchedDistrictsItem districtName={DistrictsName.Encampment}/>
            <ResearchedDistrictsItem districtName={DistrictsName.CommercialHub}/>
            <ResearchedDistrictsItem districtName={DistrictsName.TheaterSquare}/>
            <ResearchedDistrictsItem districtName={DistrictsName.Harbor}/>
            <ResearchedDistrictsItem districtName={DistrictsName.GovernmentPlaza}/>
            <ResearchedDistrictsItem districtName={DistrictsName.DiplomaticQuarter}/>
            <ResearchedDistrictsItem districtName={DistrictsName.IndustrialZone}/>
            <ResearchedDistrictsItem districtName={DistrictsName.WaterPark}/>
            <ResearchedDistrictsItem districtName={DistrictsName.Aerodrome}/>
          </ResearchedDistricts>
          <SetDistrict>
            <div>Добавить новый район</div>
            <NewDistrict districtName={DistrictsName.HolySite}/>
            <NewDistrict districtName={DistrictsName.Campus}/>
            <NewDistrict districtName={DistrictsName.Preserve}/>
            <NewDistrict districtName={DistrictsName.Encampment}/>
            <NewDistrict districtName={DistrictsName.CommercialHub}/>
            <NewDistrict districtName={DistrictsName.TheaterSquare}/>
            <NewDistrict districtName={DistrictsName.Harbor}/>
            <NewDistrict districtName={DistrictsName.GovernmentPlaza}/>
            <NewDistrict districtName={DistrictsName.DiplomaticQuarter}/>
            <NewDistrict districtName={DistrictsName.IndustrialZone}/>
            <NewDistrict districtName={DistrictsName.WaterPark}/>
            <NewDistrict districtName={DistrictsName.Aerodrome}/>
          </SetDistrict>
        </div>
        <MyDistrictsList>
          <div>Заложенные районы</div>
          {layDistricts}
        </MyDistrictsList>
        <MyDistrictsList>
          <div>Построенные районы</div>
          {builtDistricts}
        </MyDistrictsList>
        <MyDistrictsList>
          <div>Скидочные райончики</div>
          {discountDistrictArray.map((item, index) => <div>
              <MyDistrict key={index} districtName={item}/>
            </div>
          )}
        </MyDistrictsList>
      </GridContainer>
    </>

  );
};

export default Main;