import React from "react";

export default function TextField({
  onChange = "",
  name = "",
  type = "Text",
  theme,
  errorCode = "normal",
  className = "",
  ...attributes
}) {
  return (
    <>
      <input
        name={name}
        onChange={(e) => {
          onChange(e);
        }}
        type={type}
        className={`p-2 border-2 rounded-md ${
          theme == "dark" ? "bg-slate-900 text-white" : "bg-white text-black"
        }
        ${errorCode == "red" && "border-red-500"}
        ${errorCode == "green" && "border-green-500"}
        ${className}`}
        {...attributes}
      />
    </>
  );
}
