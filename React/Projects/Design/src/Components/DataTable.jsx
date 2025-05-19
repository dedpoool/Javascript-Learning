function DataTable({ userData, className }) {
  return (
    <div className="">
      <table
        className={`table-auto border-collapse border-2 border-slate-900 ${className}`}
      >
        <thead className="border-2 border-slate-700">
          <tr className="">
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>city</th>
            <th>Pincode</th>
            <th>Counthy</th>
            <th>Password</th>
            <th>age</th>
          </tr>
        </thead>
        <tbody className="">
          {userData.map((items, index) => [
            <tr id={index} className="border-t-2 border-slate-300 p-4">
              <td id={index}>{items.firstName}</td>
              <td id={index}>{items.lastName}</td>
              <td id={index}>{items.email}</td>
              <td id={index}>{items.address}</td>
              <td id={index}>{items.city}</td>
              <td id={index}>{items.pincode}</td>
              <td id={index}>{items.country}</td>
              <td id={index}>{items.password}</td>
              <td id={index}>{items.age}</td>
            </tr>,
          ])}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
