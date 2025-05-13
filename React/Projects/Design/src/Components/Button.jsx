import React from 'react'

export default function Button({theme, lable='', className = "", ...attributes}) {
  return (
    <>
    <button className={`text- p-4 px-8 rounded-md shadow-md font-medium ${
          theme == "dark" ? "bg-slate-900 text-white" : "bg-white text-black"
        } ${className}`}>{lable}</button>
    </>
  );
}
