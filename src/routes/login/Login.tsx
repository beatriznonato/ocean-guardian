import "./Login.css";
import { auth } from "../../firebase/FirebaseConfig";
import { FirebaseError } from "firebase/app";
import { signInWithEmailAndPassword } from "firebase/auth";
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
    name: "password",
    type: "password",
    placeholder: "Senha",
    required: true,
  },
];

export const Login = () => {
  const navigate = useNavigate();

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    // Check if either the email or password field is empty
    if (email === "" || password === "") {
      console.log("Input email and password");
      return;
    }

    // Sign in then navigate to the homepage
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
      console.log("User has been logged in");
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        console.log(error.message);
      }
    }
  };

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
          cols={1}
          onSubmit={handleSignIn}
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
