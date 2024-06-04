import { CSSProperties } from "react";
import "./Button.css";

type ButtonProps = {
  text: string;
  variant: "white" | "blue" | "outline";
  style?: CSSProperties;
  onClick?: () => void;
};

const Button = ({ text, variant, style, onClick }: ButtonProps) => {
  const variantType =
    variant == "white"
      ? "button-white"
      : variant == "blue"
      ? "button-blue"
      : "ouline";

  return (
    <button className={`button ${variantType}`} style={style} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
