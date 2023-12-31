import { Metadata } from "next";
import Logo from "@/components/shared/logo"
import Form from "./components/form"

export const metadata: Metadata = {
  title: "Login | Auth",
  description: "Login | Auth",
};

const Login = () => {  
  return (
    <section className="h-full flex flex-col items-center justify-center">
      <Logo />
      <Form />
    </section>
  )
}
export default Login

