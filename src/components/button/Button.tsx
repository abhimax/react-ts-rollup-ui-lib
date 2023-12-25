import { FC } from "react";

type Props = {
  text: String;
};
const Button: FC<Props> = ({ text }) => {
  return <button>{text}</button>;
};
export default Button;
