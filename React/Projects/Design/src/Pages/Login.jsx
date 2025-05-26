import TextField from "../Components/TextField";
import Button from "../Components/Button";
import ProfileImage from "../Components/ProfileImage";
import logo from "../Assets/designPortLogo.png";
import blueBG from "../Assets/blue_abstract_art.jpg";
import { LoginContext, LoginProvider } from "../Data/Contexts";
import { useContext, useState } from "react";
import { Eye } from "lucide-react";
import { Link } from "react-router";

export default function Login() {
  const {
    userData,
    loginCheck,
    setLoginCheck,
    loginTextFields,
    setLoginTextFields,
    currentUserEmail,
    setCurrentUserEmail,
    currentUserData,
    setCurrentUserData,
  } = useContext(LoginContext);

  // if the user does not exists
  const [userExists, setUserExists] = useState(true);

  // update date onchange in text field🌕
  const updateLoginData = (e) => {
    console.log("the text fileds are updating!");

    let nameData = e.target.name;
    let valueData = e.target.value;
    setLoginTextFields({ ...loginTextFields, [nameData]: valueData });
  };

  console.log("Value of Login ", loginTextFields);

  // Login Button Function
  const handleLoginButton = () => {
    console.log("Login Button called!");

    // finding the user and the password is correct?
    const userTrue = userData.find(
      (items) =>
        items.email === loginTextFields.email &&
        items.password === loginTextFields.password
    );

    if (userTrue) {
      setLoginCheck(true);
      localStorage.setItem("loginCheck", 1);
      setCurrentUserEmail(loginTextFields.email);
      setCurrentUserData({ ...currentUserData, email: loginTextFields.email });
    } else {
      setUserExists(false);
    }
  };

  return (
    <div className="flex w-screen h-screen">
      {/* Image Container */}
      <div className="w-1/2 bg-black">
        <img className="size-full" src={blueBG} alt="" />
      </div>

      {/* Data container */}
      <div className="flex justify-center items-center flex-col w-1/2">
        {/* Profile */}
        <ProfileImage
          src={logo}
          className="pb-20 w-1/4 size-1/3"
          imageLable={false}
        />

        {/* Text field container */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="flex gap-4 w-3/4 flex-col pb-8 items-center"
        >
          {/* email */}
          <TextField
            underLabel={!userExists && "User Email does not exists!"}
            errorCode={!userExists ? "red" : "normal"}
            onChange={updateLoginData}
            className="w-full"
            placeholder="Email"
            name="email"
          />

          {/* Password */}
          <TextField
            type="password"
            className="w-full"
            placeholder="Password"
            onChange={updateLoginData}
            name="password"
            showPasswordIcon={true}
          ></TextField>

          {/* Button */}
          <Button
            type="submit"
            onClick={handleLoginButton}
            theme="dark"
            className="w-full"
          >
            Login
          </Button>

          {/* New to this sign up */}
          <h1 className="text-sm text-slate-700">
            New to this?{" "}
            <Link className="font-bold" to={"/signUp"}>
              SignUp
            </Link>
          </h1>
        </form>
      </div>
    </div>
  );
}
