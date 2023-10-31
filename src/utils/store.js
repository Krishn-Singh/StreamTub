import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import youtubeapiSlice from "./youtubeapiSlice";

const store = configureStore({
    reducer:{
        app: appSlice,
        youtube:youtubeapiSlice
    }

});
export default store;