import React, { useState } from "react";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignIn from "./Pages/SignIn";
import { LoginContext, LoginProvider } from "./Data/Contexts";
import { Route, Routes, BrowserRouter as Router } from "react-router";

export default function App() {
  // For checking login state
  const [loginCheck, setLoginCheck] = useState(false);

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
      email: "vishalmark&@gmail.com",
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
  return (
    <LoginProvider value={{ userData, setUserData, loginCheck, setLoginCheck }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signUp" element={<SignIn />}></Route>
        </Routes>
      </Router>
    </LoginProvider>
  );
}
