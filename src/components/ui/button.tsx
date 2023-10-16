type Props = {
  label: string;
  type: "button" | "submit";
};
const Button = ({ label, type }: Props) => {
  return <button className="w-full bg-primary text-white py-3 px-4 rounded-xl border-2 border-transparent hover:border-primary hover:bg-transparent hover:text-primary transition-colors duration-300" type={type}>{label}</button>;
};
export default Button;
