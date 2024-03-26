import { createSlice } from "@reduxjs/toolkit";
const schoolSlice = createSlice({
  name: "school",
  initialState: {
    selected: [],
    rowSelection: {},
  },
  reducers: {
    select: (state, action) => {
      state.selected.push(action.payload);
      state.rowSelection[action.payload] = true;
    },
    unselect: (state, action) => {
      console.log(action.payload);
      state.selected = state.selected.filter((item) => item !== action.payload);
      delete state.rowSelection[action.payload];
    },
    selectAll: (state, action) => {
      state.selected = action.payload.map((item) => item.ParenId);
      state.rowSelection = {};
      action.payload.forEach((item) => {
        state.rowSelection[item.ParenId] = true;
      });
    },
    unselectAll: (state) => {
      state.selected = [];
      state.rowSelection = {};
    },
  },
});
export const { select, unselect, selectAll, unselectAll } = schoolSlice.actions;
export default schoolSlice.reducer;
