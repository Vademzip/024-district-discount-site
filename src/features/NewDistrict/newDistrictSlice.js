import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    builtDistrict : {
        districts : {
            HolySite : 0,
            Campus : 0,
            Preserve : 0,
            GovernmentPlaza : 0,
            Encampment : 0,
            TheaterSquare : 0,
            CommercialHub : 0,
            Harbor : 0,
            DiplomaticQuarter : 0,
            IndustrialZone : 0,
            WaterPark : 0,
            Aerodrome : 0,
        },
        count : 0
    },
    layDistrict : {
        districts : {
            HolySite : 0,
            Campus : 0,
            Preserve : 0,
            GovernmentPlaza : 0,
            Encampment : 0,
            CommercialHub : 0,
            TheaterSquare : 0,
            Harbor : 0,
            DiplomaticQuarter : 0,
            IndustrialZone : 0,
            WaterPark : 0,
            Aerodrome : 0,
        },
        count : 0
    },
    newDistrictMenuOpen : false
}

const NewDistrictSlice = createSlice({
    name: 'NewDistrict',
    initialState,
    reducers : {
        addBuiltDistrict : (state, action) => {
            state.builtDistrict.districts[action.payload]++;
            state.builtDistrict.count++
        },
        addLayDistrict : (state, action) => {
            state.layDistrict.districts[action.payload]++;
            state.layDistrict.count++
        },
        toggleMenu : state => {
            state.newDistrictMenuOpen = !state.newDistrictMenuOpen
        }
    }
})

export const NewDistrictReducer = NewDistrictSlice.reducer

export const {addBuiltDistrict, addLayDistrict, toggleMenu} = NewDistrictSlice.actions

export const selectAllDistricts = (state) => state.NewDistrict
export const selectNewDistrictMenuState = (state) => state.NewDistrict.newDistrictMenuOpen