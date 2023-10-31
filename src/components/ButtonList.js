import React from 'react'
import Button from './Button'

const ButtonList = () => {
  return (
    <div className='flex'>
      <Button name='All'/>
      <Button name='Movies'/>
      <Button name='Songs'/>
      <Button name='Cricket'/>
      <Button name='News'/>
      <Button name='Cooking'/>
      <Button name='Live'/>
      <Button name='Soccer'/>
    </div>
  )
}

export default ButtonList;