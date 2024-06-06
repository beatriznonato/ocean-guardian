import "./Settings.css";
import Navigation from "../../components/Navigation/Navigation";
import Button from "../../components/Button/Button";

const accountLabel = [
  "Nome",
  "Sobrenome",
  "Nome da Organização",
  "E-mail",
  "Senha",
];
const accountData = [
  "Ana Catarina",
  "Nonato Soares",
  "Centro de Pesquisa Aquática",
  "anacatarina@meuemail.com.br",
  "MinhaSenhaAqui",
];

export const Settings = () => {
  return (
    <div className="settings-container">
      <Navigation tab={undefined} />
      <div className="settings-content">
        <h1>Configurações</h1>
        <h2 className="settings-subheading">Detalhes da Conta</h2>
        <div className="settings-account-info">
          <div className="account-label">
            {accountLabel.map((text, idx) => (
              <p key={idx}>{text}</p>
            ))}
          </div>
          <div className="account-data">
            {accountData.map((text, idx) => (
              <p key={idx}>{text}</p>
            ))}
          </div>
        </div>

        <Button className="settings-logout-btn" text="Sair" variant="outline" />
      </div>
    </div>
  );
};

export default Settings;
