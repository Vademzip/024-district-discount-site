import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  draggableDistrict : '',
  dropCategory : 'built'
}

const addingDistrictSlice = createSlice({
  name : '@@addingDistrict',
  initialState,
  reducers : {
    setDraggableDistrict : (state, action) => {
      state.draggableDistrict = action.payload
    },
    setDropCategory : (state, action) => {
      state.dropCategory = action.payload
    }
  }
})

export const addingDistrictReducer = addingDistrictSlice.reducer
export const {setDraggableDistrict,setDropCategory} = addingDistrictSlice.actions
export const selectDraggableDistrict = (state) => state.addingDistrict.draggableDistrict
export const selectDropCategory = (state) => state.addingDistrict.dropCategory