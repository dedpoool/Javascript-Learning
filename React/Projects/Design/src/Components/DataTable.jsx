function DataTable({ userData, className }) {
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
              className={`px-4 py-0 text-xs ${
                index % 2 == 0 ? "bg-slate-50" : "bg-white"
              }`}
            >
              {Object.values(item).map((itemChild) => (
                <td className="p-2 py-4">{itemChild}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
