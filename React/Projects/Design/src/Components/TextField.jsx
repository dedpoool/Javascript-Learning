import React from "react";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function TextField({
  onChange = "",
  name = "",
  type = "text",
  showPasswordIcon = false,
  passwordValidator = true,
  underLabel = "",
  theme,
  errorCode = "normal",
  className = "",
  foucusBorder = true,
  ...attributes
}) {
  // password show state
  const [showPassword, setShowPassword] = useState(false);

  const passwordShowHandeler = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-full flex flex-col gap-2">
      <div className="w-full flex relative items-center justify-end">
        {/* to render the show password icon 
      if the type is password and it's enable too (that is by defult) */}
        {showPasswordIcon && type == "password" && (
          <div className="absolute mr-4" onClick={passwordShowHandeler}>
            {
              showPassword ? (
                <Eye color="#A9A3AF" /> //if the show password state is enable
              ) : (
                <EyeOff color="#A9A3AF" />
              ) //if the show password state is disabled
            }
          </div>
        )}

        <input
          name={name}
          onChange={(e) => {
            onChange(e);
          }}
          type={!showPassword && type == "password" ? "password" : "text"}
          className={`p-2 border-2 rounded-md ${
            theme == "dark" ? "bg-slate-900 text-white" : "bg-white text-black"
          }
        ${errorCode == "red" && "border-red-500"}
        ${errorCode == "green" && "border-green-500"}
        ${foucusBorder && "outline-none"}
        ${className}`}
          {...attributes}
        />
      </div>
      {underLabel !== "" && (
        <h1 className="text-xs text-red-500 font-medium ml-1">{underLabel}</h1>
      )}
    </div>
  );
}
