import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import "./Button.css";

const Button: React.FC<
  PropsWithChildren & ButtonHTMLAttributes<HTMLButtonElement>
> = ({ className, children, disabled, onClick }) => {
  return (
    <button
      className={className}
      children={children}
      disabled={disabled}
      onClick={onClick}
    />
  );
};

export default Button;
