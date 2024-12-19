import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { Link } from "react-router";
import "./Button.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  linkTo?: string;
}

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  className,
  children,
  disabled,
  onClick,
  linkTo,
}) => {
  return linkTo ? (
    <Link className={className} children={children} to={linkTo} />
  ) : (
    <button
      className={className}
      children={children}
      disabled={disabled}
      onClick={onClick}
    />
  );
};

export default Button;
