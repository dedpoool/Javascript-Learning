import React, { useContext, useState } from "react";
import TextField from "../Components/TextField";
import TextArea from "../Components/TextArea";
import Button from "../Components/Button";
import ProfileImage from "../Components/ProfileImage";
import logo from "../Assets/designPortLogo.png";
import { LoginContext } from "../Data/Contexts";
import PasswordValueCheck from "../Components/PasswordValueCheck";

export default function SignIn() {

  // password textfiled colours
  const [confirmPassword,setConfirmPassword] = useState({createPassword:'normal',confirmPassword:'normal',showSuggestions:false});


  const { setSignUpTextFields, signUpTextFields } = useContext(LoginContext);

  // useState for signup for that the signup form is good to go
  const [signUpFromFlag, setSignUpFormFlag] = useState(false);

  console.log("sing up flag: ", signUpFromFlag);

  // useState For password validator
  const [passwordValidations, setPasswordValidations] = useState({
    numChar: false,
    char8: false,
    specialChar: false,
    capChar: false,
    smallChar: false,
    charLess20: false,
  });

  // password validator function
  const passwordValidator = (password) => {

    
    const passLength = password.length;    // password length

    console.log('show suggestion Before:',confirmPassword.showSuggestions);
    
    
    setConfirmPassword({...confirmPassword,showSuggestions:true});  //show suggestions for the password
    
    console.log('show suggestion After:',confirmPassword.showSuggestions);

    setPasswordValidations({
      ...passwordValidations,
      capChar: /[A-Z]/.test(password),
      specialChar: /[!@#$%^&*]/.test(password),
      numChar: /[0-9]/.test(password),
      smallChar: /[a-z]/.test(password),
      char8: passLength >= 8,
    });
    // console the values
    console.log("Password Validations:", { ...passwordValidations });

    return (
      passwordValidations.capChar &&
      passwordValidations.specialChar &&
      passwordValidations.numChar &&
      passwordValidations.smallChar &&
      passwordValidations.char8
    );
  };

  // text input on change handle function
  const updateSignUpTextFields = (e) => {
    console.log("value of name", e.target.name);
    console.log("value of value", e.target.value);

    const inputValue = e.target.value;
    const inputName = e.target.name;

    // If the target is password
    inputName == "password" && passwordValidator(inputValue)
      ? setConfirmPassword({...confirmPassword,createPassword:'green'})
      : setConfirmPassword({...confirmPassword,createPassword:'red'});
    setSignUpTextFields({ ...signUpTextFields, [inputName]: inputValue });
  };

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
              onChange={updateSignUpTextFields}
              className="w-full"
              type="text"
              name="firstName"
              placeholder="First Name"
              theme=""
            />
            {/* Last Name */}
            <TextField
              className="w-full"
              type="text"
              placeholder="Last Name"
              theme=""
              onChange={updateSignUpTextFields}
              name="lastName"
            />
          </div>

          {/* Email */}
          <TextField
            className="w-full"
            type="text"
            placeholder="Email"
            theme=""
            onChange={updateSignUpTextFields}
            errorCode=""
            name="email"
          />

          {/* Address */}
          <TextArea
            className="w-full"
            placeholder="Address"
            name="address"
            onChange={updateSignUpTextFields}
          />

          {/* City Pincode State */}
          <div className="flex gap-4 w-full">
            {/* City */}
            <TextField
              className="w-full"
              type="text"
              placeholder="City"
              theme=""
              onChange={updateSignUpTextFields}
              errorCode=""
              name="city"
            />

            {/* Pincode */}
            <TextField
              className="w-full"
              type="text"
              placeholder="#Pincode"
              theme=""
              onChange={updateSignUpTextFields}
              errorCode=""
              name="pincode"
            />

            {/* State */}
            <TextField
              className="w-full"
              type="text"
              placeholder="State"
              theme=""
              onChange={updateSignUpTextFields}
              errorCode=""
              name="state"
            />
          </div>

          {/* country */}
          <TextField
            className="w-full"
            type="text"
            placeholder="Country"
            theme=""
            onChange={updateSignUpTextFields}
            errorCode=""
            name="country"
          />

          {/* Create Password */}
          <TextField
            className="w-full"
            type="password"
            placeholder="Create Password"
            theme=""
            onChange={updateSignUpTextFields}
            errorCode={confirmPassword.createPassword}
            name="password"
            showPasswordIcon={true}
          />

          {/* for passowrd validation */}
          {confirmPassword.showSuggestions && 
          <div className="flex flex-wrap gap-x-3 gap-y-2 pl-4">
            <PasswordValueCheck valid={passwordValidations.smallChar}>
              small character
            </PasswordValueCheck>
            <PasswordValueCheck valid={passwordValidations.capChar}>
              upper-case character A-Z
            </PasswordValueCheck>
            <PasswordValueCheck valid={passwordValidations.char8}>
              8 characters
            </PasswordValueCheck>
            <PasswordValueCheck valid={passwordValidations.specialChar}>
              special character
            </PasswordValueCheck>
            <PasswordValueCheck valid={passwordValidations.numChar}>
              number 1-0
            </PasswordValueCheck>
          </div>
          }

          {/* Confirm Password */}
          <TextField
            className="w-full"
            type="password"
            placeholder="Confirm Password"
            theme=""
            errorCode=""
            name="confirmPassword"
            showPasswordIcon={true}
          />

          {/* Button */}
          <Button className="w-full" theme="dark">
            Sign Up
          </Button>

          {/* Already have a account login */}
          <h1 className="text-sm">
            Already have a account? <span>Login</span>
          </h1>
        </div>
      </div>
    </div>
  );
}
