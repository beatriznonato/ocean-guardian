import { CSSProperties } from "react";
import "./Button.css";

type ButtonProps = {
  text: string;
  variant: "white" | "blue" | "outline";
  type?: "button" | "reset" | "submit" | undefined;
  style?: CSSProperties;
  onClick?: () => void;
};

const Button = ({ text, variant, type, style, onClick }: ButtonProps) => {
  const variantType =
    variant == "white"
      ? "button-white"
      : variant == "blue"
      ? "button-blue"
      : "ouline";

  return (
    <button
      type={type}
      className={`button ${variantType}`}
      style={style}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
