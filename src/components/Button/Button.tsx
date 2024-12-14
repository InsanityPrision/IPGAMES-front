import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import "./Button.css";

const Button: React.FC<
  PropsWithChildren & ButtonHTMLAttributes<HTMLButtonElement>
> = ({ className, children }) => {
  return <button className={className} children={children} />;
};

export default Button;
