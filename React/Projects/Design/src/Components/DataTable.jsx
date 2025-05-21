import { useState } from "react";
function DataTable({ userData, className }) {
  // state for diffrent colours for the row
  const [rowColour, setRowColour] = useState(true);

  return (
    <div className="">
      <table
        className={`table-auto border-collapse border-2 border-slate-900 ${className}`}
      >
        <thead className="border-2 border-slate-700 p-4">
          <tr className="">
            {Object.keys(...userData).map((item) => (
              <th className="px-4 py-2 text-left">{item}</th>
            ))}
          </tr>
        </thead>

        <tbody className="">
          {userData.map((item) => (
            <tr className={`p-4 ${rowColour ? "bg-blue-600" : "bg-slate-600"}`}>
              {Object.values(item).map((itemChild) => (
                <td className="p-4">{itemChild}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
