import { Outlet } from "react-router";

function Settings() {
  return (
    <div className="w-full h-4/5">
      <h1>This is settings</h1>
      <Outlet />
    </div>
  );
}

export default Settings;
