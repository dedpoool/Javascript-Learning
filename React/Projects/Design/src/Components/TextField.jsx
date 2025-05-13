import React from "react";

export default function TextField({ theme, errorCode='normal', className = "", ...attributes }) {
  return (
    <>
      <input
        className={`p-2 border-2 rounded-md ${
          theme == "dark" ? "bg-slate-900 text-white" : "bg-white text-black"
        }
        ${errorCode == 'red' && 'border-red-500'}
        ${errorCode == 'green' && 'border-green-500'}
        ${className}`}
        {...attributes}
      />
    </>
  );
}
