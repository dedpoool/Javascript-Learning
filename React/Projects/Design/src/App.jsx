import React, { useState } from "react";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignIn from "./Pages/SignIn";
import { LoginContext, LoginProvider } from "./Data/Contexts";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Outlet,
  Navigate,
} from "react-router";
import ErrorPage from "./Pages/ErrorPage";

export default function App() {

localStorage.setItem('loginCheck', true);

  // For checking login state
  const [loginCheck, setLoginCheck] = useState(false);

  // console.log("login check state", loginCheck);

  console.log(
    "the value of local loginCheck",
    localStorage.getItem("loginCheck")
  );

  // for change in the login Check
  // const loginEffect = useEffect(()=> {},[loginCheck])

  // for storing user data
  const [userData, setUserData] = useState([
    {
      firstName: "Vishal",
      lastName: "Yadav",
      age: "29",
      address: "#2059, sector 28",
      city: "Panchkula",
      pincode: "134109",
      state: "Haryana",
      country: "India",
      email: "vishalmark7@gmail.com",
      password: "Vishal@1234",
    },
    {
      firstName: "Sahil",
      lastName: "Dadwal",
      age: "29",
      address: "#234 baltana",
      city: "chandigarh",
      pincode: "34455",
      state: "Punjab",
      country: "India",
      email: "sahilDadwal@gamil.com",
      password: "Sahil@1234",
    },
    {
      firstName: "Neha",
      lastName: "Sharma",
      age: "23",
      address: "#1234 sector 14",
      city: "Panchkula",
      pincode: "3243",
      state: "Haryana",
      country: "India",
      email: "nehasharma@gmail.com",
      password: "NehaSharma!1234",
    },
  ]);

  // text field data for login
  const [loginTextFields, setLoginTextFields] = useState({
    email: "",
    password: "",
  });

  return (
    <LoginProvider
      value={{
        userData,
        setUserData,
        loginCheck,
        setLoginCheck,
        loginTextFields,
        setLoginTextFields,
      }}
    >
      <Router>
        <Routes>
          <Route
            path="/"
            element={loginCheck ? <Home /> : <Navigate to={"/login"} />}
          ></Route>

          <Route
            path="/login"
            element={loginCheck ? <Navigate to={"/"} /> : <Login />}
          ></Route>

          <Route path="/signUp" element={<SignIn />}></Route>
          <Route path="/*" element={<ErrorPage />}></Route>
        </Routes>
      </Router>
    </LoginProvider>
  );
}
