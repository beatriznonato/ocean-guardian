import { RefObject } from "react";
import "./WelcomeSlide.css";

export type WelcomeSlideProps = {
  isFirst?: boolean;
  heading: string;
  text?: string;
  img: string;
  targetRef: RefObject<HTMLDivElement>;
};

const WelcomeSlide = ({
  heading,
  text,
  img,
  targetRef,
  isFirst = true,
}: WelcomeSlideProps) => {
  return (
    <div className="welcome-slide-container" ref={targetRef}>
      <img className="welcome-slide-img" src={img} alt="" />
      <div className="welcome-slide-blur"></div>
      <div className="welcome-slide-text">
        <h1 style={{ marginTop: isFirst === true ? "75px" : "0" }}>
          {heading}
        </h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default WelcomeSlide;
