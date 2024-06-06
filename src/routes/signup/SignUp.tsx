import "./SignUp.css";
import { useNavigate } from "react-router-dom";
import Corner from "../../assets/images/signup-screen-corner.png";
import Form, { InputField } from "../../components/Form/Form";
import Logo from "../../assets/icons/logo.svg?react";

const input: InputField[] = [
  {
    name: "name",
    type: "text",
    placeholder: "Nome",
    required: true,
  },
  {
    name: "surname",
    type: "text",
    placeholder: "Sobrenome",
    required: true,
  },
  {
    name: "organization-name",
    type: "text",
    placeholder: "Nome da organização",
    required: true,
  },
  {
    name: "email",
    type: "email",
    placeholder: "E-mail",
    required: true,
  },
  {
    name: "password",
    type: "password",
    placeholder: "Senha",
    required: true,
  },
  {
    name: "confirmpassword",
    type: "password",
    placeholder: "Confirmar senha",
    required: true,
  },
];

export const SignUp = () => {
  const navigate = useNavigate();

  return (
    <div className="signup-container">
      <img className="signup-image corner-one" src={Corner} alt="" />
      <img className="signup-image corner-two" src={Corner} alt="" />

      <Logo />

      <h1>Faça sua conta!</h1>
      <div className="signup-form-wrapper">
        <Form
          inputFields={input}
          method="POST"
          btnVariant="white"
          btnText="Cadastrar"
          onClick={() => navigate("/login")}
          cols={2}
        />
      </div>

      <p className="signup-login-user">
        Não tem uma conta?{" "}
        <span onClick={() => navigate("/login")}>Faça seu cadastro</span>
      </p>
    </div>
  );
};
