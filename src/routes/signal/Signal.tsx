import "./Signal.css";
import Navigation from "../../components/Navigation/Navigation";
import Arrow from "../../assets/icons/arrow.svg?react";
import { RefObject, useRef, useState } from "react";
import SignalOverlay from "../../components/SignalOverlay/SignalOverlay";

type SignalSectionProps = {
  title: string;
  sentences: string[];
  targetRef: RefObject<HTMLDivElement>;
  onSentenceClick: (sentence: string) => void;
};

const SignalSection = ({
  title,
  sentences,
  targetRef,
  onSentenceClick,
}: SignalSectionProps) => (
  <section className="signal-section" ref={targetRef}>
    <h2 className="signal-subheading">{title}</h2>
    <div className="signal-sentences">
      {sentences.map((sentence, index) => (
        <button
          key={index}
          className="signal-sentence-btn"
          onClick={() => onSentenceClick(sentence)}
        >
          {sentence} <Arrow />
        </button>
      ))}
    </div>
  </section>
);

const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
  if (ref.current != null) {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

export const Signal = () => {
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [overlayText, setOverlayText] = useState("");

  const sectionOneRef = useRef<HTMLDivElement>(null);
  const sectionTwoRef = useRef<HTMLDivElement>(null);
  const sectionThreeRef = useRef<HTMLDivElement>(null);
  const sectionFourRef = useRef<HTMLDivElement>(null);

  const signals = {
    security: {
      sentences: [
        "Subir",
        "Parada",
        "Parada de segurança",
        "Problema de ar",
        "Problema no regulador",
        "Problema com a máscara",
        "Falta de ar",
        "Estou com frio",
      ],
      targetRef: sectionOneRef,
    },
    emergency: {
      sentences: ["Subida de emergência", "Perigo", "Procure ajuda", "Socorro"],
      targetRef: sectionTwoRef,
    },
    instruction: {
      sentences: [
        "Parar",
        "Descer",
        "Fique aqui",
        "Voltar",
        "Juntos",
        "Em dupla",
        "Suba devagar",
      ],
      targetRef: sectionThreeRef,
    },
    communication: {
      sentences: [
        "Me siga",
        "Tudo bem?",
        "Estou bem",
        "Esperar",
        "Olhe aqui",
        "Juntos",
        "Distância segura",
        "Suba devagar",
        "Desça devagar",
      ],
      targetRef: sectionFourRef,
    },
  };

  const handleSentenceClick = (sentence: string) => {
    setOverlayText(sentence);
    setOverlayVisible(true);
  };

  const closeOverlay = () => {
    setOverlayVisible(false);
    setOverlayText("");
  };

  return (
    <div className="signal-container">
      <Navigation tab="signal" />
      <div className="signal-content">
        <div className="signal-heading-container">
          <h1>Sinais</h1>
        </div>

        <div className="signal-scroll-area">
          <section className="signal-section">
            <h2 className="signal-subheading">Atalhos</h2>
            <div className="signal-shortcut">
              <button
                className="signal-shortcut-btn"
                onClick={() => scrollTo(sectionOneRef)}
              >
                Segurança
              </button>
              <button
                className="signal-shortcut-btn"
                onClick={() => scrollTo(sectionTwoRef)}
              >
                Emergência
              </button>
              <button
                className="signal-shortcut-btn"
                onClick={() => scrollTo(sectionThreeRef)}
              >
                Instruções
              </button>
              <button
                className="signal-shortcut-btn"
                onClick={() => scrollTo(sectionFourRef)}
              >
                Comunicação básica
              </button>
            </div>
          </section>

          <SignalSection
            title="Security"
            sentences={signals.security.sentences}
            targetRef={signals.security.targetRef}
            onSentenceClick={handleSentenceClick}
          />
          <SignalSection
            title="Emergency"
            sentences={signals.emergency.sentences}
            targetRef={signals.emergency.targetRef}
            onSentenceClick={handleSentenceClick}
          />
          <SignalSection
            title="Instruction"
            sentences={signals.instruction.sentences}
            targetRef={signals.instruction.targetRef}
            onSentenceClick={handleSentenceClick}
          />
          <SignalSection
            title="Communication"
            sentences={signals.communication.sentences}
            targetRef={signals.communication.targetRef}
            onSentenceClick={handleSentenceClick}
          />
        </div>
      </div>
      {overlayVisible && (
        <SignalOverlay text={overlayText} onClose={closeOverlay} />
      )}
    </div>
  );
};

export default Signal;
