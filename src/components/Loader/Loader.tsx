// Loader.tsx
import { ThreeDots } from "react-loader-spinner";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <ThreeDots
        width="50"
        color="var(--color--white)"
        radius="9"
        ariaLabel="three-dots-loading"
      />
    </div>
  );
};

export default Loader;
