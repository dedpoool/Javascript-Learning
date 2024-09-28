import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Button from './assets/reactComponents/Button'
import Pannel from './assets/reactComponents/Pannel'


const colourProperties = {
  Red:{name:'Red',value:'red'},
  Blue:{name:'Blue',value:'blue'},
  Green:{name:'Green',value:'green'},
}

const colourForButtons = ['red', 'blue', 'green', 'yellow']
const colourLength = colourForButtons.length;
console.log(`the length of the array is ${colourForButtons.length}`);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="flex-col items-center justify-center  w-screen h-screen">
      <Button colourProperties={colourForButtons} length={colourLength} />
    </div>
  </React.StrictMode>
);
