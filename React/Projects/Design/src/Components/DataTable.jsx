import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import { useContext } from "react";
import { LoginContext } from "../Data/Contexts";
import { NavLink, Link } from "react-router";
function DataTable({ userData, className }) {
  const { setCurrentUserData, currentUserData, setUserData } =
    useContext(LoginContext);
  // Edit table user function ☀️
  const editTableUser = (rowID) => {
    console.log("the table row no is :", rowID);
    setCurrentUserData({ ...userData[rowID], index: rowID });
  };
  console.log("value of current user in table: ", currentUserData);

  // Delete table user Function ☀️`
  const deleteTableUser = (rowID) => {
    console.log("you want to delete:", userData[rowID].email);
    const copyUserData = [...userData];
    setUserData(copyUserData.filter((item, index) => index != rowID));
  };
  return (
    <div className=" w-full">
      <table
        className={`table-auto border-collapse border-2 border-slate-50 rounded-md w-full ${className}`}
      >
        <thead className="border-2 bg-slate-800 rounded-sm text-white text-sm p-4">
          <tr className="">
            {Object.keys(...userData).map((item) => (
              <th className="px-4 py-3 text-left">{item}</th>
            ))}
          </tr>
        </thead>

        <tbody className="">
          {userData.map((item, index) => (
            <tr
              id={index}
              className={`px-4 py-0 text-xs ${
                index % 2 == 0 ? "bg-slate-50" : "bg-white"
              }`}
            >
              {Object.values(item).map((itemChild) => (
                <td className="p-2 py-4">{itemChild}</td>
              ))}

              <td onClick={() => editTableUser(index)}>
                <Link to={"/settings/profileSettings"}>
                  <EditIcon color="primary" />
                </Link>
              </td>
              <td onClick={() => deleteTableUser(index)}>
                <DeleteForeverIcon color="error" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
