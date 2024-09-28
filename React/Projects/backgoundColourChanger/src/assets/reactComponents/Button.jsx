import React, { useState } from 'react'
import Pannel from './Pannel'



export default function ColourButton({colourProperties, length}) {
  const [colour, changeColour] = useState('pink');
  return (
    <div className="w-fit flex flex-col justify-center align-middle">
      {/* This is pannel */}
      <div className='w-80 h-80 rounded-lg m-8 bg-red-600' style={{backgroundColor:colour}}></div>
      <div className='grid grid-flow-col px-4'>
        <button className="w-fit" style={{backgroundColor:colourProperties[0]}} onClick={() => changeColour(colourProperties[0])}>{colourProperties[0]}</button>
        <button className="w-fit" style={{backgroundColor:colourProperties[1]}} onClick={() => changeColour(colourProperties[1])}>{colourProperties[1]}</button>
        <button className="w-fit" style={{backgroundColor:colourProperties[2]}} onClick={() => changeColour(colourProperties[2])}>{colourProperties[2]}</button>
        <button className="w-fit text-black" style={{backgroundColor:colourProperties[3]}} onClick={() => changeColour(colourProperties[3])}>{colourProperties[3]}</button>
      </div>
    </div>
  );
}
