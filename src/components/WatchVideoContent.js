import React from 'react'
import { useSelector } from 'react-redux';

const WatchVideoContent = () => {
  const state = useSelector(store => store.youtube.data);

  console.log(state);

  return (
    <div className='px-2 py-2'>
     {}
    </div>
  )
}

export default WatchVideoContent;