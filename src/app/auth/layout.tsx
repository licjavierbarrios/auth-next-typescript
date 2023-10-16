import { ReactNode } from "react";
import LoginSidebar from "./login/loginSidebar";

type Props = {
  children: ReactNode;
};
const AuthLayout = ({ children }: Props) => {
  return (
    <main className="min-h-screen grid  grid-cols-1 lg:grid-cols-2 p-5 lg:p-8">
      <section className="h-full flex flex-col items-center justify-center gap-y-5 bg-primary rounded-2xl">
        <LoginSidebar />
      </section>
      {children}
    </main>
  );
};
export default AuthLayout;


