import { useContext, useState } from "react";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { LoginContext } from "../Data/Contexts";
import ProfileImage from "../Assets/Test Images/dog.jpg";
import TextField from "../Components/TextField";
import Button from "../Components/Button";

function ProfileSettings() {
  // For edit the profile details
  const { userData, setUserData, currentUserData, setCurrentUserData } =
    useContext(LoginContext);
  console.log("current user data: ", currentUserData);

  const [updatedUserData, setUpdatedUserData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    address: "",
    city: "",
    pincode: "",
    state: "",
    country: "",
    email: "",
    password: "",
  });

  // button clik to update user profile
  const updateUserProfile = () => {
    // copy of user data
    const userDataCopy = { ...userData };
    userDataCopy[currentUserData.index] = setUpdatedUserData;
    setUserData(userDataCopy);
  };

  console.log("this is current user data ", currentUserData);

  // edit button state
  const [editProfile, setEditProfile] = useState(false);

  //   edit button handle
  const handleEditButton = () => {
    setEditProfile(!editProfile);
  };

  //   Normal data show
  const showDataNormal = (
    <div className="flex flex-col p-8 w-fit">
      {/* Profile Pic */}
      <div className="rounded-full border-2 border-slate-700 size-24">
        <img className="rounded-full" src={ProfileImage} alt="" />
      </div>

      {/* text data */}
      <div className="pt-4">
        {/* name */}
        <h1 className="text-xl font-bold">
          {currentUserData.firstName + " " + currentUserData.lastName}
        </h1>

        {/* email */}
        <h1>{currentUserData.email}</h1>
        {/* Address */}
        <div className="text-sm mt-2">
          <h1>
            {`${currentUserData.address} ${currentUserData.city} ${currentUserData.state}`}
          </h1>
          <h1>{`${currentUserData.country} ${currentUserData.pincode}`}</h1>
        </div>
      </div>
    </div>
  );

  const showEditableData = (
    <div className="flex flex-col gap-4">
      {/* Profile Pic */}
      <div className="rounded-full border-2 border-slate-700 size-24">
        <img className="rounded-full" src={ProfileImage} alt="" />
      </div>

      {/* text fields */}
      {/* names */}
      <div className="flex gap-x-2 pt-4">
        <TextField name="firstName" value={currentUserData.firstName} />
        <TextField name="lastName" value={currentUserData.lastName} />
      </div>
      {/* email */}
      <TextField
        name="email"
        className="w-full"
        value={currentUserData.email}
      />
      <TextField
        name="address"
        className="w-full"
        value={currentUserData.address}
      />
      <TextField name="city" className="w-full" value={currentUserData.city} />
      <TextField
        name="state"
        className="w-full"
        value={currentUserData.state}
      />
      <TextField
        name="pincode"
        className="w-full"
        value={currentUserData.pincode}
      />
      <div></div>
    </div>
  );

  return (
    <div className="flex bg-white p-4 h-full w-full justify-between">
      {/* Data */}
      {!editProfile ? showDataNormal : showEditableData} {/* Header */}
      <div className="w-fit flex justify-end h-fit">
        {/* edit button */}
        {editProfile && (
          <Button
            onClick={updateUserProfile}
            className="h-fit p-1 m-4 rounded-full"
            theme="dark"
          >
            <CheckCircleIcon />
            Save
          </Button>
        )}
        <div
          className={`${
            editProfile ? "bg-red-600" : "bg-black"
          } rounded-full p-2 text-white w-fit px-2 flex px-4 m-4`}
          onClick={handleEditButton}
        >
          {editProfile ? <CloseIcon /> : <ModeEditOutlineIcon />}

          <h1 className="pl-2">{editProfile ? "Cancel" : "Edit"}</h1>
        </div>
      </div>
    </div>
  );
}

export default ProfileSettings;
