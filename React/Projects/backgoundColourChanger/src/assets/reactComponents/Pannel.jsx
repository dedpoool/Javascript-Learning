import React, { useState } from 'react'

export default function ColourPannel({colour}) {
  const [Pannel, colourChange] = useState('green');
  colourChange(colour);

  return (
    <div className='p-30 m-10 w-60 h-60 bg-blue-600 rounded-xl' style={{backgroundColor:{Pannel}}}></div>
  )
}
