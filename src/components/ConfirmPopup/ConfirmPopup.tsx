import Button from "../Button/Button";
import "./ConfirmPopup.css";

type ConfirmPopupProps = {
  display: string;
};

export const ConfirmPopup = ({ display = "none" }: ConfirmPopupProps) => {
  const handleonClick = () => {
    window.location.reload();
  };
  return (
    <div className="popup-container" style={{ display: display }}>
      <div className="popup-block">
        <p>Suas informações foram adicionada com sucesso!</p>

        <div className="popup-btn-wrapper">
          <Button text="Fechar" variant="blue" onClick={handleonClick} />
        </div>
      </div>
    </div>
  );
};

export default ConfirmPopup;
