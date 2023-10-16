'use client'
import { cn } from "@/libs/utils";
import { useState } from "react";
import { RiLockLine, RiLockUnlockLine } from "react-icons/ri";

type Props = {
  type: "text" | "password";
  placeholder: string;
  className?: string;
};
const Input = ({ type, placeholder, className }: Props) => {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <div className="w-full relative mb-5">
      <input
        type={type === "text" ? "text" : showPassword ? "text" : "password"}
        className={cn(
          "bg-gray-200 w-full py-3 pl-4 pr-12 outline-none rounded-xl",
          className
        )}
        placeholder={placeholder}
      />
      {type === "password" && (
        <button
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
          type="button"
        >
          {showPassword ? <RiLockUnlockLine /> : <RiLockLine />}
        </button>
      )}
    </div>
  );
};
export default Input;
