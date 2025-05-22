import DataTable from "../Components/DataTable";
import { LoginContext } from "../Data/Contexts";
import { useContext } from "react";
import Button from "../Components/Button";
function AllUsers() {
  const { userData, setLoginCheck, SignOutButton } = useContext(LoginContext);

  return (
    <div>
      <DataTable userData={userData} />
      <Button onClick={SignOutButton} theme="dark">
        Signout
      </Button>
    </div>
  );
}

export default AllUsers;
