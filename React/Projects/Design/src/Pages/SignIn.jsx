import React, { useContext, useState } from "react";
import TextField from "../Components/TextField";
import TextArea from "../Components/TextArea";
import Button from "../Components/Button";
import ProfileImage from "../Components/ProfileImage";
import logo from "../Assets/designPortLogo.png";
import { LoginContext } from "../Data/Contexts";
import PasswordValueCheck from "../Components/PasswordValueCheck";
import {Link} from 'react-router'

export default function SignIn() {
  // Context for global state updates 🍑
  const { setSignUpTextFields, signUpTextFields } = useContext(LoginContext);

  // password textfiled border color and show suggestions state 🍑
  const [confirmPassword, setConfirmPassword] = useState({
    createPassword: "normal",
    confirmPassword: "normal",
    showSuggestions: false,
  });

  // useState for signup if all the signup form is good to go 🍑
  const [signUpFromFlag, setSignUpFormFlag] = useState(false);

  // useState For password validator 🍑
  const [passwordValidations, setPasswordValidations] = useState({
    numChar: false,
    char8: false,
    specialChar: false,
    capChar: false,
    smallChar: false,
    charLess20: false,
  });

  // password validator function 🌕
  const passwordValidator = (password) => {
    const passLength = password.length; // password length

    setConfirmPassword({ ...confirmPassword, showSuggestions: true }); //show suggestions for the password

    setPasswordValidations({
      //setting the new values for the password validation object
      ...passwordValidations,
      capChar: /[A-Z]/.test(password),
      specialChar: /[!@#$%^&*]/.test(password),
      numChar: /[0-9]/.test(password),
      smallChar: /[a-z]/.test(password),
      char8: passLength >= 8,
    });

    return (
      passwordValidations.capChar &&
      passwordValidations.specialChar &&
      passwordValidations.numChar &&
      passwordValidations.smallChar &&
      passwordValidations.char8
    );
  };

  // text input on change handle function 🌕
  const updateSignUpTextFields = (e) => {
    const inputValue = e.target.value;
    const inputName = e.target.name;

    // If the target is password so we can validate ❓
    inputName === "password" && passwordValidator(inputValue)
      ? setConfirmPassword({
          ...confirmPassword,
          createPassword: "green",
          showSuggestions: false,
        })
      : inputName === "password" && passwordValidator(inputValue) == false
      ? setConfirmPassword({
          ...confirmPassword,
          createPassword: "red",
          showSuggestions: true,
        })
      : setConfirmPassword({
          ...confirmPassword,
          createPassword: "normal",
          showSuggestions: false,
        });

    setSignUpTextFields({ ...signUpTextFields, [inputName]: inputValue }); //updating the values in state from text fields
  };

  // Match Password Function 🌕
  const matchPasswords = (e) => {
    signUpTextFields.password === e.target.value
      ? setConfirmPassword({ ...confirmPassword, confirmPassword: "green" })
      : setConfirmPassword({ ...confirmPassword, confirmPassword: "red" });
  };

  // Check the form if it contains all the values🌕
  const checkSubmitForm = () => {
    // console.log("Signup text fields keys: ", Object.keys(signUpTextFields));
    // console.log("Signup text fields values: ", Object.values(signUpTextFields));

   setSignUpFormFlag(Object.values(signUpTextFields).find((value) => value != '') && confirmPassword.createPassword === 'green' && confirmPassword.confirmPassword === 'green')


    console.log("does the sign up form contains any blank value:", signUpFromFlag);
  };

  // The JSX code ⬇️⬇️⬇️⬇️⬇️⬇️

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
            type="email"
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
          {confirmPassword.showSuggestions && (
            <div className="flex flex-wrap gap-x-3 gap-y-2 pl-4 ">
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
          )}

          {/* Confirm Password */}
          <TextField
            className="w-full"
            type="password"
            placeholder="Confirm Password"
            theme=""
            errorCode={confirmPassword.confirmPassword}
            name="confirmPassword"
            showPasswordIcon={true}
            onChange={matchPasswords}
          />

          {/* Button */}
          <Button className="w-full" theme="dark" onClick={checkSubmitForm}>
            Sign Up
          </Button>

          {/* Already have a account login */}
          <h1 className="text-sm">
            Already have a account? <Link className="font-bold" to={'/login'}>Login</Link>
          </h1>
        </div>
      </div>
    </div>
  );
}
