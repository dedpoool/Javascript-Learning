import { Link } from "react-router";
function Options({ options, ...attributes }) {
  return (
    <div className=" text-black bg-white drop-shadow-md absolute bottom-30 left-14">
      <ul className="flex flex-col gap-2 p-4">
        {options.map((item) => (
          <li {...attributes}>
            <Link to={"/settings/profileSettings"}>{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Options;
