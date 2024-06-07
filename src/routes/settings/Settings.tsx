import "./Settings.css";
import { auth } from "../../firebase/FirebaseConfig";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";
import Button from "../../components/Button/Button";
import { FirebaseError } from "firebase/app";

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
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
      console.log("User has been logged out");
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        console.log(error.message);
      } else {
        console.log("An error occurred");
      }
    }
  };

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

        <Button
          className="settings-logout-btn"
          text="Sair"
          variant="outline"
          onClick={logout}
        />
      </div>
    </div>
  );
};

export default Settings;
