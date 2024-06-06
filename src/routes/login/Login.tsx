import "./Login.css";
import { useNavigate } from "react-router-dom";
import Form, { InputField } from "../../components/Form/Form";
import LoginImage from "../../assets/images/login-screen.png";
import Logo from "../../assets/icons/logo.svg?react";

const input: InputField[] = [
  {
    name: "email",
    type: "email",
    placeholder: "E-mail",
    required: true,
  },
  {
    name: "senha",
    type: "password",
    placeholder: "Senha",
    required: true,
  },
];

export const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <div className="login-form-wrapper">
        <Logo />
        <h1>Bem vindo de volta ao OceanGuardian!</h1>
        <Form
          inputFields={input}
          method="POST"
          btnVariant="white"
          btnText="Entrar"
          onClick={() => navigate("/dashboard")}
          cols={1}
        />
        <p className="login-add-user">
          Não tem uma conta?{" "}
          <span onClick={() => navigate("/sign-up")}>Faça seu cadastro</span>
        </p>
      </div>
      <img className="login-img" src={LoginImage} alt="" />
    </div>
  );
};

export default Login;
