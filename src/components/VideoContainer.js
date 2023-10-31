import React, { useEffect, useState } from "react";
import { YouTube_Video_Api } from "../utils/constants";
import VideoCard from "./VideoCard.js";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchyoutubeData } from "../utils/youtubeapiSlice";

const VideoContainer = () => {
  // const [videoData, setvideoData] = useState([]);
  const dispatch = useDispatch();
  const state = useSelector(store  => store.youtube.data);

  useEffect(()=> {
   dispatch(fetchyoutubeData());
  },[])


  return (
    <div className="flex flex-wrap">
      {state?.items?.map((video) => (
       <Link to={'/watch?v='+ video.id}><VideoCard key={video.id} info={video} /></Link>
      ))}
    </div>
  );
};

export default VideoContainer;
