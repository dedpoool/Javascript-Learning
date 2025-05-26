import DataTable from "../Components/DataTable";
import { LoginContext } from "../Data/Contexts";
import { useContext } from "react";
import Button from "../Components/Button";
function AllUsers() {
  const { userData, currentUserEmail } = useContext(LoginContext);

  return (
    <div>
      <DataTable userData={userData} />
      <h1>The Current user email is {currentUserEmail}</h1>
    </div>
  );
}

export default AllUsers;
