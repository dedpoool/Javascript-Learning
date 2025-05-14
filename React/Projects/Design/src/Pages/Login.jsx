import React, { useState } from "react";
import TextField from "../Components/TextField";
import Button from "../Components/Button";
import ProfileImage from "../Components/ProfileImage";
import logo from "../Assets/designPortLogo.png";
import { LoginContext, LoginProvider } from "../Data/Contexts";
import { useNavigate } from "react-router";

export default function Login() {
  const { userData, setUserData, loginCheck, setLoginCheck } =
    useContext(LoginContext);

  // Login state
  const [loginTextFields, setLoginTextFields] = useState({
    username: "",
    password: "",
  });

  // update date onchange in text field
  const updateLoginData = (e) => {
    let nameData = e.target.name;
    let valueData = e.target.value;
    setLoginTextFields({ ...loginTextFields, [nameData]: valueData });
  };

  console.log("Value of Login ", loginTextFields);

  // Login Button Function
  const loginButton = () => {
    userData.map((items, index) => {
      loginTextFields.username === items.email &&
        loginTextFields.password === items.password &&
        useNavigate("/");
    });
  };

  return (
    <LoginProvider>
      <div className="flex w-screen h-screen">
        {/* Image Container */}
        <div className="w-1/2 bg-black"></div>

        {/* Data container */}
        <div className="flex justify-center items-center flex-col w-1/2">
          {/* Profile */}
          <ProfileImage
            src={logo}
            className="pb-20 w-1/4 size-1/3"
            imageLable={false}
          />

          {/* Text field container */}
          <div className="flex gap-4 w-3/4 flex-col pb-8 items-center">
            {/* Username */}
            <TextField
              onChange={updateLoginData}
              className="w-full"
              placeholder="Email"
              name="username"
            />

            {/* Password */}
            <TextField
              type="password"
              className="w-full"
              placeholder="Passwrod"
              onChange={updateLoginData}
              name="password"
            />

            {/* Button */}
            <Button
              onClick={loginButton}
              lable="Login"
              theme="dark"
              className="w-full"
            />

            {/* New to this sign up */}
            <h1 className="text-sm text-slate-700">
              New to this? <span className="font-bold">Sign up</span>
            </h1>
          </div>
        </div>
      </div>
    </LoginProvider>
  );
}
