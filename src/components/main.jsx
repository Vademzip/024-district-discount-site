import React from 'react';
import HolySite from "/Holy_Site.webp"
import Campus from "/public/Campus.webp"
import Preserve from "/public/Preserve.webp"
import GovernmentPlaza from "/public/Government_Plaza.webp"
import Encampment from "/public/Encampment.webp"
import CommercialHub from "/public/Commercial_Hub.webp"
import Harbor from "/public/Harbor.webp"
import DiplomaticQuarter from "/public/Diplomatic_Quarter.webp"
import IndustrialZone from "/public/Industrial_Zone.webp"
import Aerodrome from "/public/Aerodrome.webp"
import styled from "styled-components";

const DistrictImage = styled.img`
  max-width: 64px;
`

const ResearchedDistricts = styled.div`
  text-align: center;
  font-size: 24px;
  width: 324px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 10px;
`


const Main = () => {
  return (
    <div>
      <ResearchedDistricts>
        <div>Изученные районы</div>
        <DistrictImage src={HolySite}/>
        <DistrictImage src={Preserve}/>
        <DistrictImage src={GovernmentPlaza}/>
        <DistrictImage src={Campus}/>
        <DistrictImage src={Encampment}/>
        <DistrictImage src={CommercialHub}/>
        <DistrictImage src={Harbor}/>
        <DistrictImage src={DiplomaticQuarter}/>
        <DistrictImage src={IndustrialZone}/>
        <DistrictImage src={Aerodrome}/>
      </ResearchedDistricts>
    </div>
  );
};

export default Main;