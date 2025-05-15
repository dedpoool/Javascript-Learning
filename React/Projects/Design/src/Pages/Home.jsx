import React from "react";
import DataTable from "../Components/DataTable";
import { Link } from "react-router";
import Button from "../Components/Button";
import { useContext } from "react";
import { LoginContext } from "../Data/Contexts";

export default function Home() {
  const { userData, setLoginCheck } = useContext(LoginContext);

  // Signout Button Logic
  const SignOutButton = () => {
    setLoginCheck(false);
    console.log("Signout button called!");
    localStorage.setItem("loginCheck", false);
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen flex-col-reverse gap-8">
      <Button onClick={SignOutButton} theme="dark">
        Signout
      </Button>
      <DataTable userData={userData} />
    </div>
  );
}
