import { useContext, useState } from "react";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import { LoginContext } from "../Data/Contexts";

function ProfileSettings() {
  // For edit the profile details
  const { userData, setUserData, currentUserData, setCurrentUserData } =
    useContext(LoginContext);

  // edit button state
  const [editProfile, setEditProfile] = useState(false);

  //   edit button handle
  const handleEditButton = () => {
    setEditProfile(!editProfile);
  };

  //   Normal data show
  const showDataNormal = (
    <>
      {/* name */}
      <h1>{currentUserData.firstName + " " + currentUserData.lastName}</h1>

      {/* email */}
      <h1>{currentUserData.email}</h1>
    </>
  );

  const showEditableData = (
    <>
      <h1>This is editable data</h1>
    </>
  );

  return (
    <div className="flex flex-col bg-white p-4 h-full w-full">
      {/* Header */}
      <div className="w-full flex justify-end ">
        {/* edit button */}
        <div
          className="bg-black rounded-full text-white w-fit px-2"
          onClick={handleEditButton}
        >
          <ModeEditOutlineIcon />
          <h1>Edit</h1>
        </div>
      </div>

      {/* Data */}
      {!editProfile ? showDataNormal : showEditableData}
    </div>
  );
}

export default ProfileSettings;
