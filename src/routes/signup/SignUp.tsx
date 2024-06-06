import "./SignUp.css";
import Corner from "../../assets/images/signup-screen-corner.png";
import Form, { InputField } from "../../components/Form/Form";
import { useNavigate } from "react-router-dom";

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

      <svg
        width="74"
        viewBox="0 0 74 75"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.48092 18.4128C26.727 -14.9564 70.1069 1.72819 74 31.2043C72.8877 45.6643 62.3208 55.1189 45.6362 49.5573L28.9516 43.9958C21.1655 42.3273 13.9355 43.4396 10.5986 49.5573C8.5468 57.6155 16.1601 57.3435 27.8393 56.7873C36.6111 56.3696 40.119 56.5336 43.1548 56.6755C44.161 56.7225 45.1154 56.7671 46.1924 56.7873C48.417 56.7873 48.884 58.2612 47.3047 59.5681C45.3079 60.7609 41.9779 61.082 39.1136 61.3583C37.7932 61.4856 36.5717 61.6034 35.6255 61.7927C32.8447 62.3488 33.4009 64.0173 35.0693 64.5734C42.2993 67.3542 50.0854 65.6858 61.7646 58.4558C62.4091 58.0568 63.6886 57.0739 65.2347 55.8862C66.2254 55.1251 67.3256 54.28 68.4385 53.4504C69.5638 52.9137 69.9494 53.0265 70.1069 54.0065C53.4225 86.8196 5.59334 78.4773 0.0317213 41.7712C-0.524499 32.3166 6.19355 20.5881 23.3901 23.4181C24.8365 23.8639 26.2003 24.2832 27.4923 24.6804C33.9534 26.6669 38.6193 28.1015 42.8555 29.5358C50.0854 32.3166 59.54 31.7604 63.4331 25.6428C63.9301 24.1963 64.1771 23.3514 63.9893 21.1935C63.7356 16.9458 59.7942 17.017 51.1977 18.4128C48.2665 18.8887 46.7221 18.9187 43.9678 18.9689C36.7214 18.8758 32.9458 18.7858 27.8393 18.4128C26.1709 18.4128 23.6372 17.4772 26.1709 15.632C27.9359 14.5463 29.4305 14.2028 32.8447 13.9636L37.2939 13.9636C39.5185 13.4074 40.5029 12.1239 38.4062 11.1828C28.9516 7.28973 15.604 10.0705 6.14937 20.6374C3.69999 21.1047 3.43396 20.5438 4.48092 18.4128ZM25.0587 29.5358C11.1549 25.6428 4.44896 31.7128 2.81262 43.9958C9.45722 36.4653 14.6905 31.4045 32.8447 37.8063C39.1357 40.8124 44.7876 43.3408 49.5294 45.1081C62.321 49.0012 70.072 43.4139 71.2194 30.6481C59.7056 45.9999 47.651 40.2716 25.9977 29.9819L25.0587 29.5358ZM41.7433 45.6643C41.3729 45.4702 40.9997 45.274 40.6239 45.0763C29.1502 39.0426 15.2514 31.7335 4.48092 47.8889C3.36878 50.1135 5.2043 51.0697 6.14954 49.5573C14.4918 36.2097 24.8928 39.1442 41.7433 45.6643ZM67.3263 25.0866C58.984 37.322 51.3552 37.3719 31.1764 29.5358C50.6417 39.6737 61.2087 40.1027 68.9948 26.1989C69.5509 24.5305 67.9843 24.1216 67.3263 25.0866Z"
          fill="white"
        />
      </svg>

      <h1>Faça sua conta!</h1>
      <div className="signup-form-wrapper">
        <Form
          inputFields={input}
          method="POST"
          btnVariant="white"
          btnText="Cadastrar"
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
