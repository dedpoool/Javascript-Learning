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
    firstName: currentUserData.firstName,
    lastName: currentUserData.lastName,
    age: currentUserData.age,
    address: currentUserData.address,
    city: currentUserData.city,
    pincode: currentUserData.pincode,
    state: currentUserData.state,
    country: currentUserData.country,
    email: currentUserData.email,
    password: currentUserData.password,
  });

  console.log("the updated profile values: ", updatedUserData);
  console.log("all userData: ", userData);

  // button clik to update user profile
  const updateUserProfile = () => {
    // copy of user data
    const userDataCopy = [...userData];

    // index to where the data should update
    const updateIndex = currentUserData.index;
    console.log("value of userDataCopy: ", userDataCopy);
    console.log("This is the index: ", currentUserData.index);

    userDataCopy[updateIndex] = updatedUserData;
    setUserData(userDataCopy);
  };

  console.log("this is current user data ", currentUserData);

  // edit button state
  const [editProfile, setEditProfile] = useState(false);

  //   edit button handle
  const handleEditButton = () => {
    setEditProfile(!editProfile);
  };

  // handle textfield on change
  const updateProfile = (e) => {
    const updatedName = e.target.name;
    const updatedValue = e.target.value;
    setUpdatedUserData({ ...updatedUserData, [updatedName]: updatedValue });
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
        <TextField
          onChange={(e) => updateProfile(e)}
          name="firstName"
          value={updatedUserData.firstName}
        />
        <TextField
          onChange={(e) => updateProfile(e)}
          name="lastName"
          value={updatedUserData.lastName}
        />
      </div>
      {/* email */}
      <TextField
        name="email"
        onChange={(e) => updateProfile(e)}
        className="w-full"
        value={updatedUserData.email}
      />
      <TextField
        name="address"
        onChange={(e) => updateProfile(e)}
        className="w-full"
        value={updatedUserData.address}
      />
      <TextField
        name="city"
        onChange={(e) => updateProfile(e)}
        className="w-full"
        value={updatedUserData.city}
      />
      <TextField
        name="state"
        onChange={(e) => updateProfile(e)}
        className="w-full"
        value={updatedUserData.state}
      />
      <TextField
        name="pincode"
        onChange={(e) => updateProfile(e)}
        className="w-full"
        value={updatedUserData.pincode}
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
