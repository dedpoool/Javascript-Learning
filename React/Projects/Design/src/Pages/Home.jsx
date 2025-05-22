import React from "react";
import DataTable from "../Components/DataTable";
import { Link, Outlet, Route, Routes } from "react-router";
import Button from "../Components/Button";
import { useContext } from "react";
import { LoginContext } from "../Data/Contexts";
import NavbarTop from "../Components/NavbarTop";
import SideBar from "../Components/SideBar";
import AllUsers from "../Layouts/AllUsers";
import AllPosts from "../Layouts/AllPosts";
import { patch } from "@mui/material";
// import Button from "@mui/material/Button";

export default function Home() {
  const { userData, setLoginCheck } = useContext(LoginContext);

  const optionsForSideBar = [
    { title: "All Users", path: "/allUsers", icon: "PeopleIcon" },
    { title: "Posts", path: "/allPosts", icon: "PermMediaIcon" },
  ];

  // Signout Button Logic
  const SignOutButton = () => {
    setLoginCheck(false);
    console.log("Signout button called!");
    localStorage.setItem("loginCheck", 0);
  };

  return (
    <div className=" w-screen h-screen flex-col gap-8 bg-blue-100">
      {/* Navigation Bar */}
      <div>
        <NavbarTop />
      </div>

      {/* down layout */}
      <div className="flex ">
        {/* side bar */}
        <div className="w-fit"></div>
        <SideBar options={optionsForSideBar} />
        {/* main panel */}
        <div className="w-full flex justify-center items-center flex-col">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
