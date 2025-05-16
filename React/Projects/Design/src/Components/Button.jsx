import React from "react";

export default function Button({
  onClick = "",
  theme,
  children,
  className = "",
  ...attributes
}) {
  return (
    <>
      <button
      onClick={onClick != '' ? onClick : undefined}
        className={`text- p-4 px-8 rounded-md shadow-md font-medium ${
          theme == "dark" ? "bg-slate-900 text-white" : "bg-white text-black"
        } ${className}`}
        {...attributes}
      >
        {children}
      </button>
    </>
  );
}
