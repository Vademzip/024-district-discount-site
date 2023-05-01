// import {createSlice} from "@reduxjs/toolkit";
// import {useState} from "react";
//
// const initialState = {
//     builtDistrict : {
//         districts : {
//             builtHolySiteCount : 0,
//             builtCampusCount : 0,
//             builtPreserveCount : 0,
//             builtGovernmentPlazaCount : 0,
//             builtEncampmentCount : 0,
//             builtCommercialHubCount : 0,
//             builtHarborCount : 0,
//             builtDiplomaticQuarterCount : 0,
//             builtIndustrialZoneCount : 0,
//             builtAerodromeCount : 0,
//         },
//         count : 0
//     },
//     layDistrict : {
//         districts : {
//             layHolySiteCount : 0,
//             layCampusCount : 0,
//             layPreserveCount : 0,
//             layGovernmentPlazaCount : 0,
//             layEncampmentCount : 0,
//             layCommercialHubCount : 0,
//             layHarborCount : 0,
//             layDiplomaticQuarterCount : 0,
//             layIndustrialZoneCount : 0,
//             layAerodromeCount : 0,
//         },
//         count : 0
//     },
// }
//
// const MyDistrictSlice = createSlice({
//     name: 'NewDistrict',
//     initialState,
//     reducers : {
//         addBuiltDistrict : (state, action) => {
//             const districtName = `built${action.payload}Count`
//             state.builtDistrict.districts[districtName]++;
//             state.builtDistrict.count++
//         },
//         addLayDistrict : (state, action) => {
//
//             const districtName = `lay${action.payload}Count`
//             state.layDistrict.districts[districtName]++;
//             state.layDistrict.count++
//         }
//     }
// })
//
// export const NewDistrictReducer = MyDistrictSlice.reducer
//
// export const {addBuiltDistrict, addLayDistrict,deleteBuiltDistrict,deleteLayDistrict} = MyDistrictSlice.actions
// // export const selectBuiltDistrictCount = (state) => state.researchedDistricts.builtDistrict.count
// // export const selectLayDistrictCount = (state) => state.researchedDistricts.layDistrict.count
// // export const selectResearchedDistricts = (state) => state.researchedDistricts.districts