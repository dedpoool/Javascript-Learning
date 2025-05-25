import DataTable from "../Components/DataTable";
import { LoginContext } from "../Data/Contexts";
import { useContext } from "react";
import Button from "../Components/Button";
function AllUsers() {


  const { userData, setLoginCheck } = useContext(LoginContext);



  return (
    <div>
      <DataTable userData={userData} />

    </div>
  );
}

export default AllUsers;
