import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  selectImage:null,
};



export const appSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {
   
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
   
    selectImage: (state, action) => {
      state.selectImage = action.payload;
    },

    resetImage: (state) => {
      state.user = null;
    },

  },

});

export const { login ,logout,selectImage,resetImage} = appSlice.actions;


export const selectUser = (state) => state.app.user;
export const selectSelectImage = (state) => state.app.selectImage;




export default appSlice.reducer;
