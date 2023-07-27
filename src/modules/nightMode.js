import { createSlice } from "@reduxjs/toolkit";

const nightModeSlice = createSlice({
  name: 'nightMode',
  initialState: false,
  reducers:{
    toggleMode: (state) => !state
  }
})

export const {toggleMode} = nightModeSlice.actions
export default nightModeSlice.reducer