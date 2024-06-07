import "./SignUp.css";
import { auth, db } from "../../firebase/FirebaseConfig";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Corner from "../../assets/images/signup-screen-corner.png";
import Form, { InputField } from "../../components/Form/Form";
import Logo from "../../assets/icons/logo.svg?react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";

type UserData = {
  name: string;
  surname: string;
  email: string;
  org_name?: string; // Optional property
};

export const SignUp = () => {
  const navigate = useNavigate();
  const usersCollectionRef = collection(db, "users");

  const [form, setForm] = useState({
    name: "",
    surname: "",
    org_name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [generalError, setGeneralError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const input: InputField[] = [
    {
      name: "name",
      type: "text",
      placeholder: "Nome",
      required: true,
      onChange: handleChange,
      error: errors["name"],
    },
    {
      name: "surname",
      type: "text",
      placeholder: "Sobrenome",
      required: true,
      onChange: handleChange,
      error: errors["surname"],
    },
    {
      name: "org_name",
      type: "text",
      placeholder: "Nome da organização",
      required: false,
      onChange: handleChange,
      error: errors["org_name"],
    },
    {
      name: "email",
      type: "email",
      placeholder: "E-mail",
      required: true,
      onChange: handleChange,
      error: errors["email"],
    },
    {
      name: "password",
      type: "password",
      placeholder: "Senha",
      required: true,
      onChange: handleChange,
      error: errors["password"],
    },
    {
      name: "confirmpassword",
      type: "password",
      placeholder: "Confirmar senha",
      required: true,
      onChange: handleChange,
      error: errors["confirmpassword"],
    },
  ];

  const createUser = async () => {
    const userData: UserData = {
      name: form.name,
      surname: form.surname,
      email: form.email,
    };

    // Add org_name only if it's not empty
    if (form.org_name && form.org_name !== "") {
      userData.org_name = form.org_name;
    }

    await addDoc(usersCollectionRef, userData);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: { [key: string]: string } = {};

    // Check for empty fields and set errors
    Object.entries(form).forEach(([key, value]) => {
      if (value === "" && key !== "org_name") {
        newErrors[key] = "Campo obrigatório.";
      }
    });

    // Check email format
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(form.email)) {
      newErrors["email"] = "Formato de e-mail inválido.";
    }

    // Check password requirements
    if (form.password.length < 8 && form.password !== "") {
      newErrors["password"] = "A senha deve ter pelo menos 8 caracteres.";
    } else if (!/[a-z]/.test(form.password)) {
      newErrors["password"] =
        "A senha deve conter pelo menos uma letra minúscula.";
    } else if (!/[A-Z]/.test(form.password)) {
      newErrors["password"] =
        "A senha deve conter pelo menos uma letra maiúscula.";
    } else if (!/\d/.test(form.password)) {
      newErrors["password"] = "A senha deve conter pelo menos um número.";
    } else if (!/[@$!%*?&]/.test(form.password)) {
      newErrors["password"] =
        "A senha deve conter pelo menos um caractere especial.";
    }

    // Check passwords match
    if (form.password !== form.confirmpassword) {
      newErrors["confirmpassword"] = "As senhas não coincidem.";
    }

    // Set errors state
    setErrors(newErrors);

    // If there are errors, return without further processing
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, form.email, form.password);
      createUser();
      console.log("Cadastro realizado com sucesso, por favor, faça login");
      navigate("/login");
    } catch (error) {
      const errorMessage = (error as Error).message;

      if (errorMessage.includes("auth/email-already-in-use")) {
        setGeneralError("Este e-mail já está em uso.");
      } else if (errorMessage.includes("auth/network-request-failed")) {
        setGeneralError(
          "Erro de rede. Verifique sua conexão com a internet e tente novamente."
        );
      }
      console.log(errorMessage);
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
          cols={2}
        />
        <span className="signup-error-message">{generalError}</span>
      </div>

      <p className="signup-login-user">
        Já tem uma conta?{" "}
        <span onClick={() => navigate("/login")}>Faça seu login</span>
      </p>
    </div>
  );
};
