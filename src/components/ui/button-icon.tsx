import { IconType } from "react-icons";

type Props = {
  icon: IconType
}
const ButtonIcon = ({icon: Icon}: Props) => {
  return (
    <button type="button" className="p-4 bg-gray-100 rounded-xl text-primary border-2 border-transparent hover:bg-transparent hover:border-primary transition-colors duration-300">
      <Icon />
    </button>
  )
}
export default ButtonIcon;