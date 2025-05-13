import React from 'react'

export default function TextArea({theme, className = "", ...attributes}) {
  return (
    <>
    <textarea className={`p-2 border-2 rounded-md ${
          theme == "dark" ? "bg-slate-900 text-white" : "bg-white text-black"
        } ${className}`} {...attributes}></textarea> 
    </>
  )
}
