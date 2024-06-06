import "./AnimalMonitoring.css";
import Form, { InputField } from "../../components/Form/Form";
import Navigation from "../../components/Navigation/Navigation";
import Button from "../../components/Button/Button";

const input: InputField[] = [
  { name: "especie", type: "text", placeholder: "Espécie", required: true },
  {
    name: "data",
    type: "datetime-local",
    placeholder: "Data e Hora",
    required: true,
  },
  {
    name: "descricao",
    type: "text",
    placeholder: "Descrição do Animal",
    required: true,
  },
  {
    name: "localizacao",
    type: "text",
    placeholder: "Localização",
    required: true,
  },
  {
    name: "comportamento",
    type: "text",
    placeholder: "Comportamento Observado",
    required: true,
  },
  {
    name: "impacto",
    type: "text",
    placeholder: "Impacto Humano",
    required: true,
  },
  {
    name: "identificacao",
    type: "text",
    placeholder: "N° de Identificação",
    required: true,
  },
  { name: "notas", type: "text", placeholder: "Notas", required: true },
];

export const AnimalMonitoring = () => {
  return (
    <div className="animal-monitoring-container">
      <Navigation tab="animal" />
      <div className="animal-monitoring-form">
        <h1>Monitoramento de Animais Marítimos</h1>
        <Form
          cols={2}
          inputFields={input}
          btnVariant={"blue"}
          btnClassName="animal-monitoring-form-btn"
          onClick={() => undefined}
          method={"post"}
        />
        <Button
          className="animal-monitoring-return-btn"
          text="Voltar"
          variant="outline"
        />
      </div>
    </div>
  );
};

export default AnimalMonitoring;
