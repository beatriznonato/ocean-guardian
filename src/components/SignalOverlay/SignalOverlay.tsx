import "./SignalOverlay.css";
import Logo from '../../assets/icons/arrow.svg?react'

type SignalOverlayProps = {
  text: string;
  onClose: () => void;
};

const SignalOverlay = ({ text, onClose }: SignalOverlayProps) => (
  <div className="signal-overlay-container">
    <div className="signal-overlay-content">
      <p>{text}</p>
      <button onClick={onClose} className="signal-overlay-btn">
        <Logo />
        Voltar
      </button>
    </div>
  </div>
);

export default SignalOverlay;
