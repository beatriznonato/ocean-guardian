import { CSSProperties } from "react";
import "./Button.css";

type ButtonProps = {
  text: string;
  variant: "white" | "blue" | "outline";
  type?: "button" | "reset" | "submit" | undefined;
  style?: CSSProperties;
  onClick?: () => void;
  className?: string;
};

const Button = ({
  text,
  variant,
  type,
  style,
  onClick,
  className,
}: ButtonProps) => {
  const variantType =
    variant == "white"
      ? "button-white"
      : variant == "blue"
      ? "button-blue"
      : "button-outline";

  return (
    <button
      type={type}
      className={`button ${variantType} ${className}`}
      style={style}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
