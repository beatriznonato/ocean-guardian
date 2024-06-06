import "./VegetationMonitoring.css";
import Navigation from "../../components/Navigation/Navigation";
import Form, { InputField } from "../../components/Form/Form";
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
    placeholder: "Descrição da Vegetação",
    required: true,
  },
  {
    name: "localizacao",
    type: "text",
    placeholder: "Localização",
    required: true,
  },
  {
    name: "ambientais",
    type: "text",
    placeholder: "Condições Ambientais",
    required: true,
  },
  {
    name: "notas",
    type: "text",
    placeholder: "Notas",
    required: true,
  },
  {
    name: "saude",
    type: "text",
    placeholder: "Condições de Saúde",
    required: true,
  }
];

export const VegetationMonitoring = () => {
  return (
    <div className="vegetation-monitoring-container">
      <Navigation tab="vegetation" />
      <div className="vegetation-monitoring-form">
        <h1>Monitoramento de Vegetação Marinha</h1>
        <Form
          cols={2}
          inputFields={input}
          btnVariant={"blue"}
          btnClassName="vegetation-monitoring-form-btn"
          onClick={() => undefined}
          method={"post"}
        />
        <Button
          className="vegetation-monitoring-return-btn"
          text="Voltar"
          variant="outline"
        />
      </div>
    </div>
  );
};

export default VegetationMonitoring;