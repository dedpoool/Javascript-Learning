import Button from "./Button";

function ProfileImage({
  className = "",
  imageLable = "Upload Image",
  ...attributes
}) {
  return (
    <div
      className={`flex flex-col justify-center items-center rounded-full size-1/2 ${className}`}
    >
      <img className={``} alt="" {...attributes} />
      {imageLable != false && <h1 className="text-xs">{imageLable}</h1>}
    </div>
  );
}

export default ProfileImage;
