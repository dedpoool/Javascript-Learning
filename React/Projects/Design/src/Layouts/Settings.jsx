import { Outlet } from "react-router";

function Settings() {
  return (
    <div>
      <h1>This is settings</h1>
      <Outlet />
    </div>
  );
}

export default Settings;
