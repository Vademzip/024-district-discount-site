import React from 'react';
import HolySite from "/public/Holy_Site.webp"
import Campus from "/public/Campus.webp"
import Preserve from "/public/Preserve.webp"
import GovernmentPlaza from "/public/Government_Plaza.webp"
import Encampment from "/public/Encampment.webp"
import CommercialHub from "/public/Commercial_Hub.webp"
import Harbor from "/public/Harbor.webp"
import DiplomaticQuarter from "/public/Diplomatic_Quarter.webp"
import IndustrialZone from "/public/Industrial_Zone.webp"
import Aerodrome from "/public/Aerodrome.webp"

import UnresearchedHolySite from "/public/unresearchedHoly_Site.webp"
import UnresearchedCampus from "/public/unresearchedCampus.webp"
import UnresearchedPreserve from "/public/unresearchedPreserve.webp"
import UnresearchedGovernmentPlaza from "/public/unresearchedGovernment_Plaza.webp"
import UnresearchedEncampment from "/public/unresearchedEncampment.webp"
import UnresearchedCommercialHub from "/public/unresearchedCommercial_Hub.webp"
import UnresearchedHarbor from "/public/unresearchedHarbor.webp"
import UnresearchedDiplomaticQuarter from "/public/unresearchedDiplomatic_Quarter.webp"
import UnresearchedIndustrialZone from "/public/unresearchedIndustrial_Zone.webp"
import UnresearchedAerodrome from "/public/unresearchedAerodrome.webp"

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
        <DistrictImage src={UnresearchedHolySite}/>
        <DistrictImage src={Preserve}/>
        <DistrictImage src={GovernmentPlaza}/>
        <DistrictImage src={Campus}/>
        <DistrictImage src={Encampment}/>
        <DistrictImage src={UnresearchedCommercialHub}/>
        <DistrictImage src={Harbor}/>
        <DistrictImage src={DiplomaticQuarter}/>
        <DistrictImage src={UnresearchedIndustrialZone}/>
        <DistrictImage src={Aerodrome}/>
      </ResearchedDistricts>
    </div>
  );
};

export default Main;