import React from "react";
import { CircleCheck, CircleX } from "lucide-react";

export default function PasswordValueCheck({children, valid = false}) {
return (
<div className="flex gap-1 text-xs text-slate-400 items-center flex-row-reverse">
    <h1>{children}</h1>
    {valid ? <CircleCheck size={16} color='white' className="bg-green-600 rounded-full"/> : <CircleX color="white" size={16} className="bg-red-600 rounded-full" />} 
</div>
);
}
