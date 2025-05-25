import { useContext } from "react";
import Logo from "../Assets/designPortLogo.png";
import Button from "./Button";
import { LogOut } from "lucide-react";
import { LoginContext } from "../Data/Contexts";
function NavbarTop() {

  const {setLoginCheck} = useContext(LoginContext);

      // Signout Button Logic
  const SignOutButton = () => {
    setLoginCheck(false);
    console.log("Signout button called!");
    localStorage.setItem("loginCheck", 0);
  };


  return (
    <div className="h-fit bg-cyan-950 flex justify-between align-middle">
      {/* logo */}
      <div className="flex items-center font-bold ml-4">
        <img className="h-14 m-2" src={Logo} alt="" />
        <h1 className="text-8 text-white">Design port</h1>
      </div>

      <div className="flex align-middle">
        <Button className="hover: rounded-full p-4 bg-inherit items-center flex" onClick={SignOutButton} theme="dark">
        Signout<LogOut size={20} className="ml-4" />
      </Button>
      </div>
    </div>
  );
}

export default NavbarTop;
