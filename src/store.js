import { configureStore } from "@reduxjs/toolkit";
import {researchedDistrictsReducer} from "./features/ResearchedDistricts/researchedDistricts-slice.js";
import {NewDistrictReducer} from "./features/NewDistrict/newDistrictSlice.js";

export const store = configureStore({
    reducer : {
        researchedDistricts : researchedDistrictsReducer,
        NewDistrict : NewDistrictReducer
    },
    devTools: true
})