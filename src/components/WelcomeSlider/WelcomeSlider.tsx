import WelcomeSlide, { WelcomeSlideProps } from "../WelcomeSlide/WelcomeSlide";
import SlideOne from "../../assets/images/welcome-screen-one.png";
import SlideTwo from "../../assets/images/welcome-screen-two.png";
import SlideThree from "../../assets/images/welcome-screen-three.png";
import SlideFour from "../../assets/images/welcome-screen-four.png";
import "./WelcomeSlider.css";
import Button from "../Button/Button";
import { useEffect, useRef, useState } from "react";
import { useScroll } from "framer-motion";
import { useNavigate } from "react-router-dom";

const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
  if (ref.current != null) {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

const WelcomeSlider = () => {
  const slideOneRef = useRef<HTMLDivElement>(null);
  const slideTwoRef = useRef<HTMLDivElement>(null);
  const slideThreeRef = useRef<HTMLDivElement>(null);
  const slideFourRef = useRef<HTMLDivElement>(null);

  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({
    container: targetRef,
    offset: ["start start", "end end"],
  });

  const [currentScrollX, setCurrentScrollX] = useState(0);
  useEffect(() => {
    const unsubscribeX = scrollXProgress.on("change", (latest) => {
      setCurrentScrollX(latest);
    });

    return () => {
      unsubscribeX();
    };
  }, [scrollXProgress]);

  const navigate = useNavigate();

  const ButtonOnClick = () => {
    if (currentScrollX < 0.25) {
      return scrollTo(slideTwoRef);
    } else if (currentScrollX > 0.25 && currentScrollX < 0.5) {
      return scrollTo(slideThreeRef);
    } else if (currentScrollX > 0.5 && currentScrollX < 0.75) {
      return scrollTo(slideFourRef);
    } else return navigate("/Dashboard/Dashboard");
  };

  const slides: WelcomeSlideProps[] = [
    {
      img: SlideOne,
      heading: "Bem Vindo ao OceanGuardian",
      targetRef: slideOneRef,
    },
    {
      img: SlideTwo,
      heading: "Explore e Proteja",
      text: "Junte-se a mergulhadores e pesquisadores na missão de monitorar e conservar a vida marinha e a saúde dos oceanos.",
      targetRef: slideTwoRef,
    },
    {
      img: SlideThree,
      heading: "Identifique e Mitigue",
      text: "Ajude a documentar fontes de poluição marinha e contribua para ações efetivas de mitigação e proteção dos oceanos.",
      targetRef: slideThreeRef,
    },
    {
      img: SlideFour,
      heading: "Colaboracao em Comunidade",
      text: "Engaje-se com uma comunidade global de mergulhadores e pesquisadores. Compartilhe seus achados, colabore em projetos de conservação e ajude a construir um banco de dados robusto e acessível.",
      targetRef: slideFourRef,
    },
  ];

  return (
    <div className="welcome-slider-container">
      <div className="welcome-slider-wrapper" ref={targetRef}>
        {slides.map((slide, index) => (
          <WelcomeSlide
            key={index}
            heading={slide.heading}
            text={slide.text}
            img={slide.img}
            targetRef={slide.targetRef}
            isFirst={index === 0}
          />
        ))}
      </div>

      <div className="welcome-slider-btn-nav">
        <div className="navigation-container">
          <div
            className="navigation-circle"
            style={{
              backgroundColor:
                currentScrollX < 0.25 ? "var(--color--white)" : "#97b2df",
            }}
          ></div>
          <div
            className="navigation-circle"
            style={{
              backgroundColor:
                currentScrollX > 0.25 && currentScrollX < 0.5
                  ? "var(--color--white)"
                  : "#97b2df",
            }}
          ></div>
          <div
            className="navigation-circle"
            style={{
              backgroundColor:
                currentScrollX > 0.5 && currentScrollX < 0.75
                  ? "var(--color--white)"
                  : "#97b2df",
            }}
          ></div>
          <div
            className="navigation-circle"
            style={{
              backgroundColor:
                currentScrollX > 0.75 && currentScrollX <= 1
                  ? "var(--color--white)"
                  : "#97b2df",
            }}
          ></div>
        </div>

        <Button
          text={currentScrollX > 0.75 ? "Começar" : "Próximo"}
          variant="white"
          onClick={ButtonOnClick}
        />
      </div>
    </div>
  );
};

export default WelcomeSlider;
