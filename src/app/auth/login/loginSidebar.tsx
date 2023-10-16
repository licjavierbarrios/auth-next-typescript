import Image from "next/image";

type Props = {};
const LoginSidebar = (props: Props) => {
  return (
    <>
      <div className="relative w-96 h-96">
        <Image src="/wallpaper.svg" alt="wallpaper" fill />
      </div>
      <div>
        <h3 className="text-white text-3xl font-semibold text-center mb-5">
          Help You Shitch Careers <br /> to Become a Programmer{" "}
        </h3>
        <p className="text-gray-300 text-center text-xl">
          Additional Classes that you caen tearn
        </p>
        <p className="text-gray-300 text-center text-xl">anywhere and anytine!</p>
      </div>
    </>
  );
};
export default LoginSidebar;
