import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  // Defining use state variables
  const [password, setpassword] = useState('password generate here');
  const [includeNumbers, setincludeNumbers] = useState(false);
  const [includeSymbols, setincludeSymbols] = useState(false);
  const [passwordLength, setpasswordLength] = useState(5)
  const [pop, setpop] = useState()

  // these are the functions
  const passwordGenerator = useCallback(()=>{
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (includeNumbers) str+='0123456789'
    if (includeSymbols) str+='!"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~'
    console.log(`length of the string is ${str.length}`);

    for (let i = 1; i <= passwordLength; i++) {
      const indexStr = Math.floor((Math.random() * str.length)+1)
      console.log(`Value of index is ${indexStr}`);
      pass += str.charAt(indexStr);
      }
    setpassword(pass);
  },    
  [password,includeNumbers,includeSymbols,passwordLength])

useEffect(()=>{
      passwordGenerator()
    },
  [includeNumbers,includeSymbols,passwordLength])

  // Pop function
  const copyPop = () => {
    textContent.current.select();  //we can also use current.setSelectRange(0,999) 👉 to select the range for some certain range in the ref 
    navigator.clipboard.writeText(textContent.current.value);
  }

// Using the refHook
const textContent = useRef("Not get yet");
console.log(`This is the value of the useRef Hook Variable = ${textContent.current.value}`);

  return (
    <div className='flex flex-col align-middle justify-center w-full'>
      <div className='bg-green-600 p-4 rounded-2xl w-fit m-5'>
        <h4 className='font-bold'>{textContent.current.value}</h4>
        <h5>Copied Successfully ✅</h5>
      </div>
      {/* tilte for the project */}
      <h3 className='p-4 bg-black rounded-lg rounded-bl-none rounded-br-none'>Random Password Generator</h3>
      {/* This is the main container */}
      <div className='p-4 bg-gray-900'>
        {/* This is the text field and button */}
        <div>
          <input className='p-3 rounded-lg rounded-rt-none rounded-rb-none' type="text" value={password} ref={textContent}/>
          <button className='bg-yellow-600 rounded-tl-none rounded-bl-none' onClick={() => {copyPop()}}>Copy 🗒️</button>
        </div>

        {/* This is all the controls like checkbox and slider */}
        <div>
          {/* This is the range slider */}
          <div className='flex pt-4'>
            <input className='w-full' 
            type="range" 
            min={5}
            max={20}
            value={passwordLength}
            onChange={(e) => {setpasswordLength(e.target.value)}} />
            <label className='pl-2 w-full' htmlFor="">Length {passwordLength}</label>
          </div>
          {/* These are the checkboxes */}
          <div className='flex pt-4'>
            {/* for numbers */}
            <div>
              <input type="checkbox" onChange={()=>{setincludeNumbers((numberFlag)=>!numberFlag)}}/>
              <label className='pl-2' htmlFor="">Numbers</label>
            </div>
            {/* for symbols */}
            <div className='pl-4'>
              <input type="checkbox" onChange={()=>{setincludeSymbols((symbolsFlag)=>!symbolsFlag)}}/>
              <label className='pl-2' htmlFor="">Symbols</label>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App
