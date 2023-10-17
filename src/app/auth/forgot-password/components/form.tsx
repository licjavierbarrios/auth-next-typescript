"use client";
import Button from "@/components/ui/button";
import ButtonIcon from "@/components/ui/button-icon";
import Input from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { RiGoogleFill, RiFacebookFill, RiGithubFill } from "react-icons/ri";
const Form = () => {
  const router = useRouter();
  return (
    <div className="w-full max-w-md">
      <div className="mb-5">
        <h2 className="text-2xl font-semibold">Forgot password?</h2>
        <p className="text-gray-500 text-sm">
          Please enter your email and password to enter the application
        </p>
      </div>
      <form className="w-full">
        <Input type="text" placeholder="Email" />

        <Button type="submit" label="Send instructions" />

        <div className="flex items-center justify-center gap-x-2 mt-5 mb-5">
          <p className="text-gray-500">have account?</p>
          <button
            onClick={() => router.push("/auth/login")}
            type="button"
            className="hover:text-primary font-semibold transition-colors duration-300"
          >
            Login
          </button>
        </div>

        <div className="flex items-center justify-center gap-x-2">
          <p className="text-gray-500">dont have account?</p>
          <button
            onClick={() => router.push("/auth/register")}
            type="button"
            className="hover:text-primary font-semibold transition-colors duration-300"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};
export default Form;
