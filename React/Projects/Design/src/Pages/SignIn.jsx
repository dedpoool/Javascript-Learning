import React from "react";
import TextField from "../Components/TextField";
import TextArea from "../Components/TextArea";
import Button from "../Components/Button";
import ProfileImage from "../Components/ProfileImage";
import logo from "../Assets/designPortLogo.png";

export default function SignIn() {
  return (
    <div className="w-full bg-black h-screen flex items-center justify-center">
      {/* Image Container */}
      <div className="w-1/2"></div>

      {/* Data container */}
      <div className="bg-white w-1/2 h-screen flex justify-center items-center">
        {/* Text field container */}
        <div className="justify-center items-center w-4/5 flex gap-4 flex-wrap">
          {/* Profile picture */}
          <ProfileImage className="w-1/5" src={logo} />

          {/* First and Last Name */}
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
            placeholder="Email"
            theme=""
            errorCode=""
          />

          {/* Address */}
          <TextArea className="w-full" placeholder="Address" />

          {/* City Pincode State */}
          <div className="flex gap-4 w-full">
            {/* City */}
            <TextField
              className="w-full"
              type="text"
              placeholder="City"
              theme=""
              errorCode=""
            />

            {/* Pincode */}
            <TextField
              className="w-full"
              type="text"
              placeholder="#Pincode"
              theme=""
              errorCode=""
            />

            {/* State */}
            <TextField
              className="w-full"
              type="text"
              placeholder="State"
              theme=""
              errorCode=""
            />
          </div>

          <TextField
            className="w-full"
            type="text"
            placeholder="Country"
            theme=""
            errorCode=""
          />

          {/* Create Password */}
          <TextField
            className="w-full"
            type="text"
            placeholder="Create Password"
            theme=""
            errorCode=""
          />
          {/* Confirm Password */}
          <TextField
            className="w-full"
            type="text"
            placeholder="Confirm Password"
            theme=""
            errorCode=""
          />

          {/* Button */}
          <Button className="w-full" lable="Sign Up" theme="dark" />

          {/* Already have a account login */}
          <h1 className="text-sm">
            Already have a account? <span>Login</span>
          </h1>
        </div>
      </div>
    </div>
  );
}
