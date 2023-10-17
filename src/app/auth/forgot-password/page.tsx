import { Metadata } from "next";
import Logo from "@/components/shared/logo";
import Form from "./components/form";

export const metadata: Metadata = {
  title: "Forgot password | Auth",
  description: "Forgot password | Auth",
};

const ForgotPassword = () => {
  return (
    <section className="h-full flex flex-col items-center justify-center">
      <Logo />
      <Form />
    </section>
  );
};
export default ForgotPassword;
