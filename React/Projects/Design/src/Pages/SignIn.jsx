import React from "react";
import TextField from "../Components/TextField";
import TextArea from "../Components/TextArea";
import Button from "../Components/Button";

export default function SignIn() {
  return (
    <div className="w-full bg-black h-screen flex items-center justify-center">
      {/* Image Container */}
      <div className="w-1/2"></div>

      {/* Data container */}
      <div className="bg-white w-1/2 h-screen flex justify-center items-center">
        {/* Text field container */}
        <div className="justify-center items-center w-4/5 flex gap-4 flex-wrap">
        

        <div className="flex gap-4 w-full">
        {/* First Name */}
          <TextField
            className="w-full"
            type="text"
            placeholder="First Name"
            theme=""
          />
          {/* Last Name */}
          <TextField
            className="w-full"
            type="text"
            placeholder="Last Name"
            theme=""
          />
        </div>

          {/* Email */}
          <TextField
            className="w-full"
            type="text"
            placeholder="Last Name"
            theme=""
            errorCode=''
          />

          {/* Address */}
          <TextArea  className="w-full" placeholder="Address"/>


          {/* Button */}
          <Button className="w-full" lable='Sign Up' theme='dark'/>

        
          
        </div>
      </div>
    </div>
  );
}
