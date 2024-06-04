import WelcomeSlide from "../WelcomeSlide/WelcomeSlide";
import SlideOne from "../../assets/images/welcome-screen-one.png";
import SlideTwo from "../../assets/images/welcome-screen-two.png";
import SlideThree from "../../assets/images/welcome-screen-three.png";
import SlideFour from "../../assets/images/welcome-screen-four.png";
import "./WelcomeSlider.css";
import Button from "../Button/Button";
import { useState } from "react";

const WelcomeSlider = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const slides = [
    { img: SlideOne, heading: "Bem Vindo ao OceanGuardian", text: "" },
    {
      img: SlideTwo,
      heading: "Explore e Proteja",
      text: "Junte-se a mergulhadores e pesquisadores na missão de monitorar e conservar a vida marinha e a saúde dos oceanos.",
    },
    {
      img: SlideThree,
      heading: "Identifique e Mitigue",
      text: "Ajude a documentar fontes de poluição marinha e contribua para ações efetivas de mitigação e proteção dos oceanos.",
    },
    {
      img: SlideFour,
      heading: "Colaboracao em Comunidade",
      text: "Engaje-se com uma comunidade global de mergulhadores e pesquisadores. Compartilhe seus achados, colabore em projetos de conservação e ajude a construir um banco de dados robusto e acessível.",
    },
  ];

  const Pagination = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    console.log(currentSlide);
  };

  const getSlideLeft = () => {
    return `-${currentSlide * 100}vw`;
  };

  return (
    <div className="welcome-slider-container">
      <div className="welcome-slider-wrapper" style={{ left: getSlideLeft() }}>
        {slides.map((slide, index) => (
          <WelcomeSlide
            key={index}
            heading={slide.heading}
            text={slide.text}
            img={slide.img}
            isFirst={index === 0}
          />
        ))}
      </div>

      <div className="welcome-slider-btn-nav">
        <div className="navigation-container">
          <div className="navigation-circle" style={{ backgroundColor: currentSlide === 0 ? "var(--color--white)" : "#97b2df" }}></div>
          <div className="navigation-circle" style={{ backgroundColor: currentSlide === 1 ? "var(--color--white)" : "#97b2df" }}></div>
          <div className="navigation-circle" style={{ backgroundColor: currentSlide === 2 ? "var(--color--white)" : "#97b2df" }}></div>
          <div className="navigation-circle" style={{ backgroundColor: currentSlide === 3 ? "var(--color--white)" : "#97b2df" }}></div>
        </div>

        {currentSlide === 3 ? (
          <Button text="Começar" variant="white" />
        ) : (
          <Button text="Próximo" variant="white" onClick={Pagination} />
        )}
      </div>
    </div>
  );
};

export default WelcomeSlider;
