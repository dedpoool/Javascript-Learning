import React, { useState } from "react";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignIn from "./Pages/SignIn";
import AllUsers from "./Layouts/AllUsers";
import Settings from "./Layouts/Settings";
import Dashboard from "./Layouts/Dashboard";
import ProfileSettings from "./Layouts/ProfileSettings";
import { LoginContext, LoginProvider } from "./Data/Contexts";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Outlet,
  Navigate,
} from "react-router";
import ErrorPage from "./Pages/ErrorPage";
import AllPosts from "./Layouts/AllPosts";

export default function App() {
  //Making a loginCheckVariable in the local storage if there is not!
  localStorage.getItem("loginCheck") == undefined &&
    localStorage.setItem("loginCheck", false);

  // For checking login state
  const [loginCheck, setLoginCheck] = useState(
    Boolean(Number(localStorage.getItem("loginCheck")))
  );

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

  // Current User
  const [currentUserEmail, setCurrentUserEmail] = useState("");

  // Current User Data
  const [currentUserData, setCurrentUserData] = useState({
    firstName: "test",
    lastName: "name",
    age: "",
    address: "",
    city: "",
    pincode: "",
    state: "",
    country: "",
    email: "test@gamil.com",
    password: "",
    index: null,
  });

  // text field data for login
  const [loginTextFields, setLoginTextFields] = useState({
    email: "",
    password: "",
  });

  // text field data for the sign up form
  const [signUpTextFields, setSignUpTextFields] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    pincode: "",
    state: "",
    country: "",
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
        signUpTextFields,
        setSignUpTextFields,
        currentUserEmail,
        setCurrentUserEmail,
        currentUserData,
        setCurrentUserData,
      }}
    >
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              loginCheck === true ? <Home /> : <Navigate to={"/login"} />
            }
          >
            <Route path="/allUsers" element={<AllUsers />} />
            <Route path="/allPosts" element={<AllPosts />} />
            <Route path="/settings" element={<Settings />}>
              <Route
                path="/settings/profileSettings"
                element={<ProfileSettings />}
              />
            </Route>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>{" "}
          <Route
            path="/login"
            element={loginCheck === true ? <Navigate to={"/"} /> : <Login />}
          ></Route>
          <Route path="/signUp" element={<SignIn />}></Route>
          <Route path="/*" element={<ErrorPage />}></Route>
        </Routes>
      </Router>
    </LoginProvider>
  );
}
