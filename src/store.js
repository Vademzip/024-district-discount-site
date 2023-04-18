import { configureStore } from "@reduxjs/toolkit";
import {researchedDistrictsReducer} from "./features/ResearchedDistricts/researchedDistricts-slice.js";
import {NewDistrictReducer} from "./features/NewDistrict/newDistrictSlice.js";
import {addingDistrictReducer} from "./features/AddingDistricts/addingDistrictSlice.js";

export const store = configureStore({
    reducer : {
        researchedDistricts : researchedDistrictsReducer,
        NewDistrict : NewDistrictReducer,
        addingDistrict : addingDistrictReducer
    },
    devTools: true
})