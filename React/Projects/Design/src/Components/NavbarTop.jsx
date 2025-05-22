import Logo from "../Assets/designPortLogo.png";
function NavbarTop() {
  return (
    <div className="h-fit bg-cyan-950">
      {/* logo */}
      <div className="flex items-center font-bold ml-4">
        <img className="h-14 m-2" src={Logo} alt="" />
        <h1 className="text-8 text-white">Design port</h1>
      </div>
    </div>
  );
}

export default NavbarTop;
