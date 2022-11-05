// const initState = {
//   search: "",
//   status: "All",
//   priorities: [],
// };

// const filterReducer = (state = initState, action) => {
//   console.log({ state, action });
//   switch (action.type) {
//     case "filters/searchFilterChange":
//       return {
//         ...state,
//         search: action.payload,
//       };
//     case "filters/statusFilterChange":
//       return {
//         ...state,
//         status: action.payload,
//       };
//     case "filters/prioritiesFilterChange":
//       return {
//         ...state,
//         priorities: action.payload,
//       };
//     default:
//       return state;
//   }
// };
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  status: "All",
  priorities: [],
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    searchFilterChange: (state, action) => {
      state.search = action.payload;
    },
    statusFilterChange: (state, action) => {
      state.status = action.payload;
    },
    prioritiesFilterChange: (state, action) => {
      state.priorities = action.payload;
    },
  },
});

export default filterSlice;
