import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { YouTube_Video_Api } from "./constants";

//Action
export const fetchyoutubeData = createAsyncThunk('fetchyoutubeData', async () => {
   const data = await fetch(YouTube_Video_Api);
   return  data.json();
})

const youtubeapiSlice = createSlice({
    name:'youtube',
    initialState:{
        isLoading: false,
        data :null,
    },
    extraReducers : (builder) => {
        builder.addCase(fetchyoutubeData.pending,(state,action)=>{
            state.isLoading = false;
    });
        builder.addCase(fetchyoutubeData.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.data = action.payload;
});
        builder.addCase(fetchyoutubeData.rejected,(state,action)=>{
            console.log("error", action.payload)
            state.isError = true;
    });
}

})

export default youtubeapiSlice.reducer;