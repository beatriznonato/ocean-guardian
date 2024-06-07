import "./SignUp.css";
import { auth } from "../../firebase/FirebaseConfig";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Corner from "../../assets/images/signup-screen-corner.png";
import Form, { InputField } from "../../components/Form/Form";
import Logo from "../../assets/icons/logo.svg?react";
import { createUserWithEmailAndPassword } from "firebase/auth";

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
    name: "organizationname",
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

  const [form, setForm] = useState({
    name: "",
    surname: "",
    organizationname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Object.values(form).some((field) => field === "")) {
      console.log("Todos os campos são obrigatórios");
      return;
    }

    if (form.password !== form.confirmpassword) {
      console.log("As senhas não coincidem");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, form.email, form.password);
      console.log("Cadastro realizado com sucesso, por favor, faça login");
      navigate("/login");
    } catch (error) {
      console.log((error as Error).message);
    }
  };

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
          onSubmit={handleSubmit}
          onChange={handleChange}
          cols={2}
        />
      </div>

      <p className="signup-login-user">
        Já tem uma conta?{" "}
        <span onClick={() => navigate("/login")}>Faça seu login</span>
      </p>
    </div>
  );
};
