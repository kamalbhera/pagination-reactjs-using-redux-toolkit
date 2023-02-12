import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  users: [],
  currPage : 1,
  totalPage : 1
};

export const fetchusers = createAsyncThunk("user/fetchusers", (page) => {
  return axios
    .get(`https://dummyjson.com/products?limit=10&skip=${page*10-10}`)
    .then((res) => res.data)
    .catch((err) => console.log("No data"));
});

const dataSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    prevPage: (state, action) => {
        if(state.currPage === 1){
            state.currPage = 1;
        }else{
            state.currPage--;
        }
    },
    fetchPage: (state , action) => {
      state.currPage = action.payload;
    },
    lastPage: (state, action) => {
      state.currPage++;
    },
  },


  extraReducers: (builder) => {
    builder.addCase(fetchusers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchusers.fulfilled, (state, action) => {
      state.loading = false;
      state.totalPage = action.payload.total / 10;
      state.users = action.payload.products;
    });
    builder.addCase(fetchusers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
    });
  },
});

export default dataSlice.reducer;
export const { prevPage,fetchPage,lastPage } = dataSlice.actions
