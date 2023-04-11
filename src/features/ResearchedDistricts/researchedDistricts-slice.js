import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    districts : {
        isHolySiteResearched : false,
        isCampusResearched : false,
        isPreserveResearched : false,
        isEncampmentResearched : false,
        isTheaterSquareResearched: false,
        isGovernmentPlazaResearched : false,
        isHarborResearched : false,
        isCommercialHubResearched : false,
        isDiplomaticQuarterResearched : false,
        isIndustrialZoneResearched : false,
        isWaterParkResearched: false,
        isAerodromeResearched : false,
    },
    count : 0
}


const researchedDistrictsSlice = createSlice({
    name : "@@ResearchedDistricts",
    initialState,
    reducers : {
        changeDistrictResearch : (state, action) =>{
            const districtName = `is${action.payload}Researched`
            if (state.districts[districtName]){
                state.districts[districtName] = false
                state.count--
            }else{
                state.districts[districtName] = true
                state.count++
            }
        }
    }
})

export const researchedDistrictsReducer = researchedDistrictsSlice.reducer

export const {changeDistrictResearch} = researchedDistrictsSlice.actions

export const selectResearchedDistricts = (state) => state.researchedDistricts.districts
export const selectCountOfResearchedDistricts = (state) => state.researchedDistricts.count
