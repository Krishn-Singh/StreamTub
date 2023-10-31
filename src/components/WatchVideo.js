import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import WatchVideoContent from './WatchVideoContent';

const WatchVideo = () => {
  const [searchParams] = useSearchParams();
  // console.log("search",searchParams.get('v'))
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  },[]);

  return (
    <div className='ml-24 pt-2'>
    <div className='pt-2 rounded-sm'>
        <iframe width="900" className='rounded-lg' height="450" src={"https://www.youtube.com/embed/"+searchParams.get('v')} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
    <WatchVideoContent/>
    </div>
  )
}

export default WatchVideo;