import React, {useEffect} from 'react';
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
import EntertainmentComplex from "/public/Entertainment_Complex.webp"
import TheaterSquare from "/public/Theater_Square.webp"
import WaterPark from "/public/Water_Park.webp"
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
import UnresearchedEntertainmentComplex from "/public/unresearchedEntertainment_Complex.webp"
import UnresearchedTheaterSquare from "/public/unresearchedTheater_Square.webp"
import UnresearchedWaterPark from "/public/unresearchedWater_Park.webp"

import styled from "styled-components";
import {changeDistrictResearch, selectResearchedDistricts} from "./researchedDistricts-slice.js";
import {useSelector, useDispatch} from "react-redux";

export const districtImages = {
    "HolySite" : HolySite,
    "Campus" : Campus,
    "Preserve" : Preserve,
    "GovernmentPlaza" : GovernmentPlaza,
    "EntertainmentComplex" : EntertainmentComplex,
    "TheaterSquare" : TheaterSquare,
    "WaterPark" : WaterPark,
    "Encampment" : Encampment,
    "CommercialHub" : CommercialHub,
    "Harbor" : Harbor,
    "DiplomaticQuarter" : DiplomaticQuarter,
    "IndustrialZone" : IndustrialZone,
    "Aerodrome" : Aerodrome,
    "UnresearchedHolySite" : UnresearchedHolySite,
    "UnresearchedCampus" : UnresearchedCampus,
    "UnresearchedPreserve" : UnresearchedPreserve,
    "UnresearchedGovernmentPlaza" : UnresearchedGovernmentPlaza,
    "UnresearchedEncampment" : UnresearchedEncampment,
    "UnresearchedEntertainmentComplex" : UnresearchedEntertainmentComplex,
    "UnresearchedTheaterSquare" : UnresearchedTheaterSquare,
    "UnresearchedCommercialHub" : UnresearchedCommercialHub,
    "UnresearchedHarbor" : UnresearchedHarbor,
    "UnresearchedDiplomaticQuarter" : UnresearchedDiplomaticQuarter,
    "UnresearchedIndustrialZone" : UnresearchedIndustrialZone,
    "UnresearchedAerodrome" : UnresearchedAerodrome,
    "UnresearchedWaterPark" : UnresearchedWaterPark
}

const DistrictImage = styled.img`
  max-width: 64px;
  &:hover{
    cursor: pointer;
  }
`

const ResearchedDistrictsItem = ({districtName}) => {
    const ResearchedDistrictsState = useSelector(selectResearchedDistricts)

    const dispatch = useDispatch()
    const isResearched = `is${districtName}Researched`
    const imageName = ResearchedDistrictsState[isResearched] ? districtName : `Unresearched${districtName}`;
    const imagePath = districtImages[imageName];

    return (
        <DistrictImage src={imagePath} alt={imageName} onClick={() => {
            dispatch(changeDistrictResearch(districtName))
        }
        }/>
    );
};

export default ResearchedDistrictsItem;