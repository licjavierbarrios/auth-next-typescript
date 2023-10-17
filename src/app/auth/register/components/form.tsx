'use client'
import Button from "@/components/ui/button";
import ButtonIcon from "@/components/ui/button-icon";
import Input from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { RiGoogleFill, RiFacebookFill, RiGithubFill } from "react-icons/ri";

const Form = () => {
  const router = useRouter()
  return (
    <div className="w-full max-w-md">
      <div className="mb-5">
        <h2 className="text-2xl font-semibold">Register</h2>
        <p className="text-gray-500 text-sm">
          Please enter your email and password to enter the application
        </p>
      </div>
      <form className="w-full">
        <Input type="text" placeholder="Name" />
        <Input type="text" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confirm password" />

        <Button type="submit" label="Create account" />
        <div className="flex items-center justify-center gap-x-2 mt-5 mb-10">
          <p className="text-gray-500">have account?</p>
          <button
            onClick={() => router.push("/auth/login")}
            type="button"
            className="hover:text-primary font-semibold transition-colors duration-300"
          >
            Login
          </button>
        </div>
        <div className="mb-5">
          <hr className="border-2" />
          <div className="flex justify-center">
            <span className="bg-white px-8 -mt-[14px]">or</span>
          </div>
        </div>
        <div className="flex items-center justify-center gap-x-4">
          <ButtonIcon icon={RiGoogleFill} />
          <ButtonIcon icon={RiFacebookFill} />
          <ButtonIcon icon={RiGithubFill} />
        </div>
      </form>
    </div>
  );
};
export default Form;
