import "./WelcomeSlide.css";

type WelcomeSlideProps = {
  isFirst?: boolean;
  heading: string;
  text?: string;
  img: string;
};

const WelcomeSlide = ({ heading, text, img, isFirst = true }: WelcomeSlideProps) => {
  return (
    <div className="welcome-slide-container">
      <img className="welcome-slide-img" src={img} alt="" />
      <div className="welcome-slide-blur"></div>
      <div className="welcome-slide-text">
        <h1 style={{ marginTop: isFirst === true ? "75px" : "0" }}>{heading}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default WelcomeSlide;
