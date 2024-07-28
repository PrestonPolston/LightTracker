import { createSlice } from "@reduxjs/toolkit";
import { lightApi } from "../api/LightApi";
import showDataStorage from "../app/sessionStorage.js/showDataStorage";

const initialShowData = showDataStorage.retrieveFromSessionStorage("showData");

const showDataSlice = createSlice({
  name: "showData",
  initialState: {
    showData: initialShowData,
    selectedShow: null,
  },
  reducers: {
    selectShow: (state, action) => {
      state.selectedShow = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        lightApi.endpoints.getAllShowData.matchFulfilled,
        (state, action) => {
          state.showData = action.payload;
          showDataStorage.saveToSessionStorage("showData", action.payload);
        }
      )
      .addMatcher(
        lightApi.endpoints.getAllShowData.matchRejected,
        (state, action) => {
          console.error("Error fetching show data:", action.error);
        }
      );
  },
});

export const { selectShow } = showDataSlice.actions;
export default showDataSlice.reducer;
